"use client"

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function OrgSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/search.json?q=${searchQuery}&page=${currentPage}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await res.json();
      setData(jsonData);
    }

    fetchData();
  }, [searchQuery, currentPage]);

  const totalResults = data?.total_results || 0;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const dataMap = data?.organizations.map((company) => (
    <li key={company.ein}>{company.name}</li>
  ));
  
  return (
    <main>
      <div className={styles.searchContainer}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => handlePageChange(1)}>Submit</button>
      </div>
      <ul>{dataMap}</ul>
      <button onClick={(e) => handlePageChange(currentPage - 1)}>back</button>
      <input 
      value={currentPage} 
      onChange={(e) => handlePageChange(parseInt(e.target.value ? e.target.value : 1))} 
      />
      <button onClick={(e) => handlePageChange(currentPage + 1)}>forward</button>
    </main>
  );
}
