import React, { useState, useEffect } from "react";
import { IHeaderLinks } from "@/interfaces";
import ActiveLink from "@/components/Global/ActiveLink";
import cn from "classnames";
import { useRouter } from "next/router";
import Sidebar from "@/components/Global/Sidebar";

type Props = {
  logoAsIcon?: boolean;
};

const Header: React.FC<Props> = ({ logoAsIcon }) => {
  const headerLinks: IHeaderLinks[] = [
    {
      linkPath: "/solutions",
      linkText: "Solutions",
      activeLinkClass: "text-blue",
      hasAnchorTag: true,
    },
    {
      linkPath: "/about",
      linkText: "About",
      activeLinkClass: "text-blue-dark",
      hasAnchorTag: false,
    },
    {
      linkPath: "/connect",
      linkText: "Connect",
      activeLinkClass: "text-blue",
      hasAnchorTag: false,
    },
  ];
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!logoAsIcon) {
      if (document.scrollingElement.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", () => {
      if (!logoAsIcon) {
        if (document.scrollingElement.scrollTop > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (!logoAsIcon) {
          if (document.scrollingElement.scrollTop > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      });
    };
  }, []);

  const renderHeaderLinks = headerLinks.map(
    (link: IHeaderLinks, index: number) => {
      return (
        <React.Fragment key={index}>
          <ActiveLink
            linkPath={link.linkPath}
            linkText={link.linkText}
            activeLinkClass={link.activeLinkClass}
            hasAnchorTag={link.hasAnchorTag}
          />
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <header className="flex justify-between bg-transparent md:p-14 p-8 fixed top-0 w-full z-[9999] overflow-hidden">
        <nav
          className={cn("flex relative w-full items-center", {
            "justify-between": logoAsIcon,
            "justify-end": !logoAsIcon,
          })}
        >
          {!logoAsIcon ? (
            <a href="/" className="cursor-pointer">
              <div>
                <img
                  src="/logo.svg"
                  alt=""
                  className={cn(
                    "cool-transition absolute xl:block hidden left-0",
                    {
                      "-top-[200px]": isScrolled,
                      "top-0": !isScrolled,
                    }
                  )}
                />
                <img
                  src="/logo-dark.svg"
                  alt=""
                  className={cn(
                    "cool-transition absolute xl:hidden block md:w-1/4 w-1/2 left-0",
                    {
                      "-top-[200px]": isScrolled,
                      "top-0": !isScrolled,
                    }
                  )}
                />
              </div>
              <div>
                <img
                  src="/logo-icon.svg"
                  alt=""
                  className={cn(
                    "cool-transition absolute sm:w-16 w-10 left-0",
                    {
                      "left-0 md:-mt-7 sm:-mt-6 -mt-5": isScrolled,
                      "-left-[200px]": !isScrolled,
                    }
                  )}
                />
              </div>
            </a>
          ) : (
            <a href="/" className="cursor-pointer">
              <div>
                <img
                  src="/logo-icon.svg"
                  alt=""
                  className={cn("cool-transition w-14")}
                />
              </div>
            </a>
          )}
          <div className="md:flex hidden space-x-12">{renderHeaderLinks}</div>
          <div className="md:hidden block relative">
            <Sidebar key={router.pathname} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
