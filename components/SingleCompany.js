import Link from "next/link"

export default function SingleCompany({ ein }) {
    return (
        <Link href={`/${ein}`}></Link>
    )
}