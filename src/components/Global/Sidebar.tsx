import React, { useState, useEffect } from "react";
import { HamburgerIcon, CrossIcon } from "@/components/Global/Icons";
import gsap, { Cubic } from "gsap";
import { IHeaderLinks } from "@/interfaces";
import ActiveLink from "@/components/Global/ActiveLink";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  let [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const tl = gsap.timeline();
  const headerLinks: IHeaderLinks[] = [
    {
      linkPath: "/solutions",
      linkText: "Solutions",
      activeLinkClass: "text-blue",
      hasAnchorTag: true,
      classname: "text-2xl link-1",
    },
    {
      linkPath: "/about",
      linkText: "About",
      activeLinkClass: "text-blue",
      hasAnchorTag: false,
      classname: "text-2xl link-2",
    },
    {
      linkPath: "/connect",
      linkText: "Connect",
      activeLinkClass: "text-blue",
      hasAnchorTag: false,
      classname: "text-2xl link-3",
    },
  ];

  const renderHeaderLinks = headerLinks.map(
    (link: IHeaderLinks, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="w-full sidebar-link">
            <ActiveLink
              linkPath={link.linkPath}
              linkText={link.linkText}
              activeLinkClass={link.activeLinkClass}
              hasAnchorTag={link.hasAnchorTag}
              classname={link.classname}
            />
          </div>
        </React.Fragment>
      );
    }
  );

  const toggleMenu = () => {
    setSidebarActive((sidebarActive = !sidebarActive));

    if (sidebarActive) {
      tl.to(".sidebar", {
        x: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.3,
        ease: Cubic.easeInOut,
      });
      tl.to(
        ".sidebar-link",
        {
          x: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
      tl.to(
        ".ham-icon",
        {
          x: -50,
          position: "static",
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
      tl.to(
        ".cross-icon",
        {
          x: -17,
          position: "static",
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
    } else {
      tl.to(".sidebar", {
        x: -500,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        ease: Cubic.easeInOut,
      });
      tl.to(
        ".sidebar-link",
        {
          x: 100,
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
      tl.to(
        ".ham-icon",
        {
          x: 15,
          position: "static",
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
      tl.to(
        ".cross-icon",
        {
          x: 50,
          position: "static",
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: Cubic.easeInOut,
        },
        "-=1"
      );
    }
  };

  useEffect(() => {
    tl.set(".cross-icon", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });
    tl.set(".ham-icon", {
      x: 15,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });
    tl.set(".sidebar", {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });
    tl.set(".sidebar-link", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: Cubic.easeInOut,
      stagger: 0.3,
    });

    return () => {
      tl.set(".cross-icon", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeInOut,
        stagger: 0.3,
      });
      tl.set(".ham-icon", {
        x: 15,
        duration: 1,
        ease: Cubic.easeInOut,
        stagger: 0.3,
      });
      tl.set(".sidebar", {
        x: -500,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeInOut,
        stagger: 0.3,
      });
      tl.set(".sidebar-link", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: Cubic.easeInOut,
        stagger: 0.3,
      });
    };
  }, [router.pathname]);

  return (
    <>
      <button
        className="relative z-50 outline-none focus:outline-none flex overflow-hidden"
        onClick={toggleMenu}
      >
        <HamburgerIcon classname="fill-current text-white ham-icon" />
        <CrossIcon classname="fill-current text-white cross-icon" />
      </button>
      <div className="fixed h-screen inset-0 z-30 bg-blue-dark flex items-center justify-center sidebar">
        <div className="flex flex-wrap text-center space-y-6 overflow-hidden">
          {renderHeaderLinks}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
