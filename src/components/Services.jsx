import { Smartphone, Globe, Palette, Code, Shield, Cloud, ChevronRight } from "lucide-react"

const Services = () => {
  // Array of service data
  const servicesData = [
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      icon: <Smartphone className="w-12 h-12 text-white" />,
      color: "#4393fc",
      link: "Learn about App Development",
      linkHref: "#app-development",
    },
    {
      title: "Web Development",
      description: "Responsive, fast and secure websites and web applications built with modern technologies.",
      icon: <Globe className="w-12 h-12 text-white" />,
      color: "#fc6b43",
      link: "Learn about Web Development",
      linkHref: "#web-development",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user satisfaction and improve user experience.",
      icon: <Palette className="w-12 h-12 text-white" />,
      color: "#9c43fc",
      link: "Learn about UI/UX Design",
      linkHref: "#uiux-design",
    },
    
  ]

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              link={service.link}
              linkHref={service.linkHref}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Modified ServiceCard component to use icons instead of images
const ServiceCard = ({ title, description, icon, color, link, linkHref }) => {
  return (
    <div className="w-full h-[480px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black shadow-sm hover:shadow-md transition-all duration-300">
      <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
        <div
          style={{
            background: `linear-gradient(123.9deg, ${color} 1.52%, rgba(0, 0, 0, 0) 68.91%)`,
          }}
          className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
        ></div>

        {/* Icon container instead of image */}
        <div className="absolute bottom-0 right-0 w-[80%] h-64 flex items-center justify-center group-hover:-bottom-5 transition-all duration-300">
          <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
            {icon}
          </div>
        </div>
      </figure>

      <article className="p-4 space-y-2">
        <div className="h-8 w-20 rounded-md" style={{ backgroundColor: color }}></div>
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="text-base leading-[120%] dark:text-gray-300 text-gray-600">{description}</p>
        <a
          href={linkHref}
          className="text-base dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex items-center gap-1 transition-all duration-300"
          style={{ color: color }}
        >
          {link}
          <span>
            <ChevronRight />
          </span>
        </a>
      </article>
    </div>
  )
}

export default Services;
