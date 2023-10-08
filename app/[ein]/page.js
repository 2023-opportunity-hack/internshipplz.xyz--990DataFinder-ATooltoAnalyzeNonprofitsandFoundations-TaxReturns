"use client"

import { useEffect, useState } from 'react';

export default function Company({ params }) {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const res = await fetch(`/api/organizations/${params.ein}.json`);
        if (!res.ok) {
          throw new Error('Failed to fetch company data');
        }
        const companyDetails = await res.json();
        setCompanyData(companyDetails.organization);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanyData();
  }, [params.ein]);

  return (
    <div>
      {companyData ? (
        <div>
          <h1>{companyData.name}</h1>
          <p>City: {companyData.city}</p>
          <p>State: {companyData.state}</p>
          <p>Income amount: {companyData.income_amount}</p>
          <p>Revenue amount: {companyData.revenue_amount}</p>
          <p>NTEE Code: {companyData.ntee_code}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

