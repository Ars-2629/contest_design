import  unique  from '../../assets/unique.jpg';
import logo2 from '../../assets/logo2.jpg';
import logo3 from '../../assets/logo3.png';
 export function AboutUs() {
  return (
    <div>
    <div className="shadow-lg shadow-slate-300 py-4 my-5 mx-8">
    <h1 className="text-2xl font-semibold text-gray-800 ml-10 mt-4">About Audio Visual Distributors</h1>
    <h2 className="text-xl font-semibold text-gray-500 ml-10 mt-3">Importers and distributors of specialist audio visual products in Australia and New Zealand.</h2>
    <p className="text-base text-justify px-10 py-5 text-gray-400">
        Audio Visual Distributors are the importers and distributors of specialist audio visual products. Our head office and central warehouse is based on the sunny Gold Coast of Queensland, with offices across all major centres in Australia as well as New Zealand. Our team is made up of AV professionals with more than 30 years’ experience in the Audio Visual and IT industry. We are proud to be at the forefront of technology & are able to deliver complete solutions to the AV sales & installation market, which is supported by our in-house, internationally certified support team.<br/><br/>


Our exclusively distributed brands include AVPro Edge, Arthur Holm, ClearOne,  Cleerline Fibre, , ProDVX, Sound Control Technologies, TechLogix and ZeeVee.
The brands we distribute in Australia and New Zealand include Barco – ClickShare, Absen LED, Global Caché,  Marshall Pro AV & MXL.<br/><br/>


Our prime focus is customer service and support in offering the highest quality AV solutions to the AV market.
</p>
    </div>

    <div className='flex my-6 shadow-lg px-12'>
        <div className='w-1/2 mx-8 py-4'>
         <h1 className='text-2xl font-semibold text-gray-700 mb-5'>Discover ClickShare Conference & BYOM</h1>
         <p className='text-justify text-md text-gray-500'>
         BYOM – bring your own meeting — taking workplace productivity to the next level. The bring your own device (BYOD) market has taken off swiftly. 67% of people know use their own devices at work and 87% of companies depend on employees’ ability to access mobile business apps from their personal smartphones.<br/><br/>

Now, the BYOM trend is promising to maximise your gains and cost savings even further. BYOM describes the phenomenon where people prefer to host a conference call from their personal device using their preferred conferencing solution (e.g. Microsoft Teams,
Webex, Zoom etc).<br/><br/>

Learn about how BYOM is revolutionising conferencing and collaboration strategies to improve workplace productivity and optimise your capacities.
         </p>
         <button className='ml-[20px] mt-5 border bg-[#464646] text-white w-[480px] h-16 rounded-lg'>
            <span className='bi bi-box-arrow-down mr-2 mt-2 text-base'/>Download The White Paper</button>
        </div>
        <img src={unique} alt="unique" className='w-1/2 h-[500px] my-4' />
    </div>

    <div className='my-5 shadow-xl'>
    <h1 className='text-2xl font-bold ml-96 text-gray-700'>Audio Visual Distributors are members of</h1>
    <div className='flex' >
        <div>
            <img src={logo2} alt="logo2" className='w-60 h-48 ml-60 mb-5'  />
            <p className='text-justify ml-16 text-gray-500'>
            Audio Visual Distributors has been a member of the AVIXA organisation since the company began. The benefits and contacts that we have made through this connection to this organisation over the years are amazing and we will continue to do so into the future.<br/><br/>

AVIXA™ is the Audiovisual and Integrated Experience Association, producer of InfoComm trade shows around the world, co-owner of Integrated Systems Europe, and the international trade association representing the audiovisual industry.<br/><br/>

Established in 1939, AVIXA has more than 5,400 members, including manufacturers, systems integrators, dealers and distributors, consultants, programmers, rental and staging companies, technology managers, IT professionals, content producers, and multimedia professionals from more than 80 countries.<br/><br/>

AVIXA members create integrated AV experiences that deliver outcomes. A hub for professional collaboration, information, and community, and the leading resource for AV standards, certification, training, market intelligence and thought leadership.
            </p>
        </div>
        <div>
            <img src={logo3} alt="logo3" className='w-60 h-48 ml-36 mb-5' />
            <p className='ml-16 text-gray-500 text-justify px-8'>
            Audio Visual Distributors has been a member of the newly formed CEDIA organisation in Australia since its re-inception. Covering the residential industry that suites a few of our product ranges, this organisation assists us in meeting customers requirements for good in home electronics systems.<br/><br/>

CEDIA is the leading global authority in the $14 billion home technology industry. CEDIA represents 3,700 member companies worldwide and serves more than 30,000 industry professionals that manufacture, design, and integrate goods and services for the connected home.<br/><br/>

CEDIA’s mission is to be a core component of its members’ prosperity. Built upon a strong volunteer foundation, CEDIA provides access to industry-leading education, certification, research, and consumer awareness. CEDIA serves as the go-to home technology source for consumers and professionals alike.
            </p>
        </div>
    </div>
    </div>

    </div>

  )
}
