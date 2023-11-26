// userRoutes.ts
import express from 'express'
import { UserController } from '../controllers/UserController'
import { UserUseCase } from '../../application/useCases/userUseCase' 
import { UserRepositoryImpl } from '../../infra/data/UserRepositoryImpl' 

const router = express.Router()
const userRepository = new UserRepositoryImpl()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

router.get('/', userController.getAllUsers.bind(userController))
router.get('/:id', userController.getUserById.bind(userController))


export default router
