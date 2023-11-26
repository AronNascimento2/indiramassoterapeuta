// UserController.ts
import { UserUseCase } from '../../application/useCases/userUseCase'

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async getAllUsers(req, res): Promise<void> {
    try {
      const users = await this.userUseCase.getAllUsers()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
  async getUserById(req, res): Promise<void> {
    try {
      const userId = parseInt(req.params.id) // Obtém o ID do parâmetro da URL
      const user = await this.userUseCase.getUserById(userId)

      if (!user) {
        res.status(404).json({ message: 'User not found' })
        return
      }

      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
