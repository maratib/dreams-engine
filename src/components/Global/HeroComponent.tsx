import React from "react";
import cn from "classnames";

type Props = {
  id?: string;
  classnames?: any;
  sectionTitle?: {
    __html: string;
  };
  sectionSubtitle?: {
    __html: string;
  };
  titleClass?: string;
  subtitleClass?: string;
};

const HeroComponent: React.FC<Props> = ({
  id,
  classnames,
  sectionTitle,
  sectionSubtitle,
  titleClass,
  subtitleClass,
  children,
}) => {
  return (
    <>
      <section
        id={id}
        className={cn(
          "xl:h-screen h-full w-full relative hero-container flex items-center justify-center px-6 overflow-hidden bg-no-repeat bg-center bg-cover bg-fixed",
          classnames
        )}
      >
        <div className="relative z-10 text-center px-4">
          {sectionTitle.__html !== "" && (
            <h1
              className={cn(
                "xl:text-[144px] md:text-[100px] text-[80px] font-bely-display text-white xl:leading-[172.8px] leading-tight break-words",
                titleClass
              )}
              dangerouslySetInnerHTML={sectionTitle}
            ></h1>
          )}
          {sectionSubtitle.__html !== "" && (
            <h1
              className={cn(
                "xl:text-[134px] md:text-[100px] text-[90px] font-bely-display lg:text-blue text-blue-medium xl:leading-[172.8px] leading-tight",
                subtitleClass
              )}
              dangerouslySetInnerHTML={sectionSubtitle}
            ></h1>
          )}
        </div>
        {/* {hasBgVector && (
            <img
              src={bgVector}
              alt=""
              className="absolute 2xl:bottom-10 bottom-0 left-1/2 right-1/2 transform -translate-x-1/2 hero-img xl:w-auto lg:w-1/2 w-3/4"
            />
          )} */}
        {children}
        {/* {hasSectionIndicator && (
          <>
            <div className="w-full absolute flex flex-wrap bottom-8">
              <div className="w-full flex justify-center">
                <ArrowUpIcon classname="text-white fill-current" />
              </div>
              <div className="w-full flex justify-center my-4">
                <p className="text-white font-space-mono text-sm">
                  {sectionIndicator} / 10
                </p>
              </div>
              <div className="w-full flex justify-center">
                <ArrowDownIcon classname="text-white fill-current" />
              </div>
            </div>
          </>
        )} */}
      </section>
    </>
  );
};

export default HeroComponent;
