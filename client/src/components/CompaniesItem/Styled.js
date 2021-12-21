import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const StyledBox = styled(Box)`
  position: relative;
  box-shadow: 0px 0px 8px rgba(196, 196, 196, 0.25);
  border-radius: 16px;
  border: 2px solid #ffffff;
  padding: 24px;
  height: 98px;
`;

export const StyledName = styled(Box)`
  margin: 0;
  font-size: 24px;
  line-height: 38px;
`;

export const StyledNr = styled(Box)`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #2d2c30;
`;

export const StyledButton = styled(Button)`
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #1445f5;
  margin-top: 24px;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledError = styled("span")`
  position: absolute;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  left: 22px;
  bottom: 10px;
  color: red;
`;
