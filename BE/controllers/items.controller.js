// const router = require('express').Router();

import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1/index.js'
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2/index.js'

const client1 = new PrismaClient1()
const client2 = new PrismaClient2()

export async function getItems(req, res, next) {
    try {
        const items = await client1.items.findMany({})
        const itemsParalleli = await client2.itemsParalleli.findMany({})
        console.log(items, itemsParalleli)
        res.json({ items, itemsParalleli })
    } catch {
        console.log('non va')
        res.json({ message: "error" })
    }
}