"use client"

import { useState } from "react"
import styles from "./page.module.css"

export default function OrgSearch() {
    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState(null)

    async function handleSubmit() {
        const res = await fetch(`/api/search.json?q=${searchQuery}`);

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        const jsonData = await res.json()
        setData(jsonData)
    }

    return (
        <main>
            <div className={styles.searchContainer}>
                <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <p>{JSON.stringify(data)}</p>
        </main>
    )
}