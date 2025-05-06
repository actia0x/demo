import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <div>
          <h2 className="font-bold ">Available demos</h2>
          <div>
            <Link href={'/search'}> Search <span className='inline-block text-gray-500 text-sm'>(filtering through a list)</span></Link>
          </div>
        </div>
      </main>

    </div>
  );
}
