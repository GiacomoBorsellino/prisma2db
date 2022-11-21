// const router = require('express').Router();

import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1/index.js'
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2/index.js'
import { PrismaClient as PrismaClient3 } from '../prisma/generated/client3/index.js'


const client1 = new PrismaClient1()
const client2 = new PrismaClient2()
const client3 = new PrismaClient3()


export async function getItems(req, res, next) {
    try {
        const items = await client1.items.findMany({})
        const itemsParalleli = await client2.itemsParalleli.findMany({})
        const itemsSchema = await client3.itemsSchema.findMany({})
        const itemsSchema2 = await client3.itemsTesting.findMany({})


        console.log(items, itemsParalleli, itemsSchema, itemsSchema2)
        res.json({ items, itemsParalleli, itemsSchema, itemsSchema2 })
    } catch (err) {
        console.log('non va')
        res.json({ message: err })
    }
}