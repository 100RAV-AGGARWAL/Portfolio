import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "@/components/designs/Experiences";
import React from "react";

function experiences() {
  return (
    <Page
      currentPage="Experiences"
      meta={{ desc: "I'm an avid self-taught developer along with some real industry-level experience!" }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default experiences;
