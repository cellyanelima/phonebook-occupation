import connection from './connection.ts'
import { Occupation } from '../../models/Occupation.ts'

export async function getAllOccupations(
  db = connection,
): Promise<Occupation[]> {
  return db('occupations').select('*')
}
