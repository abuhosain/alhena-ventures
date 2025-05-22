"use client"
import { ReactLenis } from "lenis/react"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export default function AboutCardSection() {
  return (
    <ReactLenis root>
      <main className="bg-black md:-mt-48">
        <div className="wrapper -mb-24">
          <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]"
            >
              ABOUT OUR <br /> COMPANY! 👇
            </motion.h1>
          </section>
        </div>

        <section className="text-white -mt-64 w-full bg-slate-950">
          <div className="flex flex-col lg:flex-row justify-between px-4 md:px-16">
            <div className="grid gap-2">
              {/* First Metric Card */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <motion.article
                  initial={{ opacity: 0, y: 50, rotate: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-br from-rose-100 to-rose-200 text-slate-900 h-auto w-[90vw] md:w-[30rem] rounded-lg rotate-6 p-6 grid place-content-center gap-4 shadow-xl"
                >
                  <div className="flex items-center justify-center mb-2">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="15" fill="#F9A8A8" />
                      <circle cx="60" cy="20" r="10" fill="#1A1A1A" />
                      <path
                        d="M20 70C20 59.5066 28.5066 51 39 51H41C51.4934 51 60 59.5066 60 70"
                        stroke="#1A1A1A"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <CountUp number={400} suffix="+" className="text-4xl md:text-5xl font-bold text-center" />
                  <h2 className="text-xl md:text-2xl font-semibold text-center">Delivered Software Projects.</h2>
                  <a
                    href="#projects"
                    target="_blank"
                    className="w-fit mx-auto bg-black text-white p-3 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
                    rel="noreferrer"
                  >
                    View Projects
                  </a>
                </motion.article>
              </figure>

              {/* Second Metric Card */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-br from-blue-100 to-blue-200 text-slate-900 h-auto w-[90vw] md:w-[30rem] rounded-lg p-6 grid place-content-center gap-4 shadow-xl"
                >
                  <div className="flex items-center justify-center mb-2">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="25" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
                      <rect x="35" y="10" width="10" height="10" fill="#6BA6FF" />
                      <rect x="35" y="60" width="10" height="10" fill="#6BA6FF" />
                      <rect x="10" y="35" width="10" height="10" fill="#6BA6FF" />
                      <rect x="60" y="35" width="10" height="10" fill="#6BA6FF" />
                    </svg>
                  </div>
                  <CountUp number={100} suffix="%" className="text-4xl md:text-5xl font-bold text-center" />
                  <h2 className="text-xl md:text-2xl font-semibold text-center">Service Satisfaction Guarantee.</h2>
                  <a
                    href="#testimonials"
                    target="_blank"
                    className="w-fit mx-auto bg-black text-white p-3 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
                    rel="noreferrer"
                  >
                    Read Testimonials
                  </a>
                </motion.article>
              </figure>

              {/* Third Metric Card */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <motion.article
                  initial={{ opacity: 0, y: 50, rotate: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-br from-indigo-100 to-indigo-200 text-slate-900 h-auto w-[90vw] md:w-[30rem] p-6 rounded-lg -rotate-6 grid place-content-center gap-4 shadow-xl"
                >
                  <div className="flex items-center justify-center mb-2">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 60L40 40L60 60H20Z" fill="#1A1A1A" />
                      <path d="M20 40L40 20L60 40H20Z" fill="#F9A8A8" />
                      <circle cx="65" cy="25" r="5" fill="#1A1A1A" />
                      <circle cx="75" cy="15" r="3" fill="#1A1A1A" />
                    </svg>
                  </div>
                  <CountUp number={100} suffix="%" className="text-4xl md:text-5xl font-bold text-center" />
                  <h2 className="text-xl md:text-2xl font-semibold text-center">Highly Accredited Security.</h2>
                  <a
                    href="#security"
                    target="_blank"
                    className="w-fit mx-auto bg-black text-white p-3 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
                    rel="noreferrer"
                  >
                    Learn About Security
                  </a>
                </motion.article>
              </figure>

              {/* Fourth Card - Original */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-blue-400 h-auto w-[90vw] md:w-[30rem] p-6 rounded-lg grid place-content-center gap-4 shadow-xl"
                >
                  <h1 className="text-2xl font-semibold">Animated Globe</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur explicabo assumenda odit
                    necessitatibus possimus ducimus aliquam. Ullam dignissimos animi officiis, in sequi et inventore
                    harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/globe"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
                    rel="noreferrer"
                  >
                    Click to View
                  </a>
                </motion.article>
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl px-8 font-medium text-center tracking-tight leading-[120%]">
                  Why Choose <br /> <span className="text-blue-400">Alhena Ventures</span>
                </h1>
                <p className="mt-6 text-gray-400 text-center max-w-xs mx-auto">
                  We deliver exceptional results with a focus on quality, security, and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="group bg-slate-950 -mt-44">
          <motion.h1
            initial={{ y: 100, opacity: 0.5 }}
            whileInView={{ y: 20, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear mb-30"
          >
            Alhena Ventures
          </motion.h1>
          <div className="bg-[#4ac0fa] h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer>
      </main>
    </ReactLenis>
  )
}

// CountUp component for animated number counting
const CountUp = ({ number, suffix = "", className = "" }) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const start = 0
    const end = Number.parseInt(number)
    const duration = 2000
    const startTime = performance.now()

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentCount = Math.round(progress * end)
        node.textContent = currentCount + suffix
        requestAnimationFrame(updateCount)
      } else {
        node.textContent = end + suffix
      }
    }

    requestAnimationFrame(updateCount)

    return () => {
      node.textContent = end + suffix
    }
  }, [number, suffix])

  return (
    <div ref={nodeRef} className={className}>
      0{suffix}
    </div>
  )
}
