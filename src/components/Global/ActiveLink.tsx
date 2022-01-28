import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
 
type Props = {
  linkPath: string;
  linkText: string;
  activeLinkClass: string;
  hasAnchorTag?: boolean;
  classname?: string;
};

const ActiveLink: React.FC<Props> = ({
  linkPath,
  linkText,
  activeLinkClass,
  hasAnchorTag,
  classname
}) => {
  const router = useRouter();

  const toggleLinks = () => {
    if (router.pathname.toLowerCase().includes(linkPath)) {
      if (hasAnchorTag) {
        return (
          <>
            <a
              href={linkPath}
              className={cn(
                "text-xs font-space-mono cursor-pointer",
                activeLinkClass,
                classname
              )}
            >
              <span>{linkText}</span>
            </a>
          </>
        );
      } else {
        return (
          <>
            <Link href={linkPath}>
              <span
                className={cn(
                  "text-xs font-space-mono cursor-pointer",
                  activeLinkClass,
                  classname
                )}
              >
                {linkText}
              </span>
            </Link>
          </>
        );
      }
    } else {
      if (hasAnchorTag) {
        return (
          <>
            <a
              href={linkPath}
              className={cn("text-xs text-white font-space-mono cursor-pointer", classname)}
            >
              <span>{linkText}</span>
            </a>
          </>
        );
      } else {
        return (
          <>
            <Link href={linkPath}>
              <span className={cn("text-xs text-white font-space-mono cursor-pointer", classname)}>
                {linkText}
              </span>
            </Link>
          </>
        );
      }
    }
  };

  return <>{toggleLinks()}</>;
};

export default ActiveLink;
