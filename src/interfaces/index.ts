export interface IHeaderLinks {
  linkPath: string;
  linkText: string;
  activeLinkClass: string;
  hasAnchorTag?: boolean;
  classname?: string;
}

export interface IHomeBanner {
  backgroundImg: string;
  vectorImg: string;
  mainTitle: string;
  secondaryTitle: string;
}

export interface IHeroSection {
  id: string | number;
  classnames?: any;
  hasBgVector?: boolean;
  bgVector?: string;
  sectionTitle?: {
    __html: string;
  };
  sectionSubtitle?: {
    __html: string;
  };
  hasSectionIndicator?: boolean;
  sectionIndicator?: string | number;
  bgImg?: string;
}

export interface ISolutionSubPage {
  id: string | number;
  pageHeaderTitle: string;
  pageTitle: {
    __html: string;
  };
  pageDesc: {
    __html: string;
  };
  pageBg: string;
}

export interface IConnectAccordion {
  label?: string;
  address?: string;
  phoneNumber?: string;
  emailAddress?: string;
  isActive?: boolean;
  hasBottomLine?: boolean;
  accordionInnerID: string;
  accordionHeaderClass?: string;
}
