import React from "react";
import ImageComponent from "./ImageComponent/ImageComponent";
import TextComponent from "./TextComponent/TextComponent";
import { StyledBox } from "./Styled";

const TitleComponent = () => {
  return (
    <StyledBox>
      <ImageComponent />
      <TextComponent />
    </StyledBox>
  );
};

export default TitleComponent;
