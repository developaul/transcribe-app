import React from 'react'
import Image from 'next/image'

import { TypographyH2, TypographyLarge } from '@/components/ui/Typography'

const CrossPlatform = () => {

  return (
    <section className="bg-slate-50 dark:bg-gray-950 lg:py-0">
      <div className="container h-svh flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-14">
        <Image
          src="/tablet.webp"
          alt="Tablet"
          width={350}
          height={350}
          className="object-cover rounded-xl order-1 lg:order-none"
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center text-center lg:text-left lg:items-start">
            <TypographyH2>
              Cross-platform Compatibility
            </TypographyH2>

            <TypographyLarge>
              Transcribe App is available on all your devices, so you can transcribe your audio files anytime, anywhere.
            </TypographyLarge>
          </div>
        </div>
      </div>
    </section>
  )

}

export default CrossPlatform