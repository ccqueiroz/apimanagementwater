import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('levelManagement')
class LevelManagement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  value: number;

  @Column()
  label: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { LevelManagement };
