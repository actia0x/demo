'use client'

import { ChangeEvent, Suspense, useDeferredValue, useEffect, useState } from "react"
import SearchResults from "./search-results"

function SearchSection({ dataList }: { dataList: string[] }) {

    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    useEffect(() => {
        console.log(`query: ${query}, deferredQuery: ${deferredQuery}`)
    }, [query, deferredQuery])

    return (
        <div className='flex flex-col w-[600px] justify-center'>
            <div className='flex p-4 justify-center'>
                <input type='text' className='border-2 border-grey-700 rounded p-2 flex-1' onChange={handleQueryChange} value={query} placeholder="Type here.."/>
            </div>
            <Suspense fallback={<span>Filtering..</span>}>
                <SearchResults dataList={dataList} deferredQuery={deferredQuery} />
            </Suspense>
        </div>
    )
}
export default SearchSection