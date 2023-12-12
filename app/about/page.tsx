import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "../components/nav";

export default function Component() {
  return (
    <>

		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation currentPage="about"/>
      <section className="pt-24 w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Avatar className="h-36 w-36 relative">
              <AvatarImage alt="User Avatar" src="/Perfil3.png" className="object-cover absolute top-0 left-0 h-full w-full" />
              <AvatarFallback>OG</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-gray-200 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Octavio Gzain</h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-400">
              Sr. Software Engineer, AI | 
              <a href="https://nuqlea.com/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer"> Nuqlea </a>|
              <a href="https://www.digitalstrom.com/en/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer"> DigitalStrom </a>
            </p>
            <div className="flex flex-row items-center space-x-2 text-center">
              <Badge className="bg-gray-900 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
                Bachelor
              </Badge>
              <Badge className="bg-gray-900 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
                Specialization
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            <Card className="mt-10 max-w-4xl w-full px-4 rounded-lg" style={{ borderRadius: '1rem' }}>
                <CardHeader>
                    <h2 className="text-2xl text-gray-200 font-bold">About Me</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-200 md:text-lg dark:text-gray-400">
                        Argentinian engineer with over 5 years of experience in the tech industry, having a solid foundation in software engineering with 
                        a specialization in artificial intelligence. Every day I try to pursue my curiosity by learning new and interesting things. My dream
                        is to live in California.
                    </p>
                </CardContent>
                <CardHeader>
                    <h2 className="text-2xl text-gray-200 font-bold">Hobbies</h2>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-400 md:text-lg dark:text-gray-400">
                        I love playing guitar, I'm in a shoegaze band called 
                        <a href="https://www.instagram.com/laedaddelespacio/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer"> La edad del espacio</a> 🎸.
                        I also love playing football ⚽ and traveling around the world.
                    </p>
                </CardContent>
            </Card>
        </div>

      </section>
    </div>
    </>
  )
}
