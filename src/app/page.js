'use client'
import { useEffect, useState } from "react";
import CreateForm from "./components/CreateForm";
import { readItem } from "./actions/readAction";
import { TbEdit } from "react-icons/tb";
import { TbTrash } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    const getAllItem=async()=>{
        const itemData= await readItem();
        setItems(itemData);
    };
    getAllItem();
  },[])
  return (
    <div className="max-w-full md:max-w-7xl mx-auto min-h-screen flex items-center justify-between">
      <div className="w-full flex flex-col gap-4 justify-between items-center px-5">
        <h1 className="text-2xl  font-semibold text-rose-800">Stock Management</h1>
        <div className="flex flex-col md:flex-row gap-4 md:justify-center  w-full">
          <div className="p-4 w-full md:w-[60%] h-full bg-rose-50 rounded-md">
            <CreateForm/>
          </div>

          <div className="p-6 w-full bg-rose-100 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-rose-800 mb-4">Item List</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                    <thead className="bg-rose-800 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Item Name</th>
                            <th className="py-3 px-6 text-left">Price (₹)</th>
                            <th className="py-3 px-6 text-left">Quantity</th>
                            <th className="py-3 px-6 text-left">Total Amount (₹)</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item, idx) => (
                            <tr key={idx} className="border-b">
                                <td className="py-3 px-6">{item.itemName}</td>
                                <td className="py-3 px-6">₹ {item.price}</td>
                                <td className="py-3 px-6">{item.quantity}</td>
                                <td className="py-3 px-6 font-semibold text-orange-600">₹ {item.totalAmount}</td>
                                <td className="py-3 px-6 flex justify-center gap-4">
                                    <Link href={`/update/${item.id}`} className="text-green-500 hover:text-blue-700">
                                        <TbEdit size={20} />
                                    </Link>
                                    <Link href={`/remove/${item.id}`} className="text-red-500 hover:text-red-700">
                                        <TbTrash size={20} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
