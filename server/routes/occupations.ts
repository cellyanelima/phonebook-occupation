import { Router } from 'express'

import * as db from '../db/occupations.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const occupations = await db.getAllOccupations()

    res.json({ occupations: occupations.map((occupation) => occupation.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
