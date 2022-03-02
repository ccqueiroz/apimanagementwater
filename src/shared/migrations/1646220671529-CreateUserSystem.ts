import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateUserSystem1646220671529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'userSystem',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'companyId',
            type: 'uuid',
          },
          {
            name: 'LevelManagementId',
            type: 'uuid',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'userSystem',
      new TableForeignKey({
        columnNames: ['companyId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'company',
        onDelete: 'cascade',
      })
    );

    await queryRunner.createForeignKey(
      'userSystem',
      new TableForeignKey({
        columnNames: ['LevelManagementId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'levelManagement',
        onDelete: 'cascade',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('userSystem');
    const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf('questionId') !== -1);
    await queryRunner.dropForeignKey('userSystem', foreignKey as TableForeignKey);
    await queryRunner.dropColumn('userSystem', 'companyId');
    await queryRunner.dropColumn('userSystem', 'valueLevelManagement');
    await queryRunner.dropTable('userSystem');
  }
}
