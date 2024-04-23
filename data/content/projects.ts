import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "DecodeCollege",
    desc: "Student Application to help college students manage their academic documents, find courses, remove plagiarism from text, calendar to view the deadlines and many more",
    img: "/static/projects/DecodeCollege.png",
    link: "https://decode-college.vercel.app",
    github: "https://github.com/Virtual-Beings/DecodeCollege",
    tags: ["Angular", "NodeJs", "MongoDb", "CSS", "Cloud Firestore"],
  },
  {
    id: 1,
    title: "Most Influential Node Detection",
    desc: "A Research Project aiming towards most influential node detection in a given social media network using centrality algorithms",
    img: "/static/projects/InfluentialNode.png",
    github: "https://github.com/100RAV-AGGARWAL/Most-Influential-Node",
    tags: ["Python"],
  },
  {
    id: 2,
    title: "Aplavankula",
    desc: "An app developed to monitor, predict floods in India and inform the authorities and locals about the same.",
    img: "/static/projects/Aplavankula.png",
    github: "https://github.com/100RAV-AGGARWAL/FMA-SIH",
    tags: ["Flutter", "NodeJs", "Web APIs"],
  },
  {
    id: 3,
    title: "Mapty",
    desc: "A simple application where you can add marks on map where you did your workout(running/cycling)",
    img: "/static/projects/Mapty.png",
    github: "https://github.com/100RAV-AGGARWAL/Mapty",
    link: "https://mapty-100ravagg.netlify.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Bankist",
    desc: "A simple application with various animation and UI effects",
    img: "/static/projects/Bankist.png",
    github: "https://github.com/100RAV-AGGARWAL/Bankist",
    link: "https://bankist-100ravagg.netlify.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "Dice Game",
    desc: "A game where you roll a dice to accumulate number score. First one to reach a score of 20 wins.",
    img: "/static/projects/DiceGame.png",
    github: "https://github.com/100RAV-AGGARWAL/Dice-Game",
    link: "https://dicegame-100ravagg.netlify.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
