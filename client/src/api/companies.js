const BASE_URL = "https://localhost:5001/api";

export const getCompanies = async () => {
  const res = await fetch(`${BASE_URL}/companies/my`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${BASE_URL}`);
  }
  return res.json();
};

export const setCompany = async (company) => {
  const res = await fetch(`${BASE_URL}/companies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(company),
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${BASE_URL}`);
  }
  return res.json();
};
