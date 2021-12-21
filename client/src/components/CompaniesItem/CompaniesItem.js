import React, { useState } from "react";
import { setCompany } from "../../api/companies";
import {
  StyledButton,
  StyledName,
  StyledBox,
  StyledNr,
  StyledError,
} from "./Styled";

const CompaniesItem = ({ company }) => {
  const { name, registryCode } = company;
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onPostRequest = (id) => {
    setCompany({ registryCode: id })
      .then((data) => {
        if (data) {
          setClicked(true);
        }
      })
      .catch(() => setError(true));
  };

  const changeColor = clicked ? "#FFFFFF" : "#E5E5E5";

  return (
    <StyledBox sx={{ backgroundColor: changeColor }}>
      <StyledName as="h4">{name}</StyledName>
      <StyledNr>Reg.nr: {registryCode}</StyledNr>
      {!clicked && (
        <StyledButton onClick={() => onPostRequest(registryCode)}>
          ADD to SYSTEM
        </StyledButton>
      )}
      {error && (
        <StyledError>Company is already exist in our system</StyledError>
      )}
    </StyledBox>
  );
};

export default CompaniesItem;
