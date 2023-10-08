"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import SingleCompany from "@/components/SingleCompany";
import { useRouter } from "next/navigation";

export default function OrgSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = `/api/search.json?q=${searchQuery}&page=${currentPage}`;
      const filterParams = Object.entries(selectedFilters)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => `${key}[id]=${value}`)
        .join("&");
      const res = await fetch(url + (filterParams ? `&${filterParams}` : ""));

      const jsonData = await res.json();
      setData(jsonData);
    }

    fetchData();
  }, [searchQuery, currentPage, selectedFilters]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const dataMap = data?.organizations.map((company) => (
    <p key={company.ein}>
      <Link href={`/${company.ein}`}>{company.name}</Link>
    </p>
  ));

  return (
    <main>
      <div className={styles.searchContainer}>
        <h1>990 Reference Search</h1>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.selector}>
          <p>State: </p>
          <select
            value={selectedFilters.state}
            onChange={(e) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                state: e.target.value,
              }))
            }
          >
            <option value="">All</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
        </div>
        <div className={styles.selector}>
          <p>507(c) Code </p>
          <select
            value={selectedFilters.c_code}
            onChange={(e) =>
              setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                c_code: e.target.value,
              }))
            }
          >
            <option value="">All</option>
            <option value="2">501(c)(2)</option>
            <option value="3">501(c)(3)</option>
            <option value="4">501(c)(4)</option>
            <option value="5">501(c)(5)</option>
            <option value="6">501(c)(6)</option>
            <option value="7">501(c)(7)</option>
            <option value="8">501(c)(8)</option>
            <option value="9">501(c)(9)</option>
            <option value="10">501(c)(10)</option>
            <option value="11">501(c)(11)</option>
            <option value="12">501(c)(12)</option>
            <option value="13">501(c)(13)</option>
            <option value="14">501(c)(14)</option>
            <option value="15">501(c)(15)</option>
            <option value="16">501(c)(16)</option>
            <option value="17">501(c)(17)</option>
            <option value="18">501(c)(18)</option>
            <option value="19">501(c)(19)</option>
            <option value="21">501(c)(21)</option>
            <option value="22">501(c)(22)</option>
            <option value="23">501(c)(23)</option>
            <option value="25">501(c)(25)</option>
            <option value="26">501(c)(26)</option>
            <option value="27">501(c)(27)</option>
            <option value="28">501(c)(28)</option>
            <option value="92">4947(a)(1)</option>
          </select>
        </div>
      </div>
      <hr className={styles.horiz}></hr>
      <p className={styles.resultCount}>{parseInt(data?.total_results) == 10000 ? "10000+" : data?.total_results} Results</p>
      <div className={styles.results}>
        <ul>{dataMap}</ul>
      </div>
      <div className={styles.navigation}>
      <button onClick={(e) => handlePageChange(currentPage - 1)}>&lt;</button>
      <input
        value={currentPage}
        onChange={(e) => handlePageChange(parseInt(e.target.value ? e.target.value : 1))}
      />
      <button onClick={(e) => handlePageChange(currentPage + 1)}>&gt;</button>
      <div>
      <p className={styles.pageCount}> {currentPage} / {data?.num_pages} pages</p>
      </div>
      </div>
    </main>
  );
}
