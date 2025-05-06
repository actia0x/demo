'use client'

import Image from "next/image"
import { useMemo } from "react"
import noDataIcon from '@/public/no-data.svg'


export default function SearchResults({ dataList, deferredQuery }: { dataList: string[], deferredQuery: string }) {

    const resultsElements = useMemo(() => {
        return dataList.filter((entry) => entry.toLowerCase().includes(deferredQuery.toLowerCase())).map((result, idx) => {
            const regEx = new RegExp(`(\s|${deferredQuery})`, 'gi')
            const resultStr = result.split(regEx).filter(x => x);

            return (
                <li key={idx}>
                    <span>{resultStr.map((part, idx) => {
                        if (part.toLocaleLowerCase() === deferredQuery.toLocaleLowerCase()) {
                            return <b key={idx}>{part}</b>
                        }
                        else {
                            return <span key={idx}>{part}</span>
                        }
                    })}
                    </span>
                </li>
            )
        })
    }, [dataList, deferredQuery])

    if (resultsElements.length === 0) {
        return <div className="text-center p-4 flex flex-col items-center">
            <Image width={150} height={150} alt='No results found.' src={noDataIcon} />
            <p>No results found.</p>
        </div>
    }

    return (
        <div className='flex p-4 justify-start'>
            <ul>
                {resultsElements}
            </ul>
        </div>
    )
}

