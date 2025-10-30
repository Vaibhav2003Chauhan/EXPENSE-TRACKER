import React, { useEffect, useState } from 'react'

function EmiList() {
  const [emis, setEmis] = useState([]);

  useEffect(() => {
    const fetchEmis = async () => {
      console.log("hola the function is hitt");

      try {
        const response = await fetch('http://127.0.0.1:8000/api/get_all_emis');
        const data = await response.json();  // parse JSON
        console.log("Fetched EMIs:", data.emis[0].emi_name); // accessing the data in this manner 
        setEmis(data.emis || []); // store in state
      } catch (error) {
        console.error("Error fetching EMIs:", error);
      }
    };

    fetchEmis();
  }, []);


  return (
    <div>EmiList</div>
  )
}

export default EmiList