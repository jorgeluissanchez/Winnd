"use client"
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export const Markdown = ({markdown}:any)=> {
  return (
    <>
        {markdown}
    </>
)
}