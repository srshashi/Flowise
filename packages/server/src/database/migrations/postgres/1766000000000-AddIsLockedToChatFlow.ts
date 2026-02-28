import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddIsLockedToChatFlow1766000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_flow" ADD COLUMN IF NOT EXISTS "isLocked" boolean;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_flow" DROP COLUMN IF EXISTS "isLocked";`)
    }
}
