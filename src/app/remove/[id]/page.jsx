"use client"

import { removeItem } from "@/app/actions/RemoveAction"
import { useParams, useRouter } from "next/navigation"

const ReomvePage = () => {
  const params=useParams();
  const router=useRouter();
  // console.log(params)
  const handleRemove = async () => {
    await removeItem(params.id)
    router.push("/");
  }

  const handleCancel=()=>{
    router.push("/");
  }
  return (
    <div className="max-w-2xs mx-auto flex justify-center items-center min-h-screen">
      <div className="w-full bg-rose-300 h-[200px] rounded-md flex items-center justify-center">
        <div className="flex flex-col my-5">
          <h1 className="text-xl font-semibold text-rose-700">Are You sure to Delete?</h1>
          <div className="flex flex-row justify-between gap-x-3 px-5 py-5">
            <button 
            onClick={handleCancel}
            className="px-4 py-2 text-sm rounded-md bg-cyan-700 text-rose-50 font-medium">NO</button>
            <button
              onClick={handleRemove}
              className="px-4 py-2 text-sm rounded-md bg-rose-700 text-cyan-50 font-medium">YES</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReomvePage
