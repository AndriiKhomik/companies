import React from "react";
import CompaniesItem from "../CompaniesItem/CompaniesItem";
import { StyledList } from "./Styled";

const CompaniesList = ({ companies }) => {
  const companiesList = companies.map((company) => {
    return (
      <li key={company.registryCode}>
        <CompaniesItem company={company} />
      </li>
    );
  });

  return <StyledList>{companiesList}</StyledList>;
};

export default CompaniesList;
