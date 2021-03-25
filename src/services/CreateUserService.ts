import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    if (!name || !password) {
      throw new AppError('Name and password are required');
    }

    const checkUserExists = await userRepository.findOne({
      where: { name },
    });

    if (checkUserExists) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
