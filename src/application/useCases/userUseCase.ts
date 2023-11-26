// UserUseCase.ts
import { UserRepository } from '../../domain/repositories/UserRepository'
import { User } from '../../domain/models/UserModel'

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[] | null> {
    return this.userRepository.findAll()
  }
  async getUserById(id: number): Promise<User | null> {
    const user = await this.userRepository.findById(id)
    return user ?? null
  }
}