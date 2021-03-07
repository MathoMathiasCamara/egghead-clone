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
  hasAuthorImage,
  hasElementIcon,
  elementIcon,
  authorName,
  authorImage,
  descriptionText
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
          <AuthorImage hasAuthorImage={hasAuthorImage} src={authorImage} />
          <AuthorName>{authorName}</AuthorName>
        </AuthorContainer>
        <DescriptionContainer>
          <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionContainer>
      </ElementsContainer>
    </>
  );
}

export default TextTemplateOne;
