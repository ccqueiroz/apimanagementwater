import { Company } from '@modules/company/typeorm/entities/Company';
import { LevelManagement } from '@modules/levelManagement/typeorm/entities/LevelManagement';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('userSystem')
class UserSystem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    unique: true,
    length: 30,
  })
  phone: string;

  @OneToOne(() => LevelManagement)
  @JoinColumn()
  @Column({ name: 'levelManagementId' })
  levelManagement: LevelManagement;

  @ManyToOne(() => Company, () => UserSystem)
  @JoinColumn()
  @Column({ name: 'companyId' })
  company: Company;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { UserSystem };
