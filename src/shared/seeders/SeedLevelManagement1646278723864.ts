import { LevelManagementRepository } from '../../modules/levelManagement/typeorm/repositories/LevelManagementRepository';
import { getCustomRepository, MigrationInterface } from 'typeorm';

type SeedersLevelManagement = {
  value: number;
  label: string;
};

export class SeederInsertDataLevelManagements1646202129800 implements MigrationInterface {
  private date: Array<SeedersLevelManagement> = [
    {
      value: 0,
      label: 'MasterAdmin',
    },
    {
      value: 1,
      label: 'UserAdminMaster',
    },
    {
      value: 2,
      label: 'UserAdmin',
    },
    {
      value: 3,
      label: 'UserEmployee',
    },
    {
      value: 4,
      label: 'UserClient',
    },
  ];
  public async up(): Promise<void> {
    await Promise.all(
      this.date.map(async item => {
        const levelManagementRepository = getCustomRepository(LevelManagementRepository);
        await levelManagementRepository.createLevelManagement(item.value, item.label);
      })
    );
  }

  public async down(): Promise<void> {
    await Promise.all(
      this.date.map(async item => {
        const levelManagementRepository = getCustomRepository(LevelManagementRepository);
        await levelManagementRepository.deleteLevelManagement(item.value);
      })
    );
  }
}
