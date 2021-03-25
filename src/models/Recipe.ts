import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @Column()
  tag: string;

  @ManyToOne(() => User, user => user.recipe)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Recipe;
