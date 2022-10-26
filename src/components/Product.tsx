import {IProduct} from '../models/models'
import React ,{useState} from 'react'
interface ProductProps{
    products: IProduct
}
export function Product({products}:ProductProps){
    const [details,setDetailes] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 mt-2 mb-2 px-4 border',btnBgClassName]

    return(
        <div className="border mt-5 px-2 px-4 rounded flex flex-col items-center">
            <img src={products.image}  className="w-1/6" alt=""/>
            {products.category}
            <p>{products.title}</p>
            <span className="font-bold">{products.price}</span>
            <button
              className={btnClasses.join(' ')}
              onClick={()=>setDetailes(prev => !prev)}

            >{ details ? 'Hide details' :'Show details'}</button>

            { details && <div>
                <p>{products.description}</p>
                <p style={{fontWeight:'bold'}}>Rate: {products.rating.rate}</p>
            </div>
            }
        </div>
    )
}