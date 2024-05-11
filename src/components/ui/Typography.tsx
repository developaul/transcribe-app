import { FC, PropsWithChildren } from "react"

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

export const TypographyP: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}


export const TypographySmall: FC<PropsWithChildren> = ({ children }) => {
  return (
    <small className="text-sm font-medium leading-none">{children}</small>
  )
}
