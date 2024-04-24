import React from "react";
import { experiences } from "@/data/content/experiences";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExperienceCard from "./ExperienceCard";

import "react-vertical-timeline-component/style.min.css";
import styles from "./styles/ExperienceCard.module.css"

function Experiences() {
    return (
        <div className={'flex flex-col ' + styles['custom-experience-card-styles']}>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;
