
import { ElevenLabsClient } from "elevenlabs";

import { Input } from "@/components/ui/input";
import OpenAI from "openai";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  House,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Send,
  Settings,
  MicVocal,
  X,
  ShoppingCart,
  Upload,
  Users2,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { set, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { TooltipInstance } from "@/components/tooltipInstance";
import { Tooltip } from "@radix-ui/react-tooltip";
import { SideBar } from "@/components/sideBar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
    modeloLenguaje: z.string({
      required_error: "Por favor ingrese su modelo de lenguaje",
    }),
    modeloTranscripcion: z.string({
      required_error: "Por favor ingrese su modelo de transcripción",
    }),
    modeloLectura: z.string({
      required_error: "Por favor ingrese su modelo de lectura",
    }),
    contexto: z.string({
      required_error: "Por favor ingrese su contexto",
    }),
  });

export function ConfigBar({ onSubmit }: any) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      });
    return (
        <aside className="absolute inset-y-0 right-0 z-10 hidden w-[300px] flex-col border-l sm:flex">
          <section className="flex flex-col gap-4 px-4 sm:py-5">
            <h2 className="text-xl font-bold flex items-center gap-2 pb-3 border-b">
              <Settings className="w-6 h-6" />
              Configuración
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="modeloTranscripcion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo de Transcripción</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Modelo de transcripción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="openai-whisper">
                            OpenAi Whisper
                          </SelectItem>
                          <SelectItem value="speech-recognition">
                            Speech Recognition (GRATIS)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="modeloLenguaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo del Lenguaje</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Modelo del Lenguaje" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="openai-gpt">OpenAI GPT</SelectItem>
                          <SelectItem value="llama-local">LLAMA 3 (GRATIS)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="modeloLectura"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo de Lectura</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Modelo de Lectura" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="eleven-labs">ElevenLabs</SelectItem>
                          <SelectItem value="openai-tts">OpenAI TTS</SelectItem>
                          <SelectItem value="speech-synthesis">
                            Speech Synthesis (GRATIS)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                    control={form.control}
                    name="contexto"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Contexto</FormLabel>
                            <FormControl>
                                <Textarea 
                                    {...field}
                                    defaultValue={`Contexto: Eres un mesero que habla poco pero es asertivo en un restaurante. Tu tarea es atender las nesesidades del cliente a los clientes SE LO MAS CORTO Y CONSISO POSIBLE Y CONVENSELO.
      platos:
      - Bandeja paisa: $25.000
      - Ajiaco: $20.000
      - Sancocho: $18.000
      - Arepa de choclo: $5.000
      bebidas:
      - Agua de panela: $2.000
      - Jugo de lulo: $3.000
      - Limonada de coco: $4.000
      - Té de hierbabuena: $2.500`}
                                    placeholder="Contexto"
                                    rows={5}
                                />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                  <Save className="w-4 h-4 mr-1" />
                  <span>Guardar</span>
                </Button>
              </form>
            </Form>
          </section>
        </aside>
    )
}