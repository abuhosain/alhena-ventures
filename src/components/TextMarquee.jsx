import ScrollBaseAnimation from "../components/ui/text-marquee"
import { Code, Globe, Smartphone, Shield, Palette, Database, Cloud, Cpu, LineChart, BrainCircuit } from "lucide-react"

const TextMarquee = () => {
  return (
    <>
      <div className="grid place-content-center bg-[#e3e5d8">
        <ScrollBaseAnimation delay={500} baseVelocity={-3} clasname="font-bold tracking-[-0.07em] leading-[90%] flex">
          <span className="flex items-center mx-8">
            <Shield className="w-6 h-6 mr-2 text-blue-600" />
            Cyber Security
          </span>
          <span className="flex items-center mx-8">
            <Code className="w-6 h-6 mr-2 text-indigo-600" />
            Software Development
          </span>
          <span className="flex items-center mx-8">
            <Globe className="w-6 h-6 mr-2 text-green-600" />
            Web Development
          </span>
          <span className="flex items-center mx-8">
            <Smartphone className="w-6 h-6 mr-2 text-purple-600" />
            Mobile Apps
          </span>
          <span className="flex items-center mx-8">
            <Palette className="w-6 h-6 mr-2 text-pink-600" />
            UI/UX Design
          </span>
        </ScrollBaseAnimation>
        <ScrollBaseAnimation delay={500} baseVelocity={3} clasname="font-bold tracking-[-0.07em] leading-[90%] flex">
          <span className="flex items-center mx-8">
            <Database className="w-6 h-6 mr-2 text-orange-600" />
            Database Solutions
          </span>
          <span className="flex items-center mx-8">
            <Cloud className="w-6 h-6 mr-2 text-sky-600" />
            Cloud Services
          </span>

          <span className="flex items-center mx-8">
            <LineChart className="w-6 h-6 mr-2 text-yellow-600" />
            Data Analytics
          </span>
          <span className="flex items-center mx-8">
            <BrainCircuit className="w-6 h-6 mr-2 text-teal-600" />
            AI Solutions
          </span>
        </ScrollBaseAnimation>
      </div>
    </>
  )
}

export default TextMarquee
