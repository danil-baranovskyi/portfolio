import { ExperienceData } from "./components/ExpCard";
import UserWay from "@/public/icons/experience/userway.svg";
import DevitGroup from "@/public/icons/experience/devit-group.svg";
import DevitSoftware from "@/public/icons/experience/devit-software.svg";
import { TranslationFunc } from "@/app/dtos";


export const getExperienceData = (t: TranslationFunc ): ExperienceData[] => {
  return [
    {
      title: t("devitIntern.position"),
      description: JSON.parse(t("devitIntern.desc")),
      period: t("devitIntern.workPeriod"),
      logo: DevitGroup,
      websiteUrl: "https://devit.group/",
      className: 'devit'
    },
    {
      title: t("devitFullStack.position"),
      description: JSON.parse(t("devitFullStack.desc")),
      period: t("devitFullStack.workPeriod"),
      logo: DevitSoftware,
      websiteUrl: "https://devit.software/",
      className: 'devit'
    }, {
      title: t("userwayFrontEnd.position"),
      description: JSON.parse(t("userwayFrontEnd.desc")),
      period: t("userwayFrontEnd.workPeriod"),
      logo: UserWay,
      websiteUrl: "https://userway.org/"
    }
  ]
}