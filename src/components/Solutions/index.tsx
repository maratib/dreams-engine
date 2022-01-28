import React, { useEffect, useState } from "react";
import SolutionHeroComponent from "@/components/Global/SolutionHeroComponent";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/Global/Icons";
import { useRouter } from "next/router";
import { gsap, Cubic } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SolutionSubPage from "@/components/Global/SolutionSubPage";
import solutionsSubPages from "@/utils/solutionsSubPages";
import { ISolutionSubPage } from "@/interfaces";

const Solutions: React.FC = () => {
  const router = useRouter();
  const [pageID, setPageID] = useState<string | number>(0);
  let solutionSubPageData: ISolutionSubPage = solutionsSubPages[pageID];
  const tl = gsap.timeline();

  const updatedPageID = (id: string | number) => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    setPageID(id);
    tl.to(".sub-page-container", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });
    gsap.fromTo(
      ".page-title",
      {
        x: -500,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      ".page-desc",
      {
        y: 500,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        delay: 0.6,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      ".page-back-btn",
      {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        delay: 1.2,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        delay: 1.2,
      }
    );
  };

  const closeSubpage = () => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    tl.to(".sub-page-container", {
      x: -1000,
      opacity: 0,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });
    gsap.fromTo(
      ".page-title",
      {
        x: 0,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        stagger: 0.3,
      },
      {
        x: -500,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      ".page-desc",
      {
        y: 0,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        delay: 0.6,
      },
      {
        y: 500,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      ".page-back-btn",
      {
        x: 0,
        opacity: 0,
        duration: 1,
        ease: "ease.out",
        delay: 1.2,
      },
      {
        x: -200,
        opacity: 1,
        duration: 1,
        ease: "ease.out",
        delay: 1.2,
      }
    );
  };

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
        snapTo: 1 / 10,
        duration: 0.7,
        ease: Cubic.easeOut,
      },
    });

    tl.set(".sub-page-container", {
      x: -1000,
      opacity: 0,
      ease: Cubic.easeInOut,
    });

    tl.to(".our-solutions-text", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play reverse restart restart",
        scrub: 0.6,
      },
      y: -200,
      opacity: 0,
      ease: "ease.out",
    });
    tl.to(".solutions-pagination", {
      scrollTrigger: {
        trigger: ".section-1",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play reverse restart restart",
        scrub: 1,
      },
      y: -200,
      opacity: 0,
      ease: "ease.out",
    });

    // Digital transition section animation
    tl.to(".digital-img", {
      scrollTrigger: {
        trigger: ".section-2",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".digital-text", {
      scrollTrigger: {
        trigger: ".section-2",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".digital-discover-more", {
      scrollTrigger: {
        trigger: ".section-2",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".digital-pagination", {
      scrollTrigger: {
        trigger: ".section-2",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "play restart reverse play",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Digital transition section animation ends

    // Data science section animation
    tl.to(".data-img", {
      scrollTrigger: {
        trigger: ".section-3",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".data-text", {
      scrollTrigger: {
        trigger: ".section-3",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".data-discover-more", {
      scrollTrigger: {
        trigger: ".section-3",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".data-pagination", {
      scrollTrigger: {
        trigger: ".section-3",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Data science section animation ends

    // Research section animation
    tl.to(".research-img", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".research-text", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".research-discover-more", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".research-pagination", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Research section animation ends

    // UX Products section animation
    tl.to(".ux-products-img", {
      scrollTrigger: {
        trigger: ".section-5",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".ux-products-text", {
      scrollTrigger: {
        trigger: ".section-5",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".ux-products-discover-more", {
      scrollTrigger: {
        trigger: ".section-5",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".ux-products-pagination", {
      scrollTrigger: {
        trigger: ".section-5",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // UX Products section animation ends

    // Technology section animation
    tl.to(".technology-img", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".technology-text", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".technology-discover-more", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".technology-pagination", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Technology section animation ends

    // SEO section animation
    tl.to(".seo-img", {
      scrollTrigger: {
        trigger: ".section-7",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".seo-text", {
      scrollTrigger: {
        trigger: ".section-7",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".seo-discover-more", {
      scrollTrigger: {
        trigger: ".section-7",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".seo-pagination", {
      scrollTrigger: {
        trigger: ".section-7",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // SEO section animation ends

    // Media Consulting section animation
    tl.to(".media-consulting-img", {
      scrollTrigger: {
        trigger: ".section-8",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-consulting-text", {
      scrollTrigger: {
        trigger: ".section-8",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-consulting-discover-more", {
      scrollTrigger: {
        trigger: ".section-8",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-consulting-pagination", {
      scrollTrigger: {
        trigger: ".section-8",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Media Consulting section animation ends

    // Casino Consulting section animation
    tl.to(".casino-consulting-img", {
      scrollTrigger: {
        trigger: ".section-9",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".casino-consulting-text", {
      scrollTrigger: {
        trigger: ".section-9",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".casino-consulting-discover-more", {
      scrollTrigger: {
        trigger: ".section-9",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".casino-consulting-pagination", {
      scrollTrigger: {
        trigger: ".section-9",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Casino Consulting section animation ends

    // Promotes section animation
    tl.to(".promotes-img", {
      scrollTrigger: {
        trigger: ".section-10",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".promotes-text", {
      scrollTrigger: {
        trigger: ".section-10",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".promotes-discover-more", {
      scrollTrigger: {
        trigger: ".section-10",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".promotes-pagination", {
      scrollTrigger: {
        trigger: ".section-10",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Promotes section animation ends

    // Media Strategies section animation
    tl.to(".media-strategies-img", {
      scrollTrigger: {
        trigger: ".section-11",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart restart",
        scrub: 0.3,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-strategies-text", {
      scrollTrigger: {
        trigger: ".section-11",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.9,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-strategies-discover-more", {
      scrollTrigger: {
        trigger: ".section-11",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.2,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    tl.to(".media-strategies-pagination", {
      scrollTrigger: {
        trigger: ".section-11",
        start: "0 0",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    });
    // Media Strategies section animation ends

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
      router.reload();
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-50 sub-page-container">
        <SolutionSubPage
          pageTitle={solutionSubPageData.pageTitle}
          pageDesc={solutionSubPageData.pageDesc}
          pageBg={solutionSubPageData.pageBg}
          onBackClick={closeSubpage}
        />
      </div>
      <div className="fixed inset-0 h-screen w-full -z-[1] solution-bg bg-[url(/img/gradients/gradient-2.png)] bg-center bg-cover bg-no-repeat"></div>
      <section id="solutions-banner" className="panel">
        <SolutionHeroComponent
          classname={
            "h-full w-full relative hero-container flex items-center justify-center px-6 section-1"
          }
          sectionTitle={{ __html: "Our <br> Solutions" }}
          sectionTitleClass="our-solutions-text"
        >
          <div className="w-full absolute flex flex-wrap bottom-8 solutions-pagination">
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">
                Discover
              </span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Digital Transition Section */}
      <section id="digital-transitions" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-2"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Digital <br> Transition" }}
          sectionSubtitleClass="digital-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full digital-img">
            <img
              src="/img/solutions/digital-transition.png"
              alt=""
              className=""
            />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 digital-discover-more"
            onClick={() => updatedPageID(0)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 digital-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">01/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Digital Transition Section ends */}
      {/* Data Sciences Section */}
      <section id="data-science" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-3"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Data Science" }}
          sectionSubtitleClass="data-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full data-img">
            <img src="/img/solutions/data-science.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 data-discover-more"
            onClick={() => updatedPageID(1)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 data-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">02/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Data Sciences Section ends */}
      {/* Research Section */}
      <section id="research" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-4"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Research" }}
          sectionSubtitleClass="research-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full research-img">
            <img src="/img/solutions/research.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 research-discover-more"
            onClick={() => updatedPageID(2)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 research-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">03/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Research Section ends */}
      {/* UX Products Section */}
      <section id="ux-products" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-5"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "UX Products" }}
          sectionSubtitleClass="ux-products-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full ux-products-img">
            <img src="/img/solutions/ux-products.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 ux-products-discover-more"
            onClick={() => updatedPageID(3)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 ux-products-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">04/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* UX Products Section ends */}
      {/* Technology Section */}
      <section id="technology" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-6"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Technology" }}
          sectionSubtitleClass="technology-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full technology-img">
            <img src="/img/solutions/technology.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 technology-discover-more"
            onClick={() => updatedPageID(4)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 technology-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">05/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Technology Section ends */}
      {/* SEO Section */}
      <section id="seo" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-7"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "SEO" }}
          sectionSubtitleClass="seo-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full seo-img">
            <img src="/img/solutions/seo.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 seo-discover-more"
            onClick={() => updatedPageID(5)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 seo-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">06/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* SEO Section ends */}
      {/* Media Consulting Section */}
      <section id="media-consulting" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-8"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Media <br /> Consulting" }}
          sectionSubtitleClass="media-consulting-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full media-consulting-img">
            <img
              src="/img/solutions/media-consulting.png"
              alt=""
              className=""
            />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 media-consulting-discover-more"
            onClick={() => updatedPageID(6)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 media-consulting-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">07/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Media Consulting Section ends */}
      {/* Casino Consulting Section */}
      <section id="casino-consulting" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-9"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Casino <br /> Consulting" }}
          sectionSubtitleClass="casino-consulting-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full casino-consulting-img">
            <img
              src="/img/solutions/casino-consulting.png"
              alt=""
              className=""
            />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 casino-consulting-discover-more"
            onClick={() => updatedPageID(7)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 casino-consulting-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">08/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Casino Consulting Section ends */}
      {/* Promotes Section */}
      <section id="promotes" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-10"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Promotes" }}
          sectionSubtitleClass="promotes-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full promotes-img">
            <img src="/img/solutions/promotes.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 promotes-discover-more"
            onClick={() => updatedPageID(8)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 promotes-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">09/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Promotes Section ends */}
      {/* Media Strategies Section */}
      <section id="media-strategies" className="panel">
        <SolutionHeroComponent
          classname={
            "relative h-full overflow-hidden flex justify-center items-center section-11"
          }
          sectionTitle={{ __html: "" }}
          sectionSubtitle={{ __html: "Media <br /> Strategies" }}
          sectionSubtitleClass="media-strategies-text"
        >
          <div className="absolute xl:w-1/2 md:w-3/4 w-full media-strategies-img">
            <img src="/img/solutions/promotes.png" alt="" className="" />
          </div>
          <button
            className="outline-none focus:outline-none text-white font-space-mono text-xs absolute bottom-1/4 media-strategies-discover-more"
            onClick={() => updatedPageID(9)}
          >
            Discover more
          </button>
          <div className="w-full absolute flex flex-wrap bottom-8 media-strategies-pagination">
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowUpIcon classname="text-white fill-current" />
            </button>
            <span className="w-full flex justify-center my-4">
              <span className="text-white font-space-mono text-sm">10/10</span>
            </span>
            <button className="w-full flex justify-center outline-none focus:outline-none">
              <ArrowDownIcon classname="text-white fill-current" />
            </button>
          </div>
        </SolutionHeroComponent>
      </section>
      {/* Media Strategies Section ends */}
    </>
  );
};

export default Solutions;
