"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { createAction } from "../actions/CreateAction";


const CreateForm = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const { register, handleSubmit, reset, formState: { errors, }, } = useForm();
    const priceRegister = register("price")
    const quantityRegister = register("quantity")

    const handlePrice = (e) => {
        const itemPrice = e.target.value
        setPrice(itemPrice)
        console.log(itemPrice)
    }

    const handleQuantity = (e) => {
        const qty = e.target.value
        setQuantity(qty)
        console.log(qty)
    }

    useEffect(() => {
        if (price != 0 && quantity != 0) {
            setTotalAmount(price * quantity)
        } else {
            setTotalAmount(0)
        }
    }, [quantity, price])

    const onSubmit=async(formData)=>{
       
        const newFormData={...formData, totalAmount}
        await createAction(newFormData)
        
        reset()

        // console.log(newFormData)
      
    }
    return (
        <div className='w-full h-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="flex flex-col my-3">
                    <label htmlFor="" className="text-rose-800 font-semibold">Item Name</label>
                    <input type="text"
                        {...register("itemName", { required: true })}
                        placeholder="Enter Item Name"
                        className="outline-none border border-rose-400 px-2 py-1 rounded-md"
                    />
                </fieldset>

                <fieldset className="flex flex-col my-3">
                    <label htmlFor="" className="text-rose-800 font-semibold">Price</label>
                    <input type="number"
                    {...priceRegister}
                        onChange={e => {
                            priceRegister.onChange(e);
                            handlePrice(e);
                        }}
                        placeholder="Enter Price"
                        className="outline-none border border-rose-400 px-2 py-1 rounded-md"
                    />
                </fieldset>

                <fieldset className="flex flex-col my-3">
                    <label htmlFor="" className="text-rose-800 font-semibold">Quantity</label>
                    <input type="text"
                    {...quantityRegister}
                        onChange={e => {
                            quantityRegister.onChange(e);
                            handleQuantity(e);
                        }}
                        placeholder="Enter Quantity"
                        className="outline-none border border-rose-400 px-2 py-1 rounded-md"
                    />
                </fieldset>
                <fieldset className="flex flex-col my-3">
                    <label htmlFor="" className="text-rose-800 font-semibold">Total Amount:{totalAmount} </label>
                </fieldset>

                <fieldset className="flex flex-col my-3">
                    <button type="submit" className="px-8 py-2 bg-rose-800 rounded-md text-rose-50">Save</button>
                </fieldset>
            </form>
           
        </div>
    )
}

export default CreateForm
