import React, { FC, PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export const TypographyH1: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export const TypographyH2: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}


export interface TypopgrahyProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> { }

export const TypographyP: FC<TypopgrahyProps> = ({ className, children, ...props }) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export const TypographyLarge: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>
}

export const TypographySmall: FC<PropsWithChildren> = ({ children }) => {
  return (
    <small className="text-sm font-medium leading-none">{children}</small>
  )
}
