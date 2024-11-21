import { Router } from 'express'

import * as db from '../db/contacts.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await db.getAllContacts()
    console.log(contacts)
    res.json({ contacts: contacts.map((contact) => contact.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }

})


router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const data = await db.byId(id)
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})


export default router

