"use client"
import { Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { createAudioFromTextElevenLab, createAudioFromTextSpeechSynthesis, createAudioFromTextTTS } from "@/lib/ia";
import { useEffect, useState } from "react";
import { Markdown } from "@/components/markdown";

type Message = {
    role: string;
    content: string;
};

type MessagesProps = {
    messages: Message[];
    modeloLectura: string;
};

export const Messages = ({ messages, modeloLectura }: MessagesProps) => {
    const [modelo, setModelo] = useState(modeloLectura);
    useEffect(() => {
        setModelo(modeloLectura);
    }, [modeloLectura]);

    const readText = async (response: string) => {
        switch (modelo) {
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
    
    return (
        <>
            {messages.map((message, key) => (
                <div
                    className={`flex relative h-fit gap-3 text-gray-600 text-sm rounded p-5 shadow ${
                        message.role === 'user' ? "bg-white" : "bg-amber-50 shadow-amber-50"
                    }`}
                    key={key}
                >
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <div className="rounded-full bg-gray-100 border p-1">
                            {message.role === 'user' ? <UserIcon /> : <IAIcon />}
                        </div>
                    </span>
                    <p className="leading-relaxed">
                        <span className="block font-bold text-gray-700">
                            {message.role === 'user' ? 'Tu' : 'IA'}
                        </span>
                        <Markdown markdown={message.content} />
                    </p>
                    <Button className="absolute top-2 right-2 p-1.5 text-white text-xs h-6 w-6" onClick={() => readText(message.content)} disabled={modeloLectura === ''}>
                        <Volume2 />
                    </Button>
                </div>
            ))}
        </>
    );
}


const IAIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    strokeWidth="1.5"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zm8.446-7.189L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zm-1.365 11.852L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
  </svg>
)
const UserIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    strokeWidth="0"
    viewBox="0 0 16 16"
  >
    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
  </svg>
)