import styled from "styled-components";
import { container } from "../../../GlobalStyle";

export const BannerContainer = styled(container)`
  display: flex;
  width: 100%;
  max-height: 500px;
  padding-left: 10%;
  padding-right: 10%;
  background: #f9fafb;
  flex-flow: column;
`;
export const BanneTopLine = styled.div`
  top: 0;
  margin-top: 0;
  height: 10px;
  background: #2563eb;
  z-index: 9999;
`;
export const BannerItems = styled.div`
  background: #000;
  display: flex;
  flex: 1;
  justify-content: center;
`;

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
