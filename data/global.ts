type Route = {
  title: string,
  url: string,
  leavesWebsite: boolean,
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Home",
    url: "/",
    leavesWebsite: false
  },
  {
    title: "Projects",
    url: "/projects",
    leavesWebsite: false
  },
  {
    title: "Experiences",
    url: "/experiences",
    leavesWebsite: false
  },
  {
    title: "Resume",
    url: "https://drive.google.com/file/d/1uMgZdN2oYSdzWLLgbulowXJaCSe-KyF0/view?usp=sharing",
    leavesWebsite: true
  },
];


export const footer: Footer = {
  columns: [

    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Experiences",
          link: "/experiences",
          leavesWebsite: false,
        },
        {
          name: "Resume",
          link: "https://drive.google.com/file/d/1uMgZdN2oYSdzWLLgbulowXJaCSe-KyF0/view?usp=sharing",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/100RAV-AGGARWAL",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/sourav-aggarwal/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/souravagg01",
          icon: "/static/icons/twitter.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/100rav_agg/",
          icon: "/static/icons/instagram.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:souravagg01@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
