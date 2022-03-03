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
            name: 'levelManagementId',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['companyId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'company',
          },
          {
            columnNames: ['levelManagementId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'levelManagement',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('userSystem');
    const foreignKeyCompany = table?.foreignKeys.find(fk => fk.columnNames.indexOf('companyId') !== -1);
    const foreignKeyLevelManagement = table?.foreignKeys.find(fk => fk.columnNames.indexOf('levelManagementId') !== -1);
    await queryRunner.dropForeignKey('userSystem', foreignKeyCompany as TableForeignKey);
    await queryRunner.dropForeignKey('userSystem', foreignKeyLevelManagement as TableForeignKey);
    await queryRunner.dropColumn('userSystem', 'companyId');
    await queryRunner.dropColumn('userSystem', 'levelManagementId');
    await queryRunner.dropTable('userSystem');
  }
}
