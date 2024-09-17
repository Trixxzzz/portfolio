import React from "react";
import PageHeaderContent from "../../Components/PageHeaderContent/PageHeaderContent";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css"
import "./Resume.scss"
import {MdWork} from "react-icons/md"

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsFillBriefcaseFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)">
              {
                data.education.map((item,i)=>(
                  <VerticalTimelineElement
                  key={i}
                  className="timeline__education__verticle-timeline-element"
                  contentStyle={{
                    background:'none',
                    color:'var(--blue-theme-sub-text-color)',
                    border:'1.5px solid var(--blue-theme-main-color)'
                  }}
                  icon={<MdWork/>}
                  iconStyle={{
                    background:'#181818',
                    color:'var(--blue-theme-main-color)'
                  }}>
                    <div className="verticle-timeline-element-title-wrapper">
                      <h3>
                        {item.title}
                      </h3>
                      <h4>
                        {item.subTitle}
                      </h4>
                    </div>
                      <p className="verticle-timeline-element-title-wrapper-description">
                        {item.description}
                      </p>
                      <h5>{item.year}</h5>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
