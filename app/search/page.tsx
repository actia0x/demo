import Link from "next/link"
import SearchSection from "./search-component"


async function SearchPage() {

    const dataList = [
        "Io",
        "Moon",
        "Europa",
        "Enceladus",
        "Callisto",
        "Amalthea",
        "Thebe",
        "Anthe",
        "Ganymede",
        "Himalia",
        "Carme",
        "Ananke",
        "Adrastea",
        "Sinope",
        "Thermisto",
        "Carpo",
        "Chaldene"
    ]

    return (
        <div className='flex gap-16'>
            <div className="flex flex-col">
                <Link href='/' className='mt-4 p-2 border-2 border-gray-300 rounded'>Back</Link>
            </div>
            <SearchSection dataList={dataList} />
        </div>
    )

}
export default SearchPage