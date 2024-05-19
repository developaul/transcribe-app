import { Heart } from "lucide-react"
import { TypographyP } from "@/components/ui/Typography"

const Footer = () => {
  return (
    <footer className="container flex items-center justify-center py-6">
      <TypographyP className="flex items-center gap-1">
        Made by <a className="text-blue-500 hover:underline" target="_blank" href="https://github.com/developaul">@developaul</a> with
        <Heart className="h-4 w-4 fill-current text-blue-500" />
      </TypographyP>
    </footer>
  )
}

export default Footer