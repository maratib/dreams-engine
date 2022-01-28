import React, { useEffect } from "react";
import {
  ArrowDownIcon,
  MapMarkerIcon,
  PhoneIcon,
  EmailIcon,
} from "@/components/Global/Icons";
import cn from "classnames";
import gsap, { Cubic } from "gsap";

type Props = {
  label?: string;
  address?: string;
  phoneNumber?: string;
  emailAddress?: string;
  isActive?: boolean;
  hasBottomLine?: boolean;
  onHeaderClick?: () => void;
  accordionInnerID: string;
};

const AccordionItem: React.FC<Props> = ({
  label,
  isActive,
  address,
  phoneNumber,
  emailAddress,
  hasBottomLine,
  onHeaderClick,
  accordionInnerID,
}) => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".accordion__label",
      {
        x: 200,
        opacity: 0,
        duration: Cubic.easeOut,
        stagger: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        duration: Cubic.easeOut,
        stagger: 0.3,
      }, "-=0.8"
    );
  }, []);

  return (
    <div className="accordion w-full" role="tabpanel" aria-expanded={isActive}>
      <div
        className={cn(
          "flex justify-between items-center py-6 accordion__label w-full cursor-pointer relative z-50",
          {
            "border-b border-blue": hasBottomLine,
            "border-0": !hasBottomLine,
          }
        )}
        onClick={onHeaderClick}
      >
        <div>
          <h1
            className="font-dm-sans text-2xl text-blue outline-none focus:outline-none"
            role="tab"
          >
            {label}
          </h1>
        </div>
        <div className="sm:block hidden">
          <p
            className={cn(
              "outline-none focus:outline-none flex justify-center items-center h-8 w-8 rounded-full bg-blue transform cool-transition",
              {
                "rotate-180": isActive,
                "rotate-0": !isActive,
              }
            )}
          >
            <ArrowDownIcon classname="text-white fill-current" />
          </p>
        </div>
      </div>
      <div
        id={`connect-acc-${accordionInnerID}`}
        className={cn(
          "accordion__inner flex flex-wrap w-full overflow-hidden cool-transition",
          {
            "py-6 h-[200px]": isActive,
            "py-0 h-0": !isActive,
          }
        )}
        aria-hidden={!isActive}
      >
        <div className="flex items-center space-x-4 w-full">
          <div>
            <MapMarkerIcon classname="text-blue stroke-current" />
          </div>
          <div>
            <p className="text-white font-dm-sans sm:text-lg text-sm">
              {address}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 sm:my-6 my-4 w-full">
          <div>
            <PhoneIcon classname="text-blue stroke-current" />
          </div>
          <div>
            <p className="text-white font-dm-sans sm:text-lg text-sm">
              {phoneNumber}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full">
          <div>
            <EmailIcon classname="text-blue stroke-current" />
          </div>
          <div>
            <p className="text-white font-dm-sans sm:text-lg text-sm">
              {emailAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
