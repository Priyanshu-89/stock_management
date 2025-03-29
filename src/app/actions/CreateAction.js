"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createAction = async (formData) => {
    try {
       
        // console.log("Form Data", formData)
        const ItemData = {
            itemName: formData.itemName,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
            totalAmount: Number(formData.totalAmount)
        }
        const createdItem = await prisma.item.create({ data: ItemData })
        revalidatePath('/')
        // console.log("Item Created", createdItem)
    } catch (error) {
        console.log(error)
    }
}