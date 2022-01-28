import React, { useEffect } from "react";
import HeroComponent from "@/components/Global/HeroComponent";
import { gsap, Cubic } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".panel").forEach((panel: any, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: 1 / 1,
        duration: 0.4,
        ease: Cubic.easeOut,
      },
    });

    gsap.to(".home-img", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: Cubic.easeOut,
    });
    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 0.7,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: Cubic.easeOut,
    });
    gsap.to(".hero-subtitle", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 1,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: Cubic.easeOut,
    });

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
      router.reload();
    });
  }, []);

  return (
    <>
      <section id="banner" className="panel">
        <HeroComponent
          classnames="xl:bg-[url('/img/gradients/gradient-3.png')] bg-[url('/img/gradients/mob-gradient.png')] section-1"
          sectionTitle={{ __html: "Data is" }}
          sectionSubtitle={{
            __html: "Know<br class='md:hidden block' />ledge",
          }}
          titleClass="hero-title"
          subtitleClass="hero-subtitle"
        >
          <div className="absolute 2xl:w-1/2 w-11/12 flex justify-center bottom-0 2xl:bottom-10 home-img">
            <img src="/img/home/banner-bg.svg" alt="" className="" />
          </div>
        </HeroComponent>
      </section>
      <section
        id="details-section"
        className="panel flex bg-blue-dark lg:py-0 py-20 md:px-0 px-8"
      >
        <div className="container mx-auto flex items-center h-full">
          <div className="flex flex-wrap w-full">
            <div className="w-full flex justify-center">
              <div>
                <h1 className="text-white font-medium md:text-5xl text-3xl md:leading-[70px] font-dm-sans">
                  We are <span className="text-blue">Dreams Engine</span>,{" "}
                  <br /> a Data-driven Marketing <br /> Consultant based in{" "}
                  <br /> Mexico City.
                </h1>
                <br />
                <h1 className="text-white font-medium md:text-5xl text-3xl md:leading-[62.5px] font-dm-sans">
                  We can help you achieve <br /> your{" "}
                  <span className="text-blue">business goals</span> <br />{" "}
                  throught strategic <br /> decisions{" "}
                  <span className="text-blue">
                    based on <br /> data analysis
                  </span>
                  .
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
