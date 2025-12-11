import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostTypeEnum } from './enums/postType.enum';
import { PostStatusEnum } from './enums/status.enum';
import { MetaOptions } from './dtos/metaOptions.dto';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 30,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostTypeEnum,
    nullable: false,
    default: PostTypeEnum.POST,
  })
  postType: PostTypeEnum;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  @Column()
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatusEnum,
    nullable: false,
    default: PostStatusEnum.DRAFT,
  })
  status: PostStatusEnum;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  publishOn: Date;

  @Column({
    type: 'json',
    nullable: true,
    array: true,
  })
  tags?: string[];

  @Column({
    type: 'json',
    nullable: true,
  })
  metaOptions?: MetaOptions[];
}
