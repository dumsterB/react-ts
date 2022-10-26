import React from 'react'
import { useState } from "react";
import axios from 'axios'
import {IProduct} from '../models/models'
import {Error} from './Error'

const productData:IProduct={
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 41,
        count: 12,
    }

}
export function CreateProducts(){
    const [value,setValue] = useState('')
    const [error,setError] = useState('')
    const submitHandler = async function (event:React.FormEvent){
     event.preventDefault()
        if(value.trim().length === 0){
            setError('Plese enter valid title')
            setTimeout(()=>{
                setError('')
            },2000)
            return
        }
        productData.title = value

        const res =   await axios.post<IProduct>('https://fakestoreapi.com/products',productData)
 }
 const changeHandler = function (event:any){
   setValue(event.target.value)
 }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input value={value} onChange={changeHandler} className="outline" type="text"/>
                {error && <Error error={error}></Error> }
                <button type="submit" className="bg-yellow-400 px-2 py-2 ml-2">Create</button>
            </form>
        </div>
    )
}