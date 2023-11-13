import brands from '../../assets/brands.jpg';

export  function FeatureProducts() {
  return (
    <div className='px-10 py-4'>
        <img src={brands} alt="brands_name" className='w-full h-96 shadow-md shadow-black' />
    </div>
  )
}
