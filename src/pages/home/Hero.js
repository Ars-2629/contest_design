import { useEffect,useState } from 'react';

export  function Hero() {
    const [index,setIndex] = useState(0);
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem('productList')) || []);

    localStorage.setItem('productList',JSON.stringify(products));

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch('http://localhost:8000/products');
            const data = await response.json();
            setTimeout(()=>{
                if(index<data.length){
                    setIndex(index+1);
                 } 
                 if(index===data.length-1){
                    setIndex(0);
                 }
               },5000)
            setProducts(data[index].pic);
          }
        fetchProducts();
    },[index])
  return (
    <div className='px-6 py-0'>
        <img src={products} alt="product" className='min-w-full h-[450px] mt-4 rounded-lg shadow-md shadow-black' />
    </div>
  )
}
