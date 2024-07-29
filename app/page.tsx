"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const Home = () => {
 
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="bg-white flex items-center justify-center shadow sticky top-0 z-10 py-3">

            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 from-20% via-primary via-30% to-blue-700">Winnd</span>

    </header>
    <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden bg-blue-50">
      <section className="relative pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-heading-1">
              Bienvenido a {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 from-20% via-primary via-30% to-blue-700">Winnd</span>
            </h1>
            <p className="md:text-lg text-heading-3 my-8">
              Transformamos la experiencia de atención al cliente con inteligencia artificial avanzada.
            </p>
            <Link href="/asistente-web" passHref>
             <Button>Explorar</Button>
            </Link>
          </div>
          <div className="hidden md:flex md:flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">            
            <img src="/header-banner.png" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex flex-col md:flex-row gap-10 lg:gap-12">
          <div className="hidden md:mx-auto md:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 md:flex-1 md:flex md:w-5/12 lg:w-1/2 md:h-auto">
            <div className="w-full h-80 sm:h-96 midmd:h-full relative">
              <img src="/banner.png" alt="banner image" width="2300" height="2300" className="w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full cover scale-120 rounded"/>
            </div>
          </div>
          <div className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
            <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">Nuestros Servicios</h1>
            <p className="md:text-lg text-heading-3 mt-8">
              Ofrecemos soluciones integrales para mejorar la interacción con tus clientes.
            </p>
            <div className="pt-8 grid grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]">
              <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden bg-white">
                <h2 className="md:text-xl font-semibold text-heading-2 mb-4">WhatsApp</h2>
                <p className="md:text-lg text-heading-3">
                  Integración de modelos de lenguaje para atención al cliente en WhatsApp.
                </p>
              </div>
              <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden bg-white">
                <h2 className="md:text-xl font-semibold text-heading-2 mb-4">Chatbot</h2>
                <p className="md:text-lg text-heading-3">
                  Implementación de chatbots en tu sitio web para una atención al cliente eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex flex-col md:flex-row gap-10 lg:gap-12">
          <div className="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
            <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">Guía de Implementación</h1>
            <p className="md:text-lg text-heading-3 mt-8">
              Sigue estos pasos para integrar Winn en tu empresa:
            </p>
            <ul className="mt-8 space-y-4 text-heading-3 font-medium">
              <li>
                <span className="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">✓</span>
                Contáctanos
              </li>
              <li>
                <span className="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">✓</span>
                Implementación de servicios
              </li>
              <li>
                <span className="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">✓</span>
                Capacitación del equipo
              </li>
              <li>
                <span className="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">✓</span>
                Puesta en marcha
              </li>
            </ul>
          </div>
          <div className="hidden md:mx-auto md:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 md:flex-1 md:flex md:w-5/12 lg:w-1/2 md:h-auto">
            <div className="w-full h-80 sm:h-96 md:h-full relative">
              <img src="/banner-2.png" alt="banner image" width="1240" height="1385" className="w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full scale-120"/>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-blue-50 rounded-lg  dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto">
            <hr className="mb-6 mt-12 border-gray-200 mx-auto dark:border-gray-700 " />
            <span className="mb-6 block text-sm text-gray-500 text-center dark:text-gray-400">
                Creado con mucho amor por el equipo de Winn
            </span>
        </div>
    </footer>
    </div>
  );
};

export default Home;
