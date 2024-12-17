import { useState } from 'react';
import { Task, TaskCategory } from '../types/Task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string, category: TaskCategory) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      category,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const getCompletedTasksCount = () => tasks.filter((task) => task.completed).length;

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    getCompletedTasksCount,
  };
}