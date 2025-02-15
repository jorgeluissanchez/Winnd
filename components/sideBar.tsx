"use client";
import Link from "next/link"
import {
    Computer,
  House,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { TooltipInstance } from '@/components/tooltipInstance';

const links = [
    {
        label: "Inicio",
        icon: House,
        link: "/"
        },
        {
        label: "Sistema de Punto de Venta",
        icon: Computer,
        link: "/asistente-web"
        }
    ]
    import React from "react";
import { link } from "fs";

    function IconLogo(props:any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          fill="none"
          viewBox="0 0 50 51"
        >
          <mask id="path-1-inside-1_7_402" fill="#fff">
            <path
              fillRule="evenodd"
              d="M20.853 10.313c3.117 0 5.877 1.541 7.57 3.909a1.21 1.21 0 001.601.322 9.23 9.23 0 014.856-1.373c4.957 0 9.01 3.897 9.308 8.815.021.35.204.67.494.865a9.405 9.405 0 014.146 7.814c0 5.19-4.175 9.395-9.325 9.395a9.23 9.23 0 01-4.946-1.429 1.187 1.187 0 00-1.513.218 9.273 9.273 0 01-6.984 3.17 9.23 9.23 0 01-4.92-1.413 1.143 1.143 0 00-1.212 0 9.23 9.23 0 01-4.92 1.413c-4.993 0-9.07-3.954-9.314-8.923a1.114 1.114 0 00-.258-.66 9.4 9.4 0 01-2.197-6.058c0-4.736 3.476-8.653 7.999-9.302a1.14 1.14 0 00.901-.721c1.34-3.533 4.736-6.042 8.714-6.042z"
              clipRule="evenodd"
            ></path>
          </mask>
          <path
            fill="#8ECAE6"
            d="M12.139 16.355l-1.848-.701 1.848.7zM34.557 38.63l1.055-1.67-1.055 1.67zm-1.513.218l-1.485-1.305 1.485 1.305zM21.14 40.606l1.05-1.675-1.05 1.675zm-1.212 0l1.05 1.675-1.05-1.675zm24.26-18.62l1.973-.119-1.973.12zm.494.865l-1.105 1.639 1.105-1.64zM5.436 32.436l-1.515 1.27 1.515-1.27zm22.988-18.214l-1.608 1.15 1.608-1.15zm1.6.322l-1.036-1.683 1.036 1.683zm.007-1.472c-2.046-2.861-5.392-4.736-9.178-4.736v3.953a7.315 7.315 0 015.963 3.082l3.215-2.3zm4.85-1.878c-2.157 0-4.177.61-5.893 1.667l2.073 3.366a7.253 7.253 0 013.82-1.08v-3.953zm11.28 10.673c-.36-5.943-5.26-10.673-11.28-10.673v3.954c3.892 0 7.099 3.063 7.334 6.958l3.946-.239zm-2.584 2.623a7.429 7.429 0 013.275 6.175h3.953c0-3.939-1.993-7.414-5.018-9.453l-2.21 3.278zm3.275 6.175c0 4.111-3.304 7.419-7.349 7.419v3.953c6.256 0 11.302-5.105 11.302-11.372h-3.953zm-7.349 7.419a7.254 7.254 0 01-3.89-1.124L33.5 40.303a11.207 11.207 0 006.002 1.734v-3.953zM26.06 43.995a11.25 11.25 0 008.469-3.841l-2.97-2.61a7.297 7.297 0 01-5.5 2.498v3.953zm-5.97-1.714a11.207 11.207 0 005.97 1.715v-3.954a7.254 7.254 0 01-3.87-1.11l-2.1 3.349zm-5.082 1.715c2.189 0 4.237-.629 5.97-1.715l-2.1-3.35a7.253 7.253 0 01-3.87 1.111v3.953zM3.72 33.192c.295 6.004 5.223 10.803 11.288 10.803v-3.954c-3.921 0-7.146-3.108-7.34-7.043l-3.948.194zm-2.458-6.815c0 2.788 1 5.348 2.659 7.328l3.03-2.54a7.423 7.423 0 01-1.736-4.788H1.262zm9.695-11.258c-5.493.788-9.695 5.536-9.695 11.258h3.953c0-3.75 2.752-6.835 6.303-7.345l-.561-3.913zm9.896-6.784c-4.833 0-8.943 3.05-10.562 7.318l3.696 1.402c1.061-2.798 3.743-4.767 6.866-4.767V8.336zm-9.335 10.697a3.116 3.116 0 002.47-1.977l-3.697-1.402a.837.837 0 01.666-.534l.561 3.913zM35.612 36.96a3.163 3.163 0 00-4.053.584l2.97 2.61a.79.79 0 01-1.028.148l2.111-3.342zM22.19 38.931a3.12 3.12 0 00-3.312 0l2.1 3.35a.833.833 0 01-.889 0l2.1-3.35zm20.025-16.825a3.103 3.103 0 001.362 2.384l2.21-3.278a.85.85 0 01.374.655l-3.946.239zM7.668 32.999a3.09 3.09 0 00-.717-1.833l-3.03 2.54a.863.863 0 01-.201-.513l3.948-.194zM26.817 15.37a3.187 3.187 0 004.245.856l-2.073-3.366a.783.783 0 01.563-.106.783.783 0 01.48.317l-3.215 2.3z"
            mask="url(#path-1-inside-1_7_402)"
          ></path>
          <mask id="path-3-inside-2_7_402" fill="#fff">
            <path
              fillRule="evenodd"
              d="M18.799 8.998c3.117 0 5.878 1.542 7.57 3.91a1.21 1.21 0 001.601.322 9.23 9.23 0 014.857-1.373c4.956 0 9.01 3.896 9.307 8.815.021.348.205.669.494.864a9.405 9.405 0 014.147 7.815c0 5.189-4.176 9.395-9.326 9.395a9.23 9.23 0 01-4.946-1.43 1.187 1.187 0 00-1.513.219 9.273 9.273 0 01-6.984 3.17 9.23 9.23 0 01-4.92-1.413 1.143 1.143 0 00-1.212 0 9.23 9.23 0 01-4.92 1.413c-4.993 0-9.07-3.954-9.313-8.924a1.113 1.113 0 00-.259-.66 9.4 9.4 0 01-2.197-6.058c0-4.735 3.477-8.652 7.999-9.301a1.14 1.14 0 00.901-.722c1.34-3.533 4.736-6.042 8.714-6.042z"
              clipRule="evenodd"
            ></path>
          </mask>
          <path
            fill="#023047"
            d="M9.184 15.762l-.28-1.957.28 1.957zm23.319 21.555l-1.056 1.671 1.056-1.671zm-13.417 1.975l1.05-1.675-1.05 1.675zm-1.212 0l1.05 1.674-1.05-1.674zm24.26-18.62l-1.973.12 1.973-.12zm.494.864l1.105-1.639-1.105 1.64zM3.641 31.781l-1.975.097 1.975-.097zm-.259-.66l1.515-1.27-1.515 1.27zM26.37 12.907l-1.608 1.15 1.608-1.15zm1.607-1.15c-2.046-2.86-5.392-4.735-9.178-4.735v3.953a7.315 7.315 0 015.963 3.082l3.215-2.3zm4.85-1.877c-2.157 0-4.177.61-5.893 1.666l2.073 3.367a7.253 7.253 0 013.82-1.08V9.88zm11.28 10.673c-.36-5.943-5.26-10.673-11.28-10.673v3.953c3.892 0 7.099 3.064 7.334 6.958l3.946-.238zm-2.584 2.622a7.428 7.428 0 013.275 6.176h3.953c0-3.94-1.993-7.414-5.018-9.454l-2.21 3.278zm3.275 6.176c0 4.111-3.304 7.419-7.349 7.419v3.953c6.256 0 11.302-5.106 11.302-11.372h-3.953zm-7.349 7.419a7.254 7.254 0 01-3.89-1.124l-2.112 3.342a11.207 11.207 0 006.002 1.735V36.77zM24.006 42.68a11.25 11.25 0 008.47-3.842l-2.97-2.61a7.296 7.296 0 01-5.5 2.499v3.953zm-5.97-1.715a11.207 11.207 0 005.97 1.715v-3.953a7.254 7.254 0 01-3.87-1.111l-2.1 3.35zm-5.082 1.715c2.189 0 4.238-.628 5.97-1.715l-2.1-3.349a7.254 7.254 0 01-3.87 1.11v3.954zM1.666 31.878c.295 6.004 5.223 10.803 11.288 10.803v-3.953c-3.92 0-7.146-3.108-7.34-7.044l-3.948.194zm-2.458-6.815c0 2.789 1 5.349 2.66 7.328l3.029-2.54a7.424 7.424 0 01-1.736-4.788H-.792zm9.695-11.258c-5.492.788-9.695 5.537-9.695 11.258h3.953c0-3.75 2.752-6.835 6.303-7.345l-.56-3.913zM18.8 7.022c-4.833 0-8.943 3.049-10.562 7.317l3.696 1.402c1.062-2.797 3.744-4.766 6.866-4.766V7.022zM9.464 17.718a3.116 3.116 0 002.47-1.977L8.236 14.34a.837.837 0 01.666-.534l.561 3.913zm24.094 17.928a3.163 3.163 0 00-4.052.584l2.97 2.61a.79.79 0 01-1.029.148l2.111-3.342zm-13.422 1.971a3.12 3.12 0 00-3.312 0l2.1 3.35a.833.833 0 01-.888 0l2.1-3.35zM40.16 20.791a3.103 3.103 0 001.362 2.384l2.21-3.278a.85.85 0 01.374.656l-3.946.238zM5.615 31.684a3.09 3.09 0 00-.718-1.832l-3.03 2.539a.863.863 0 01-.2-.513l3.948-.194zm19.147-17.627a3.187 3.187 0 004.245.856l-2.073-3.367a.783.783 0 01.564-.105.784.784 0 01.48.316l-3.216 2.3z"
            mask="url(#path-3-inside-2_7_402)"
          ></path>
        </svg>
      );
    }


export function SideBar({ children, text }: any) {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <IconLogo className="h-7 w-7 transition-all  group-hover:scale-110"/>
            <span className="sr-only">Winnd</span>
          </Link>
            {links.map((link, key) => (
                <TooltipInstance text={link.label} key={key}>   
                <Link
                    href={link.link}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                </Link>
                </TooltipInstance>
            ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        </nav>
      </aside>
    )
}
