import  logo from '../assets/logo.png';
export function Header() {
  return (
    <div>
        {/* Top Menu Upper Part */}
        <section className="flex justify-between border-b">
            <div className="flex text-base text-blue-700">
                <h1 className="ml-5 mt-4 mb-3 cursor-pointer">Log In</h1>
                <h1 className="ml-4 mt-4 mb-3 cursor-pointer">Register</h1>
            </div>
            
            {/* <div>
            <input type="search" className="w-48 border-2 ml-28 relative" placeholder="Search..." />
            <button className="bi bi-search absolute left-[280px]"></button>
            </div> */}

            <div className="mr-6 flex mt-4 text-blue-700">
                <h1 className="px-1 cursor-pointer">Sales</h1>
                <h1 className="px-1 cursor-pointer">| Technical |</h1>
                <h1 className="px-1 cursor-pointer">Admin</h1>
            </div>
            
        </section>

        {/* Top Menu Lower Part */}

        <section className='flex justify-between border-b text-blue-700 '>
          <img src={logo} alt="company-logo" className='ml-5 mt-6 mb-4 cursor-pointer h-15' />
          <div className='flex mr-12 mt-11 text-[14.5px] '>
         <h1 className='cursor-pointer'>Products<span className='bi bi-chevron-down ml-1 text-[12px]'></span></h1>
         <h1 className='ml-8 cursor-pointer'>Promotions</h1>
         <h1 className='ml-8 cursor-pointer'>Events</h1>
         <h1 className='ml-8 cursor-pointer'>Case Studies</h1>
         <h1 className='ml-8 cursor-pointer'>Dealers</h1>
         <h1 className='ml-8 cursor-pointer'>Training<span className='bi bi-chevron-down ml-1 text-[12px]'></span></h1>
         <h1 className='ml-8 cursor-pointer'>Team</h1>
         <h1 className='ml-8 cursor-pointer'>Contact</h1>
          </div>
        </section>
    </div>
  )
}
