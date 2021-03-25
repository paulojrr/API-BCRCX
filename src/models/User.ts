import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import Recipe from './Recipe';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Recipe, recipe => recipe.user)
  recipe: Recipe;
}

export default User;
