import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  password: string;
}
