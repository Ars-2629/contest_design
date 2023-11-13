import catalog from '../../assets/product_catalog.png';

export function Catalog() {
  return (
    <div className='px-14 py-6'>
        <img src={catalog} alt="catalog"  className='shadow-md shadow-black cursor-pointer'/>
    </div>
  )
}
