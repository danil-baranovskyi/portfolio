import { ExperienceData } from "./components/ExpCard";
import UserWay from "@/public/icons/experience/userway.svg";
import DevitGroup from "@/public/icons/experience/devit-group.svg";
import DevitSoftware from "@/public/icons/experience/devit-software.svg";
import LevelAccess from "@/public/icons/experience/levelaccess.svg";
import { TranslationFunc } from "@/app/dtos";


export const getExperienceData = (t: TranslationFunc): ExperienceData[] => {
  return [
    {
      title: t("devitIntern.position"),
      description: {
        company: {
          title: t("devitIntern.desc.company.title"),
          desc: t("devitIntern.desc.company.desc")
        },
        responsibilities: {
          title: t("devitIntern.desc.responsibilities.title"),
          list: JSON.parse(t("devitIntern.desc.responsibilities.list"))
        },
        projects: {
          title: t("devitIntern.desc.projects.title"),
          list: JSON.parse(t("devitIntern.desc.projects.list"))
        },
        skills: {
          title: t("devitIntern.desc.skills.title"),
          list: JSON.parse(t("devitIntern.desc.skills.list"))
        }
      },
      period: t("devitIntern.workPeriod"),
      logo: DevitGroup,
      websiteUrl: "https://devit.group/",
      className: 'devit'
    },
    {
      title: t("devitFullStack.position"),
      description: {
        company: {
          title: t("devitFullStack.desc.company.title"),
          desc: t("devitFullStack.desc.company.desc")
        },
        responsibilities: {
          title: t("devitFullStack.desc.responsibilities.title"),
          frontEnd: {
            title: t("devitFullStack.desc.responsibilities.frontEnd.title"),
            list: JSON.parse(t("devitFullStack.desc.responsibilities.frontEnd.list"))
          },
          backEnd: {
            title: t("devitFullStack.desc.responsibilities.backEnd.title"),
            list: JSON.parse(t("devitFullStack.desc.responsibilities.backEnd.list"))
          },
          project: {
            title: t("devitFullStack.desc.responsibilities.project.title"),
            list: JSON.parse(t("devitFullStack.desc.responsibilities.project.list"))
          }
        },
        projects: {
          title: t("devitFullStack.desc.projects.title"),
          list: JSON.parse(t("devitFullStack.desc.projects.list"))
        },
        skills: {
          title: t("devitFullStack.desc.skills.title"),
          list: JSON.parse(t("devitFullStack.desc.skills.list"))
        }
      },
      period: t("devitFullStack.workPeriod"),
      logo: DevitSoftware,
      websiteUrl: "https://devit.software/",
      className: 'devit'
    },
    {
      title: t("userwayFrontEnd.position"),
      description: {
        company: {
          title: t("userwayFrontEnd.desc.company.title"),
          desc: t("userwayFrontEnd.desc.company.desc")
        },
        responsibilities: {
          title: t("userwayFrontEnd.desc.responsibilities.title"),
          frontEnd: {
            title: t("userwayFrontEnd.desc.responsibilities.frontEnd.title"),
            list: JSON.parse(t("userwayFrontEnd.desc.responsibilities.frontEnd.list"))
          },
          accessibility: {
            title: t("userwayFrontEnd.desc.responsibilities.accessibility.title"),
            list: JSON.parse(t("userwayFrontEnd.desc.responsibilities.accessibility.list"))
          },
        },
        projects: {
          title: t("userwayFrontEnd.desc.projects.title"),
          list: JSON.parse(t("userwayFrontEnd.desc.projects.list"))
        },
        skills: {
          title: t("userwayFrontEnd.desc.skills.title"),
          list: JSON.parse(t("userwayFrontEnd.desc.skills.list"))
        }
      },
      period: t("userwayFrontEnd.workPeriod"),
      logo: UserWay,
      websiteUrl: "https://userway.org/"
    },
    {
      title: t("laFullStack.position"),
      description: {
        company: {
          title: t("laFullStack.desc.company.title"),
          desc: t("laFullStack.desc.company.desc")
        },
        responsibilities: {
          title: t("laFullStack.desc.responsibilities.title"),
          fullstack: {
            title: t("laFullStack.desc.responsibilities.fullstack.title"),
            list: JSON.parse(t("laFullStack.desc.responsibilities.fullstack.list"))
          },
        },
        skills: {
          title: t("laFullStack.desc.skills.title"),
          list: JSON.parse(t("laFullStack.desc.skills.list"))
        }
      },
      period: t("laFullStack.workPeriod"),
      logo: LevelAccess,
      websiteUrl: "https://levelaccess.com/",
      className: "levelaccess"
    }
  ]
}