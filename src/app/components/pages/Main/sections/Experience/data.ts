import { ExperienceData } from "./components/ExpCard";
import UserWay from "@/public/icons/experience/userway.svg";
import DevitGroup from "@/public/icons/experience/devit-group.svg";
import DevitSoftware from "@/public/icons/experience/devit-software.svg";
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
        responsobilites: {
          title: t("devitIntern.desc.responsobilites.title"),
          list: JSON.parse(t("devitIntern.desc.responsobilites.list"))
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
        responsobilites: {
          title: t("devitFullStack.desc.responsobilites.title"),
          frontEnd: {
            title: t("devitFullStack.desc.responsobilites.frontEnd.title"),
            list: JSON.parse(t("devitFullStack.desc.responsobilites.frontEnd.list"))
          },
          backEnd: {
            title: t("devitFullStack.desc.responsobilites.backEnd.title"),
            list: JSON.parse(t("devitFullStack.desc.responsobilites.backEnd.list"))
          },
          project: {
            title: t("devitFullStack.desc.responsobilites.project.title"),
            list: JSON.parse(t("devitFullStack.desc.responsobilites.project.list"))
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
    }, {
      title: t("userwayFrontEnd.position"),
      description: {
        company: {
          title: t("userwayFrontEnd.desc.company.title"),
          desc: t("userwayFrontEnd.desc.company.desc")
        },
        responsobilites: {
          title: t("userwayFrontEnd.desc.responsobilites.title"),
          frontEnd: {
            title: t("userwayFrontEnd.desc.responsobilites.frontEnd.title"),
            list: JSON.parse(t("userwayFrontEnd.desc.responsobilites.frontEnd.list"))
          },
          accessibility: {
            title: t("userwayFrontEnd.desc.responsobilites.accessibility.title"),
            list: JSON.parse(t("userwayFrontEnd.desc.responsobilites.accessibility.list"))
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
    }
  ]
}