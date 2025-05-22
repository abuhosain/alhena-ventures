"use client";
import { ReactLenis } from "lenis/react";
import Services from "./Services";
import AnotherServices from "./AnotherSerivces.jsx";
import StatisticsSection from "./ui/StatisticSection.jsx";
export default function About() {
  return (
    <ReactLenis root>
      <main className="bg-black w-full ">
        <div className="wrapper">
          <section className="text-white h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl md:px-8 font-semibold text-center tracking-tight leading-[120%]">
              <Services />
            </h1>
          </section>

          <section className="text-white h-screen  w-full bg-slate-950    sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl md:px-8 font-semibold text-center tracking-tight leading-[120%]">
              <AnotherServices />
            </h1>
          </section>
          <section className="text-white  h-screen  w-full bg-slate-950    sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <StatisticsSection />
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}
