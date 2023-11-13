import contactlogo from '../../assets/contact_logo.png';

export function ContactUs() {
  return (
    <div className='flex justify-between py-16'>
        <img src={contactlogo} alt="company_logo" className='w-96 h-16 ml-12 mt-14'/>

        <div className='text-gray-500 mr-14'>
            <h1 className='text-xl font-bold mb-5'>CONTACT</h1>
            <p >India Phone: +91-9354360870</p>
            <p className='mb-2'>India Phone: +91-8744978801</p>
            <p>Head Office:</p>
            <p>Unit 3, Gold Coast City Marina, 58 Waterway Drive,</p>
            <p>Coomera, QLD, 4209, Australia</p>
        </div>
    </div>
  )
}
