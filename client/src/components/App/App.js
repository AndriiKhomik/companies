import React, { useEffect, useState } from "react";
import CompaniesList from "../CompaniesList/CompaniesList";
import TitleComponent from "../TitleComponent/TitleComponent";
import { getCompanies } from "../../api/companies";
import { Container } from "@mui/material";
import Logo from "../Logo/Logo";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
  }, []);

  return (
    <Container>
      <Logo />
      <TitleComponent />
      <CompaniesList companies={companies} />
    </Container>
  );
}

export default App;
