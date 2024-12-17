export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  createdAt: Date;
  dueDate?: Date;
}

export type TaskCategory = 'work' | 'personal' | 'shopping' | 'health' | 'other';