import React from "react";
import { Navbar } from "@/components/Navbar";
import TopicBanner from "@/components/TopicBanner";
import { Subject } from "@/components/Subject";
import Course from "@/components/Course";
import OnlineCourse from "@/components/OnlineCourse";
import News from "@/components/News";
import HtmlEditor from "@/components/HtmlEditor";

const index = () => {
  return (
    <div>
      <Navbar />
      <TopicBanner />
      <Subject />
      <Course />
      <OnlineCourse />
      <News />
      <HtmlEditor />
    </div>
  );
};

export default index;
