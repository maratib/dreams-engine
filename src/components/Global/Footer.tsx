import React from "react";
import cn from "classnames";

type Props = {
  isFooterDark?: boolean;
};

const Footer: React.FC<Props> = ({ isFooterDark }) => {
  return (
    <>
      <footer className="fixed bottom-14 left-14 md:block hidden">
        <div>
          <p className="text-xs font-space-mono text-white mb-3">
            Let's Connect
          </p>
          <p
            className={cn("text-xs font-space-mono", {
              "text-blue": !isFooterDark,
              "text-blue-dark": isFooterDark,
            })}
          >
            lab@dreamsengine.io
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
