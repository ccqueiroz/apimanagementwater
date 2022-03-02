import { EntityRepository, Repository } from 'typeorm';
import { LevelManagement } from '../entities/LevelManagement';

@EntityRepository(LevelManagement)
class LevelManagementRepository extends Repository<LevelManagement> {
  public async createLevelManagement(value: number, label: string): Promise<LevelManagement | boolean> {
    const findLevel = await this.findOneLevelManagement(value);

    if (findLevel) {
      return false;
    }

    const createLevelManagement = this.create();
    createLevelManagement.value = value;
    createLevelManagement.label = label;

    const levelManagement = await this.save(createLevelManagement);
    return levelManagement;
  }

  public async getAllLevelManagement(): Promise<Array<LevelManagement> | []> {
    const findLevel = await this.find();
    return findLevel;
  }

  public async findOneLevelManagement(value: number): Promise<LevelManagement | undefined> {
    const findLevel = await this.findOne({
      where: {
        value,
      },
    });

    return findLevel;
  }

  public async deleteLevelManagement(value: number): Promise<LevelManagement | boolean> {
    const findLevel = await this.findOneLevelManagement(value);

    if (!findLevel) {
      return false;
    }

    await this.delete(findLevel || '');

    return findLevel;
  }
}

export { LevelManagementRepository };
