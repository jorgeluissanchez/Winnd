"use client";

import { Suspense, use, useEffect, useState } from "react";
import { Send, MicVocal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateMLCEngine } from "@mlc-ai/web-llm";
import { Input } from "@/components/ui/input";
import { SideBar } from "@/components/sideBar";

import { ConfigBar } from "@/components/configBar";
import {
  createAudioFromTextElevenLab,
  createAudioFromTextTTS,
  createAudioFromTextSpeechSynthesis,
  createAiResponseFromText,
  createTextResponseFromAudioWhisper,
  createAiResponseFromTextLocal
} from "@/lib/ia";
import { Messages } from "@/components/messages";
import { send } from "process";

const AsistenteWeb = () => {
  const [recorder, setRecorder] = useState(null as any);
  const [recognition, setRecognition] = useState(null as any);
  const [recordState, setRecordState] = useState(false);
  const [messages, setMessages] = useState([{}]);
  const [engine, setEngine]= useState(null as any)
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    modeloLenguaje: "",
    modeloTranscripcion: "",
    modeloLectura: "",
    contexto: "",
  });

  // Callback function to update model loading progress
  const initProgressCallback = (initProgress: any) => {
    console.log(initProgress);
  }
  useEffect(() => {
    const init = async () => {
      const selectedModel = "gemma-2b-it-q4f32_1-MLC";
      const engine = await CreateMLCEngine(
        selectedModel,
        { initProgressCallback: initProgressCallback }, // engineConfig
      );
      setEngine(engine)
    };
    init();
  }, []);

  const startRecording = async () => {
    setRecordState(true);
    switch (config.modeloTranscripcion) {
      case "speech-recognition": {
        const recognition: any = new ((window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition)();
        setRecognition(recognition);
        recognition.lang = "es-ES";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = (event: any) => {
          const transcription = event.results[0][0].transcript;
          sendAudioToBackend(transcription);
        };
        recognition.start();
        break;
      }
      case "openai-whisper": {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder: MediaRecorder = new MediaRecorder(stream);
        setRecorder(mediaRecorder);
        const audioChunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e: BlobEvent) => {
          if (e.data.size > 0) {
            audioChunks.push(e.data);
          }
        };
        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const transcription: any = await createTextResponseFromAudioWhisper(
            audioBlob
          );
          sendAudioToBackend(transcription);
        };
        mediaRecorder.start();
        break;
      }
      default:
        console.error("Action not recognized");
    }
  };

  const stopRecording = () => {
    setRecordState(false);
    switch (config.modeloTranscripcion) {
      case "speech-recognition": {
        recognition.stop();
        break;
      }
      case "openai-whisper": {
        recorder.stop();
        break;
      }
      default:
        console.error("Action not recognized");
    }
  };

  const sendAudioToBackend = async (transcription: string) => {
    let messagesclone = [...messages];
     messagesclone.push({ role: "user", content: transcription });
    setMessages((Messages) => [...Messages, { role: "user", content: transcription }]);
    let response = "";
    switch (config.modeloLenguaje) {
      case "openai-gpt": {
        response = await createAiResponseFromText(messagesclone);
        break;
      }
      case "llama-local": {
        response = await createAiResponseFromTextLocal(engine, messagesclone);
        break;
      }
      default:
        console.error("Action not recognized");
    }
    messagesclone.push({ role:"system", content: response });
    setMessages((Messages) => [...Messages, { role: "system", content: response }]);

    switch (config.modeloLectura) {
      case "eleven-labs": {
        await createAudioFromTextElevenLab(response);
        break;
      }
      case "openai-tts": {
        await createAudioFromTextTTS(response);
        break;
      }
      case "speech-synthesis": {
        await createAudioFromTextSpeechSynthesis(response);
        break;
      }
      default:
        console.error("Action not recognized");
    }
  };

  function onSubmit(data: any) {
    setConfig({
      modeloLenguaje: data.modeloLenguaje,
      modeloTranscripcion: data.modeloTranscripcion,
      modeloLectura: data.modeloLectura,
      contexto: data.contexto,
    });
    setMessages([{
      role:  "system",
      content: data.contexto,
    }]);
    alert("Configuración guardada");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideBar />
      <div className="relative flex flex-col sm:gap-4 sm:pl-14 sm:pr-[300px] w-full">
        <section className=" bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 flex flex-col h-screen">
          <div className="p-8 h-[calc(100vh-70px)] flex flex-col justify-end gap-4">
            <Suspense fallback={<p>Cargando...</p>}>
            <Messages
              messages={messages.slice(1, messages.length) as any[]}
              modeloLectura={config.modeloLectura}
            />
            </Suspense>
            
          </div>
          <div className="bg-white w-full h-[70px] gap-4 border-t sm:flex justify-center items-center px-[100px]">
            <Input placeholder="Escribe aquí tu mensaje" id="Input"/>
            <Button
              className="h-10 w-10 p-3"
              disabled={
                config.modeloLenguaje === "" ||
                config.modeloTranscripcion === "" ||
                config.modeloLectura === ""
              }
              onClick={() => {
                const transcription = (document.getElementById("Input") as HTMLInputElement).value;
                sendAudioToBackend(transcription);
                (document.getElementById("Input") as HTMLInputElement).value = "";
              }}
            >
              <Send />
            </Button>
            {recordState ? (
              <Button
                onClick={stopRecording}
                disabled={
                  config.modeloLenguaje === "" ||
                  config.modeloTranscripcion === "" ||
                  config.modeloLectura === ""
                }
                className="h-10 w-10 p-3"
              >
                <X />
              </Button>
            ) : (
              <Button
                onClick={startRecording}
                disabled={
                  config.modeloLenguaje === "" ||
                  config.modeloTranscripcion === "" ||
                  config.modeloLectura === ""
                }
                className="h-10 w-10 p-3"
              >
                <MicVocal />
              </Button>
            )}
          </div>
        </section>
      </div>
      <ConfigBar onSubmit={onSubmit} />
    </div>
  );
};

export default AsistenteWeb;
