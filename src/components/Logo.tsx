import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <picture>
        <Image
          src="/logo.svg"
          alt="Transcribe App Logo"
          width="50"
          height="50"
        />
      </picture>
    </Link>
  )
}

export default Logo