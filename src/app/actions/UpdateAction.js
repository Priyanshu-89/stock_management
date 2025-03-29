"use server"

import { PrismaClient } from "@prisma/client"

export  const  updateItem=async({id}, newFormData)=>{
try {
    const prisma=new PrismaClient();
    const ItemData = {
        itemName: newFormData.itemName,
        price: Number(newFormData.price),
        quantity: Number(newFormData.quantity),
        totalAmount: Number(newFormData.totalAmount)
    };
    // console.log({id, newnewFormData})
    await prisma.item.update({
        where: { id },
        data:{...ItemData},
    })
} catch (error) {
    
}
}