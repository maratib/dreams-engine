import React from "react";
import cn from "classnames";

type Props = {
  sectionTitle?: {
    __html: string;
  };
  sectionTitleClass?: string;
  sectionSubtitle?: {
    __html: string;
  };
  sectionSubtitleClass?: string;
  classname?: any;
};

const SolutionHeroComponent: React.FC<Props> = ({
  sectionTitle,
  sectionSubtitle,
  sectionTitleClass,
  sectionSubtitleClass,
  children,
  classname,
}) => {
  return (
    <>
      <div className={cn(classname)}>
        <div className="relative z-10 text-center px-4">
          {sectionTitle && (
            <h1
              className={cn(
                "xl:text-[144px] md:text-[100px] text-6xl font-bely-display text-white xl:leading-[172.8px] leading-tight hero-title break-words",
                sectionTitleClass
              )}
              dangerouslySetInnerHTML={sectionTitle}
            ></h1>
          )}
          {sectionSubtitle && (
            <h1
              className={cn(
                "xl:text-[134px] md:text-[100px] text-6xl font-bely-display text-blue xl:leading-[172.8px] leading-tight hero-title break-words",
                sectionSubtitleClass
              )}
              dangerouslySetInnerHTML={sectionSubtitle}
            ></h1>
          )}
        </div>
        {children}
      </div>
    </>
  );
};

export default SolutionHeroComponent;
