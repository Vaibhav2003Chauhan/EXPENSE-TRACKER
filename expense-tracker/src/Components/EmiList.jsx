import React, { useEffect, useState } from 'react'

function EmiList() {
  const [emis, setEmis] = useState([]);

  useEffect(() => {
    const fetchEmis = async () => {
      console.log("hola the function is hitt");

      try {
        const response = await fetch('http://127.0.0.1:8000/api/get_all_emis');
        const data = await response.json();  // parse JSON
        console.log("Fetched EMIs:", data.emis[0]); // accessing the data in this manner 
        console.table(data.emis)
        setEmis(data.emis || []); // store in state
      } catch (error) {
        console.error("Error fetching EMIs:", error);
      }
    };

    fetchEmis();
  }, []);


  return (
    <>
      {
        emis.length == 0 ? (
          <div className="alert alert-info text-center">
            You have not made any expenses yet.
          </div>
        ) : (
          <div className="container">
            <div className="table-responsive">
              <div className="table table table-hover align-middle table-bordered w-60">
                <thead className="table table-dark fs-7 text-center">
                  <tr>
                    <th style={{ width: '10%' }}>EMI Name</th>
                    <th style={{ width: '15%' }}>EMI Total Amount </th>
                    <th style={{ width: '10%' }}>EMI Deduction Date</th>
                    <th style={{ width: '10%' }}>Installement Amount</th>
                    <th style={{ width: '10%' }}>EMI Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {emis.map((emi_data) => (
                    <tr key={emi_data.id}>
                      <td>{emi_data.emi_name}</td>
                      <td>{emi_data.emi_total_amount}</td>
                      <td>{emi_data.emi_monthly_deduction_date}</td>
                      <td>{emi_data.emi_monthly_installement_amount}</td>
                      <td>{emi_data.emi_total_months_duration}</td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default EmiList