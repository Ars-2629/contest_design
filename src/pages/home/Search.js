
export function Search() {
  return (
    <div className="my-2 relative">
      <input type="search" placeholder="Search ..." className="ml-[360px] border w-[500px] h-8 py-5 px-2 ring-0 hover:border"/>
        <span className="bi bi-search text-xl relative right-7 top-0"></span>
        <button className="bg-blue-700 px-3 py-1 text-white rounded-lg">Search</button>
    </div>
  )
}
