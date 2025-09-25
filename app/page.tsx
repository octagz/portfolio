import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Navigation } from "./components/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Octavio Gzain - Senior Software Engineer',
};

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <div className="px-4 min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation currentPage="home"/>
        <section className="pt-24 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Avatar className="h-36 w-36 relative">
                <AvatarImage alt="User Avatar" src="/profile_outside.jpg" className="object-cover absolute top-0 left-0 h-full w-full" />
                <AvatarFallback>OG</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold text-gray-200 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Octavio Gzain</h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-400">
                👨‍💻 Senior Software Engineer (Data/AI)
              </p>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg dark:text-400">
                🏢 <a href="https://www.compass.com/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Compass</a> • <a href="https://nuqlea.com/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Nuqlea</a> • <a href="https://www.digitalstrom.com/en/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">DigitalStrom</a>
              </p>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg dark:text-400">
                📍 Santa Bárbara, California
              </p>
              <div className="flex flex-row items-center space-x-2 text-center">
                <Badge className="bg-gray-800 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
                  Software Engineering Major
                </Badge>
                <Badge className="bg-gray-800 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
                  Data Science Specialization
                </Badge>
                <Badge className="bg-gray-800 hover:bg-gray-100/50 text-gray-200 dark:hover:bg-gray-800/50" variant="secondary">
                  Master in Technology Management
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center items-center space-x-2 gap-2">
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  Python
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  NodeJS
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  Express
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  Flask
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  React
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  NextJS
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  TensorFlow
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  GPT
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  Kubernetes
                </Badge>
                <Badge className="bg-slate-400/50 hover:bg-slate-600/70 text-slate-200 border-slate-600/30" variant="outline">
                  Docker
                </Badge>
              </div>
            </div>
          </div>
          <div className="px-4 flex justify-center lg:mx-0">
              <Card className="mt-10 max-w-4xl w-full rounded-lg bg-gradient-to-br from-zinc-800/20 to-zinc-900/40 backdrop-blur-sm border-0 shadow-xl" style={{ borderRadius: '1rem' }}>
                  <CardHeader>
                      <h2 className="text-2xl text-gray-200 font-bold">About Me</h2>
                  </CardHeader>
                  <CardContent>
                      <p className="text-justify text-gray-200 md:text-lg dark:text-gray-400">
                          Argentinian engineer with over 7 years of experience in software engineering, specializing in artificial intelligence and real-time data processing. 
                          Currently working as a Senior Software Engineer at Compass, where I develop and maintain services for ingesting listings in real time from over 200 different sources. 
                          Based in Santa Barbara, California, my technical background is complemented by strong business skills gained through my Master in Technology Management at UCSB. 
                          Every day I pursue my curiosity by learning new and interesting things, with aspirations to broaden these exploratory endeavors by offering services to different countries around the world.
                      </p>
                  </CardContent>
                  <CardHeader>
                      <h2 className="text-2xl text-gray-200 font-bold">Honors & Awards</h2>
                  </CardHeader>
                  <CardContent>
                      <div className="text-gray-200 md:text-lg dark:text-gray-400">
                          <p className="font-semibold">Fulbright Alumni</p>
                          <p className="text-sm text-gray-400">Issued by <a href="https://www.fulbrightprogram.org/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Fulbright Foreign Scholarship Board</a> · Nov 2024 · Associated with <a href="https://www.ucsb.edu/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">UC Santa Barbara</a></p>
                          <p className="mt-2">
                              I've been selected to be part of the Fulbright Alumni by the Fulbright Foreign Scholarship Board. The Fulbright Program offers grants to study, teach and conduct research for U.S. citizens to go abroad and for non-U.S. citizens to come to the United States.
                          </p>
                      </div>
                  </CardContent>
                  <CardHeader>
                      <h2 className="text-2xl text-gray-200 font-bold">Hobbies</h2>
                  </CardHeader>
                  <CardContent>
                      <p className="text-gray-200 md:text-lg dark:text-gray-400">
                          I love playing guitar, I was in a shoegaze band called 
                          <a href="https://www.instagram.com/laedaddelespacio/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer"> La edad del espacio</a> 🎸.
                          I also love playing football ⚽, DJing 🎶 and traveling around the world.
                      </p>
                  </CardContent>
              </Card>
          </div>

        </section>
      </div>
    </>
  )
}
