import { ElevenLabsClient } from "elevenlabs";

import OpenAI from "openai";


const ELEVENLABS_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_KEY;
const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_KEY;

const createAudioFromTextElevenLab = async (text: string) => {
  const client = new ElevenLabsClient({
    apiKey: ELEVENLABS_KEY,
  });
  const audioStream = await client.generate({
    voice: "Rachel",
    model_id: "eleven_turbo_v2_5",
    text,
  });

  const chunks: Buffer[] = [];
  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);
  const url = await bufferToBlobUrl(content);
  const $audio = document.createElement("audio");
  $audio.src = url;
  $audio.play();
};
const createAiResponseFromTextLocal = async (
  engine: any,
  messages: any[]
) => {
  const reply = await engine.chat.completions.create({
    messages,
  });
  console.log(reply.choices[0].message.content);
  return reply.choices[0].message.content;
};

const createAudioFromTextTTS = async (text: string) => {
  const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  const url = await bufferToBlobUrl(buffer);
  const $audio = document.createElement("audio");
  $audio.src = url;
  $audio.play();
};

const createAudioFromTextSpeechSynthesis = async (text: string) => {
  if (!window.speechSynthesis) {
    throw new Error("Web Speech API no soportada en este navegador.");
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
  window.speechSynthesis.speak(utterance);
};

const createAiResponseFromText = async (response: any[]) => {
  const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: response,
    stream: true,
  });
  let reply = "";
  for await (const chunk of completion) {
    const choice: any = chunk.choices[0];
    console.log(choice);
    reply += choice?.delta?.content ?? "";
  }
  return reply;
};
const bufferToBlobUrl = async (buffer: any, mimeType = "audio/mpeg") => {
  const blob = new Blob([buffer], { type: mimeType });
  const blobUrl = URL.createObjectURL(blob);
  return blobUrl;
};
function blobToMp3File(blob: any, fileName = "audio.mp3") {
  const file = new File([blob], fileName, { type: "audio/mpeg" });
  return file;
}
const createTextResponseFromAudioWhisper = async (blob: any) => {
  const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const transcription = await openai.audio.transcriptions.create({
    file: blobToMp3File(blob),
    model: "whisper-1",
    response_format: "text",
  });
  return transcription;
};
export {
  createAudioFromTextElevenLab,
  createAudioFromTextTTS,
  createAudioFromTextSpeechSynthesis,
  createAiResponseFromText,
  createTextResponseFromAudioWhisper,
  createAiResponseFromTextLocal
};
