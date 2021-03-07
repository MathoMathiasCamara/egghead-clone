import styled from "styled-components";
import { container } from "../../GlobalStyle";

export const ElementsContainer = styled(container)`
  background: #000;
  display: flex;
  justify-content: center;
  ${container}
`;
export const ElementIcon = styled.img`
  height: 100%;
  width: 100%;
`;
export const ElementIconContainer = styled.div``;
export const FeaturedText = styled.p`
  color: ${({ featureTextColor }) =>
    featureTextColor ? featureTextColor : "#fff"};
  font-size: 12pt;
`;
export const TitleText = styled.h1``;
export const AuthorContainer = styled.div``;
export const AuthorImage = styled.img``;
export const AuthorName = styled.p``;
export const DescriptionContainer = styled.div``;
export const DescriptionText = styled.p``;
