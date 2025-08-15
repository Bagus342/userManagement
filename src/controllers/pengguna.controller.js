import { Pengguna } from '../dto/pengguna.dto.js'
import * as penggunaServices from '../services/pengguna.service.js'

export const getAllPengguna = async (req, res) => {
    try {
        const data = await penggunaServices.getAllPenggunaService()

        res.status(200).json({ success: true, message: 'Success get data', data: data })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: true, message: 'Internal server error' })
    }
}

export const createPengguna = async (req, res) => {
    const data = new Pengguna(req.body)
    try {
        await penggunaServices.createPenggunaService(data)
        return res.status(200).json({
            success: true,
            message: 'Success create data',
        })
    } catch (error) {
        console.log(error.message)
        if (error.statusCode === 400) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const updatePengguna = async (req, res) => {
    const { id } = req.params
    const data = new Pengguna(req.body)

    try {

        const updatedPengguna = await penggunaServices.updatePenggunaService(data, Number(id))

        res.status(200).json({
            success: true,
            message: 'Success update data',
            data: updatedPengguna
        })
    } catch (error) {
        console.log(error.message)
        if (error.statusCode === 400) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }

}

export const deletePengguna = async (req, res) => {
    const { id } = req.params

    try {
        await penggunaServices.deletePenggunaService(Number(id))
        res.status(200).json({
            success: true,
            message: 'Success delete data'
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}