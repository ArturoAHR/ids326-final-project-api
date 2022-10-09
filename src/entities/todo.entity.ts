import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

enum TodoPriority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}

@Entity('todo')
export class Todo extends BaseEntity {
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'completed', type: 'boolean' })
  completed: boolean;

  @Column({ name: 'date_completed', type: 'timestamp' })
  dateCompleted: Date;

  @Column({ name: 'priority', type: 'enum' })
  priority: TodoPriority;
}
