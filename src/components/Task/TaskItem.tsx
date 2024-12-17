import React from 'react';
import { Task } from '../../types/Task';
import { CheckCircle2, Circle, Trash2, Calendar } from 'lucide-react';
import { getCategoryColor } from '../../utils/categoryUtils';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div
      className={`group flex items-start justify-between p-6 rounded-xl border-2 ${
        task.completed
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-100 hover:border-blue-200'
      } transition-all duration-200 transform hover:scale-[1.01] hover:shadow-md`}
    >
      <div className="flex items-start space-x-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-1 transition-colors ${
            task.completed ? 'text-green-500' : 'text-gray-400 hover:text-green-500'
          }`}
        >
          {task.completed ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <div>
          <h3
            className={`text-lg font-medium ${
              task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
            }`}
          >
            {task.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{task.description}</p>
          <div className="mt-3 flex items-center space-x-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                task.category
              )}`}
            >
              {task.category}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}