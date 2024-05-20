import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

import { TypographyH1, TypographyLarge } from '@/components/ui/Typography'

const Hero = () => {

  return (
    <section className="container h-svh flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-14">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center justify-center text-center lg:text-left">
          <TypographyH1>
            Transcribe Your Audio with Ease
          </TypographyH1>

          <TypographyLarge>
            Transcribe App is a powerful audio transcription tool that delivers accurate and reliable transcripts in minutes.
          </TypographyLarge>
        </div>
        <div className='flex items-center justify-center lg:justify-start'>
          <Link href="/workspace">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/desktop.webp"
        alt="Desktop"
        width={550}
        height={550}
        className="object-cover rounded-xl"
      />
    </section>
  )

}

export default Hero