import React ,{useState,useEffect} from 'react';
import {Product} from '../components/Product'
import {IProduct} from '../models/models'
import axios from 'axios'

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchProducts(){
        try {
            setError('')
            setLoading(true)
            const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            console.log(res)
            setProducts(res.data)
            setLoading(false)
        } catch (error:any){
            setLoading(false)
            setError(error.message)
        }

    }
    useEffect(()=>{
        fetchProducts()
        console.log('fewfew')
    },[])
    return {products,error,loading}

}