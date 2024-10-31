import { WorkDescDataDto } from "./components/WorkDesc";
import { WorkImgDataDto } from "./components/WorkImg";

export const workDataList: (WorkImgDataDto & WorkDescDataDto)[] = [
  {
    iframeSrc: "https://devit.software/",
    mobileImgSrc: "/images/works/devit-software-work.png",
    labelsList: ["Label1", "Label2"],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magnam ab fugiat placeat porro consequatur nisi eum praesentium numquam ipsam, natus error deleniti, eos alias obcaecati reprehenderit fuga vitae at.",
    title: "Super dev pisya popa",
    workLink: "https://devit.software/"
  }, {
    imgSrc: "/images/works/selectors-work.png",
    labelsList: ["Label12123", "Label2"],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magnam ab fugiat placeat porro consequatur nisi eum praesentium numquam ipsam, natus error deleniti, eos alias obcaecati reprehenderit fuga vitae at.",
    title: "Super dev pisya popa",
    workLink: "https://apps.shopify.com/selectors"
  }
]