import { Todo, TodoPriority } from '../../entities/todo.entity';

export const EXAMPLE_TODOS: Todo[] = [
  {
    id: 'b151b879-7b2e-4acd-9ef1-21997ae8402f',
    title: 'Todo A',
    description: 'Description of Todo A',
    completed: false,
    dateCompleted: null,
    priority: TodoPriority.High,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '4f7e569e-5d57-48e5-bf58-6f2af8aa77ea',
    title: 'Todo B',
    description: 'Description of Todo B',
    completed: true,
    dateCompleted: new Date(),
    priority: TodoPriority.Medium,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '8bbf8578-ec06-4731-baae-800307a97c14',
    title: 'Todo C',
    description: 'Description of Todo C',
    completed: true,
    dateCompleted: new Date(),
    priority: TodoPriority.Low,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
