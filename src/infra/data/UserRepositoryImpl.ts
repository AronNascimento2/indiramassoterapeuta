import { User } from '../../domain/models/UserModel'
import { UserRepository } from '../../domain/repositories/UserRepository'
import { createPool, Pool } from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const pool: Pool = createPool({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
})

export class UserRepositoryImpl implements UserRepository {
  async findAll(): Promise<User[]> {
    try {
      const [rows] = await pool.query('SELECT * FROM clients')
      return rows as User[]
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`)
    }
  }
  async findById(id: number): Promise<User | null> {
    try {
      const [row] = await pool.query('SELECT * FROM clients WHERE id = ?', [id])
      if (!Array.isArray(row) || row.length === 0) return null // Verifica se é um array e se está vazio

      const user: User = row[0] as User // Converte o resultado para User
      return user
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${error}`)
    }
  }
}
