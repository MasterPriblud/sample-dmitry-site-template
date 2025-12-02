"use server"
import { IFormData } from "../types/form-data";
import { prisma } from "../utils/prisma";

export async function registerUser(data: IFormData) {
    const { email, password } = data;
    try{
        const existingUser = await prisma.user.create({
            data: {
                email: email,
                password: password,   
            }
        });

        console.log("User registered successfully: ", existingUser);
    }
    catch (error) {
        console.error("Error registering user: ", error);
    }
}