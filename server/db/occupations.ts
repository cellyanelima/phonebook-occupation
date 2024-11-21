import connection from './connection.ts'
import { Occupation } from '../../models/Occupation.ts'

export async function getAllOccupations(
  db = connection,
): Promise<Occupation[]> {
  const occupations = await db('occupations').select('*')
  return occupations as Occupation[]
}
