'use client'

import { useEffect, useRef } from 'react'
import katex from 'katex'

interface MathProps {
  children: string
  block?: boolean
}

export default function Math({ children, block = false }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          displayMode: block,
          throwOnError: false,
        })
      } catch (error) {
        console.error('KaTeX rendering error:', error)
        if (containerRef.current) {
          containerRef.current.textContent = children
        }
      }
    }
  }, [children, block])

  return block ? (
    <div className="my-4 text-center">
      <span ref={containerRef} />
    </div>
  ) : (
    <span ref={containerRef} className="inline-block mx-1" />
  )
}
