import React, { useEffect } from "react";
import { ArrowRightIcon } from "@/components/Global/Icons";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About: React.FC = () => {
  const clients: string[] = [
    "/img/about/clients/client-1.svg",
    "/img/about/clients/client-2.svg",
    "/img/about/clients/client-3.svg",
    "/img/about/clients/client-4.svg",
    "/img/about/clients/client-5.svg",
    "/img/about/clients/client-6.svg",
    "/img/about/clients/client-7.svg",
    "/img/about/clients/client-8.svg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  const renderClients = clients.map((client: string, index: number) => {
    return (
      <React.Fragment key={index}>
        <div
          className={
            "lg:w-1/4 lg:block flex justify-center md:w-1/3 w-1/2 mb-6 p-4 client-" +
            index
          }
        >
          <img src={client} alt="" />
        </div>
      </React.Fragment>
    );
  });

  const animateText = (text: string, delay: number) => {
    gsap.fromTo(
      text,
      {
        y: 200,
        opacity: 0,
        duration: 1,
        delay,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".about-img",
      {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
      }
    );
    animateText(".about-title", 0.6);
    animateText(".about-text-1", 0.8);
    animateText(".about-text-2", 1);
    animateText(".about-text-3", 1.2);
    animateText(".about-text-4", 1.4);

    gsap.fromTo(
      ".client-0",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-1",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: -200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-2",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: -200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-3",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-4",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: -200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-5",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-6",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
    gsap.fromTo(
      ".client-7",
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 200,
        opacity: 0,
        duration: .7,
        ease: "ease.out",
      },
      {
        scrollTrigger: {
          trigger: ".client-0",
          toggleActions: "restart none none reverse",
          start: "top center",
        },
        x: 0,
        opacity: 1,
        duration: .7,
        ease: "ease.out",
      }
    );
  }, []);

  return (
    <>
      <section className="md:py-40 py-36 min-h-screen bg-[url(/img/about/about-bg.svg)] bg-center bg-cover bg-no-repeat overflow-x-hidden">
        <div className="container mx-auto md:px-6 px-4">
          <div className="lg:w-[720px] w-full mx-auto flex flex-wrap">
            <div
              id="about-content-container"
              className="flex flex-wrap relative w-full"
            >
              <div className="absolute left-0 top-0 md:w-[360px] lg:h-[360px] md:h-[280px] sm:w-[300px] about-img">
                <img
                  src="/img/about/about-banner.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-[58%] sm:w-[70%] w-full ml-auto relative z-20 md:px-0 px-6 md:mt-0 mt-4">
                <h1 className="text-white lg:text-8xl md:text-6xl text-4xl lg:leading-[115.2px] leading-snug font-bely-display lg:my-10 my-6 about-title">
                  About <br className="md:hidden" /> Dreams
                </h1>
                <p className="text-white text-lg font-dm-sans leading-[23.44px] lg:mb-10 mb-6 about-text-1">
                  We've been here for almost 10 years, helping and transforming
                  brands and businesses to have more understanding and better
                  communication with their audience.
                </p>
                <p className="text-blue-dark text-lg font-dm-sans leading-[23.44px] about-text-2">
                  How do we do it?
                </p>
                <p className="text-white text-lg font-dm-sans leading-[23.44px] lg:mb-10 mb-6 about-text-3">
                  Easy! By collecting, designing, and using helpful data.
                </p>
                <p className="text-white text-lg font-dm-sans leading-[23.44px] lg:mb-10 mb-6 about-text-4">
                  With our sense of creativity and technological knowledge, we
                  focus on the information obtained, analyze it, interpret it,
                  and offer you comprehensive solutions that will improve your
                  processes, your digital ecosystem, and obviously, your sales.
                </p>
                <button className="outline-none focus:outline-none bg-transparent flex items-center text-blue-dark space-x-4 text-xs font-space-mono">
                  <span>meet our team</span>
                  <ArrowRightIcon classname="fill-current" />
                </button>
              </div>
            </div>
            <div
              id="about-client-container"
              className="w-full flex flex-wrap items-center px-6 md:mt-20 mt-10"
            >
              {renderClients}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
