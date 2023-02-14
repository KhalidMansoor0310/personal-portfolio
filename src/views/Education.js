import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// core components
import OnlyHeader from "components/Headers/OnlyHeader.js";
import { education } from "helpers/Contants";

const Education = () => {
  return (
    <>
      <VerticalTimeline>
        {education?.map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{}}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item?.dates}
              iconStyle={{ background: "rgb(27, 17, 69)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">{item.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item?.school}
              </h4>
              <p className="text-success">{item?.grades}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Education;
