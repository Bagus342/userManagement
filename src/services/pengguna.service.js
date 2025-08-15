import prisma from "../config/prisma.js"

export const getAllPenggunaService = async () => {
    return await prisma.pengguna.findMany()
}

export const createPenggunaService = async (data) => {
    try {
        return await prisma.pengguna.create({
            data
        })
    } catch (error) {
        if (error.code === 'P2002') {
            const err = new Error('Email has already exist')
            err.statusCode = 400
            throw err
        }
        throw error
    }
}

export const updatePenggunaService = async (data, id) => {
    try {
        return await prisma.pengguna.update({
            where : {
                id
            },
            data
        })
    } catch (error) {
        if (error.code === 'P2002') {
            const err = new Error('Email has already exist')
            err.statusCode = 400
            throw err
        }
        throw error
    }
}

export const deletePenggunaService = async (id) => {
    return await prisma.pengguna.delete({ where : { id }})
}