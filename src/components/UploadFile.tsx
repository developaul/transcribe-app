'use client'

import { useRef } from "react";
import { UploadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/Typography";
import { Input } from "@/components/ui/input";

const UploadFile = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleOpenFileSystem = () => inputRef.current?.click()

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex md:h-96 flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-gray-500 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
        <UploadIcon className="h-10 w-10" />
        <TypographyP className="text-center" >Drag and drop your audio file or</TypographyP>
        <Button onClick={handleOpenFileSystem} variant="outline">Select file</Button>
        <Input accept=".mp3,audio/*" className="hidden" ref={inputRef} type="file" />
      </div>
    </div>
  )
}

export default UploadFile