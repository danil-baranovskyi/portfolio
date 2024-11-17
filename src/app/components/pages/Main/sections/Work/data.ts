import { TranslationFunc } from "@/app/dtos";
import { WorkDescDataDto } from "./components/WorkDesc";
import { WorkImgDataDto } from "./components/WorkImg";

export const getWorkData = (t: TranslationFunc): (WorkImgDataDto & WorkDescDataDto)[] => [
  {
    iframeSrc: "https://devit.software/",
    mobileImgSrc: "/images/works/devit-software-work.png",
    labelsList: ["React", "NextJS", "SCSS", "SwiperJS", "JSDOM"],
    text: t("devitWebsite.desc"),
    title: t("devitWebsite.title"),
    workLink: "https://devit.software/"
  }, {
    imgSrc: "/images/works/selectors-work.png",
    labelsList: ["JS", "CSS", "React", "Shopify API", "GraphQl"],
    text: t("devitSelectors.desc"),
    title: t("devitSelectors.title"),
    workLink: "https://apps.shopify.com/selectors"
  }
]