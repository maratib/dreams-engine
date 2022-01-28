import React from "react";
import Layout from "@/components/Layout";
import SolutionSubPage from "@/components/Global/SolutionSubPage";
import { useRouter } from "next/router";
import solutionsSubPages from "@/utils/solutionsSubPages";
import { ISolutionSubPage } from "@/interfaces";

export default () => {
  const router = useRouter();
  let pageID = Number(router.query.id);
  let solutionSubPageData: ISolutionSubPage = solutionsSubPages[pageID];

  if (!solutionSubPageData) return <div></div>;

  return (
    <>
      {solutionSubPageData !== undefined && (
        <Layout
          title={solutionSubPageData.pageHeaderTitle}
          hasNavigation={false}
        >
          <SolutionSubPage
            pageTitle={solutionSubPageData.pageTitle}
            pageDesc={solutionSubPageData.pageDesc}
            pageBg={solutionSubPageData.pageBg}
          />
        </Layout>
      )}
    </>
  );
};
