import { ExperienceData } from "./components/ExpCard";
import UserWay from "@/public/icons/experience/userway.svg";
import DevitGroup from "@/public/icons/experience/devit-group.svg";
import DevitSoftware from "@/public/icons/experience/devit-software.svg";

export const experienceData: ExperienceData[] = [
  {
    title: "Full-stack Intern",
    description: [
      "do that",
      "learn this"
    ],
    period: "2000-2000",
    logo: DevitGroup,
    websiteUrl: "https://devit.group/",
    className: 'devit'
  },
  {
    title: "Full-stack dev",
    description: [
      "do that",
      "learn this"
    ],
    period: "2000-2000",
    logo: DevitSoftware,
    websiteUrl: "https://devit.software/",
    className: 'devit'
  }, {
    title: "Front-end engeenir",
    description: [
      "do that",
      "learn this"
    ],
    period: "2000-2000",
    logo: UserWay,
    websiteUrl: "https://userway.org/"
  }
]