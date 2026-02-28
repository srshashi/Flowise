import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddIsLockedToChatFlow1766000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const columnExists = await queryRunner.hasColumn('chat_flow', 'isLocked')
        if (!columnExists) {
            await queryRunner.query(`ALTER TABLE \`chat_flow\` ADD COLUMN \`isLocked\` BOOLEAN;`)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chat_flow\` DROP COLUMN \`isLocked\`;`)
    }
}
