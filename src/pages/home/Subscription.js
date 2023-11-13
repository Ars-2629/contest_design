import subscribe from '../../assets/subscribe.jpg';
export function Subscription() {
  return (
    <div className='shadow-lg'>
    <div className="my-5 flex shadow-lg">
    <div className="w-[680px] py-14">
    <h1 className="ml-14 text-xl font-semibold text-gray-800 mb-2">AVD Newsletter Subscription</h1>
    <h2 className="ml-14 text-thin text-gray-500">Stay up to date with firmware, announcements and new releases by entering your details here.</h2>
   
    <form action="">
    <div className="flex justify-start flex-wrap text-gray-600">
    <div className="ml-14 mt-5">
    <h1 className="text-md mb-2 font-medium font-sans">First Name <span className="text-rose-500 text-lg">*</span></h1>
    <input type="text" className="border-[1px] w-72 h-8" placeholder="Please enter your first name"/>
    </div>

    <div className="ml-8 mt-5">
    <h1 className="text-md mb-2 font-medium font-sans">Last Name <span className="text-rose-500 text-lg">*</span></h1>
    <input type="text" className="border-[1px] w-72 h-8" placeholder="Please enter your last name"/>
    </div>

    <div className="ml-14 mt-5">
    <h1 className="text-md mb-2 font-medium font-sans">Company Name <span className="text-rose-500 text-lg">*</span></h1>
    <input type="text" className="border-[1px] w-72 h-8" placeholder="ABC Integration Co."/>
    </div>

    <div className="ml-8 mt-5">
    <h1 className="text-md mb-2 font-medium font-sans">Email Address <span className="text-rose-500 text-lg">*</span></h1>
    <input type="text" className="border-[1px] w-72 h-8" placeholder="Please enter your full email address"/>
    </div>
    </div>

    <h1 className="text-md mt-5 ml-14 font-medium font-sans">Please tell us who you are? <span className="text-rose-500 text-lg">*</span></h1>

    <div className="ml-14">
        <input type="checkbox"/><span className="text-[15px] text-gray-800 ml-1 font-serif">Reseller</span><br/>
        <input type="checkbox" /><span className="text-[15px] text-gray-800 ml-1 font-serif">Consultant</span><br/>
        <input type="checkbox" /><span className="text-[15px] text-gray-800 ml-1 font-serif">End User</span>
    </div>
    
    <button className="px-7 py-3 ml-14 mt-5 bg-blue-700 text-white rounded">Subscribe</button>

    </form>

    </div>

    <div>
        <img src={subscribe} alt="" className='w-[500px] h-[350px] mt-24 ml-10 rounded shadow-lg' />
    </div>
    </div>
    <div className='mx-10 my-4 flex justify-evenly py-5'>
        <button className='bg-[#464646] text-white w-52 h-14 rounded'>Training Schedule</button>
        <button className='bg-[#464646] text-white w-52 h-14 rounded'><span className='bi bi-facebook'/> facebook</button>
        <button className='bg-[#464646] text-white w-52 h-14 rounded'><span className='bi bi-linkedin mr-1'/>LinkenIn</button>
        <button className='bg-[#464646] text-white w-52 h-14 rounded'><span className='bi bi-instagram mr-1'/>Instagram</button>
        <button className='bg-[#464646] text-white w-52 h-14 rounded'>2023 Brochure</button>
    </div>
    </div>
  )
}
