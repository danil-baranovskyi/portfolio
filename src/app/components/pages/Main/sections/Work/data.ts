import { TranslationFunc } from "@/app/dtos";
import { WorkDescDataDto } from "./components/WorkDesc";
import { WorkImgDataDto } from "./components/WorkImg";

export const getWorkData = (t: TranslationFunc): (WorkImgDataDto & WorkDescDataDto)[] => [
  {
    iframeSrc: "https://devit.software/",
    mobileImgSrc: "/images/works/devit-software-work.png",
    labelsList: ["Label1", "Label2"],
    text: t("devitWebsite.desc"),
    title: t("devitWebsite.title"),
    workLink: "https://devit.software/"
  }, {
    imgSrc: "/images/works/selectors-work.png",
    labelsList: ["Label12123", "Label2"],
    text: t("devitSelectors.desc"),
    title: t("devitSelectors.title"),
    workLink: "https://apps.shopify.com/selectors"
  }
]