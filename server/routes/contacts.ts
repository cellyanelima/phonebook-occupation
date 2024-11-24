import { Router } from 'express'

import * as db from '../db/contacts.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await db.getAllContactsWithOccupation()
    res.json(contacts)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    const contact = await db.getContactById(id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json(contact)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.body.id)
    const occupationId = Number(req.body.occupationId)
    const { name, phone, email } = req.body

    await db.updateContact({
      id,
      occupationId: Number(occupationId),
      name,
      phone,
      email,
    })
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const occupationId = Number(req.body.occupationId)
    const { name, phone, email } = req.body

    const id = await db.addNewContact({
      occupationId: Number(occupationId),
      name,
      phone,
      email,
    })
    const url = `/api/v1/contacts/${id}`
    res.setHeader('Location', url)
    res.status(201).json({ location: url })
  } catch (e) {
    next(e)
  }
})

export default router
