import React from "react";
import { SubjectButton } from "./SubjectButton";
import "./SubjectTopics.css";

export const SubjectTopics = ({ topic }) => {
  console.log(topic, "topic");
  return (
    <div className="subject-section-container">
      <p className="subject-name">{topic.subject}</p>
      <div className="topic-container">
        {topic.topics.map((tpName) => {
          return <SubjectButton topic={tpName}></SubjectButton>;
        })}
      </div>
    </div>
  );
};
