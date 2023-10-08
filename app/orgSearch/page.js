"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import SingleCompany from "@/components/SingleCompany";

export default function OrgSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

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
            <div className={styles.results}>
                <ul>{dataMap}</ul>
            </div>
            <button onClick={(e) => handlePageChange(currentPage - 1)}>back</button>
            <input
                value={currentPage}
                onChange={(e) => handlePageChange(parseInt(e.target.value ? e.target.value : 1))}
            />
            <button onClick={(e) => handlePageChange(currentPage + 1)}>forward</button>
            <p>{currentPage} / {data?.num_pages}</p>
        </main>
    );
}
