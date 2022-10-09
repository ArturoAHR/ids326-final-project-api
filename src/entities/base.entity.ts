/* eslint-disable prettier/prettier */
import { CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn} from "typeorm";

export class BaseEntity {
	@PrimaryColumn({name: 'id', nullable: false, type: 'uuid'})
	id: string;

	@CreateDateColumn({
		name: 'created_at',
		nullable: false,
		type: 'timestamp',
		default: 'now()',
	})
	createdAt: Date;

	@DeleteDateColumn({
		name: 'deleted_at',
		nullable: true,
		type: 'timestamp',
		default: null,
	})
	deletedAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
		nullable: true,
		type: 'timestamp',
		default: 'now',
	})
	updatedAt: Date;
}