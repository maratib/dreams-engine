import React from "react";
import { ArrowLeftIcon } from "@/components/Global/Icons";
import cn from "classnames";

type Props = {
  pageTitle: {
    __html: string;
  };
  pageDesc: {
    __html: string;
  };
  pageBg: string;
  onBackClick?: () => void;
};

const SolutionSubPage: React.FC<Props> = ({
  pageTitle,
  pageDesc,
  pageBg,
  onBackClick,
}) => {

  return (
    <>
      <section
        className={cn(
          "min-h-screen py-20 flex justify-center items-center",
          pageBg
        )}
      >
        <div className="container mx-auto lg:px-0 md:px-6 px-4">
          <div className="flex flex-wrap lg:w-4/5 w-full mx-auto items-center overflow-hidden">
            <div className="md:w-1/2 w-full md:mb-0 mb-6">
              <h1
                className="text-blue xl:text-8xl lg:text-6xl text-5xl font-bely-display xl:leading-[115.2px] lg:leading-snug leading-snug mb-6 page-title"
                dangerouslySetInnerHTML={pageTitle}
              ></h1>
              <button
                className="outline-none focus:outline-none bg-transparent flex items-center space-x-4 page-back-btn"
                onClick={onBackClick}
              >
                <span>
                  <ArrowLeftIcon classname="fill-current text-white" />
                </span>
                <span className="text-white font-xs font-space-mono">
                  Go Back
                </span>
              </button>
            </div>
            <div className="md:w-1/2 w-full">
              <p
                className="text-white text-lg leading-[23.44px] font-dm-sans md:pl-10 page-desc"
                dangerouslySetInnerHTML={pageDesc}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSubPage;
