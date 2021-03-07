import { styled } from "styled-components";
import {
  ElementsContainer,
  FeaturedText,
  TitleText,
  AuthorContainer,
  AuthorImage,
  AuthorName,
  ElementIcon,
  DescriptionContainer,
  DescriptionText,
  ElementIconContainer
} from "./TextTemplateOne.elements";

function TextTemplateOne({
  featureTextColor,
  featuredText,
  titleText,
  fontBold,
  hasImage,
  hasElementIcon,
  elementIcon,
  authorName,
  authorImage
}) {
  return (
    <>
      <ElementsContainer>
        <ElementIconContainer hasElementIcon={hasElementIcon}>
          <ElementIcon src={elementIcon} />
        </ElementIconContainer>
        <FeaturedText featureTextColor={featureTextColor}>
          {featuredText}
        </FeaturedText>
        <TitleText fontBold={fontBold}>{titleText}</TitleText>
        <AuthorContainer>
          <AuthorImage hasImage={hasImage} src={authorImage} />
          <AuthorName>{authorName}</AuthorName>
        </AuthorContainer>
      </ElementsContainer>
    </>
  );
}

export default TextTemplateOne;
