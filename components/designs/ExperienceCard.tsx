import {
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { TExperience } from "types";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard: React.FC<TExperience> = (experience) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="lex h-full w-full items-center justify-center">
                    <img
                        src={experience.icon}
                        alt={experience.companyName}
                        className="rounded-full object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-[24px] font-bold text-white">
                    {experience.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.companyName}
                </p>
            </div>

            <ul className="ml-5 mt-5 list-disc space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 pl-1 text-[14px] tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;