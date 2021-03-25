import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddTagFieldToRecipe1616616881734
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'tag',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'tag');
  }
}
