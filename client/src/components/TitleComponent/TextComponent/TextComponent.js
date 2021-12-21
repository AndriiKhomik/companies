import React from "react";
import { StyledBox, StyledSubtitle, StyledTitle } from "./Styled";

const TextComponent = () => {
  return (
    <>
      <StyledBox>
        <StyledTitle as='h2'>My companies</StyledTitle>
        <StyledSubtitle>
          According to the EE Business Register, the following companies are
          related to you.
        </StyledSubtitle>
      </StyledBox>
    </>
  );
};

export default TextComponent;
