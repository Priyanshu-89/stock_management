"use client"

import UpdateForm from "@/app/components/UpdateFrom"
import { useParams } from "next/navigation"

const UpdatePage = () => {
    const params=useParams();
    console.log(params)
  return (
    <div className="max-w-md mx-auto mt-10 bg-rose-100 p-4 rounded-md">
        <h1 className="text-xl font-semibold text-center text-rose-800">Update Item</h1>
      <UpdateForm id={params.id}/>
    </div>
  )
}

export default UpdatePage
