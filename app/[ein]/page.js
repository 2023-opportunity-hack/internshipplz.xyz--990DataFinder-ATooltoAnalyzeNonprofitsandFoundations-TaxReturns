"use client"
// import React from 'react';
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
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', padding: '20px' }}>
      {companyData ? (
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'black', fontFamily: 'Arial, sans-serif' }}>{companyData.name}</h1>
          <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>EIN:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{companyData.ein}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>City:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{companyData.city}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>State:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{companyData.state}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>Income Amount:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{"$" + companyData.income_amount}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>Revenue Amount:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{"$" + companyData.revenue_amount}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', color: 'black', padding: '10px', border: '1px solid white' }}>NTEE Code:</td>
                <td style={{ padding: '10px', border: '1px solid white' }}>{companyData.ntee_code}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
