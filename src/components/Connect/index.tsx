import React, { useEffect } from "react";
import {
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
} from "@/components/Global/Icons";
import Accordion from "@/components/Global/Accordion";
import gsap, { Cubic } from "gsap";

const Connect: React.FC = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".connect-title",
      {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      }
    );
    tl.fromTo(
      ".connect-link-1",
      {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      "-=0.8"
    );
    tl.fromTo(
      ".connect-link-2",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      "-=0.8"
    );
    tl.fromTo(
      ".connect-link-3",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      "-=0.8"
    );
    tl.fromTo(
      ".connect-link-4",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Cubic.easeOut,
        stagger: 0.3,
      },
      "-=0.8"
    );
  }, []);

  return (
    <>
      <section className="h-screen bg-blue-dark flex items-center">
        <div className="container mx-auto md:px-0 px-10">
          <div className="md:w-2/3 w-full mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="lg:w-1/2 w-full lg:mb-0 mb-12 overflow-x-hidden">
                <h1 className="text-blue font-bely-display 2xl:text-8xl sm:text-7xl text-6xl mb-8 2xl:leading-[115.2px] connect-title">
                  Let's connect
                </h1>
                <div className="flex items-center space-x-4">
                  <a href="#" className="connect-link-1">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="connect-link-2">
                    <TwitterIcon />
                  </a>
                  <a href="#" className="connect-link-3">
                    <LinkedInIcon />
                  </a>
                  <a href="#" className="connect-link-4">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 overflow-hidden flex justify-start">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
