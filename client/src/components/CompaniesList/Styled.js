import { List } from "@mui/material";
import { styled } from "@mui/system";

export const StyledList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  row-gap: 16px;
  column-gap: 16px;
  margin-top: 72px;
  margin-bottom: 174px;
`;
