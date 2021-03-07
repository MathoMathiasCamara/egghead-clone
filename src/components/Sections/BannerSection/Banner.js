import react from "react";
import TextTemplateOne from "../../commons/TextTemplateOne";
import { BannerSectionData } from "../../commons/TextTemplateOne";
import { BannerItems } from "./Banner.elements";
import { BannerContainer, BanneTopLine } from "./Banner.elements";
function Banner(props) {
  return (
    <BannerContainer>
      <BanneTopLine></BanneTopLine>
      <BannerItems></BannerItems>
    </BannerContainer>
  );
}

export default Banner;
