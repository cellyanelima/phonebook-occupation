import { Router } from 'express'

import * as db from '../db/contacts.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await db.getAllContacts()
    res.json({ contacts: contacts.map((contact) => contact.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
