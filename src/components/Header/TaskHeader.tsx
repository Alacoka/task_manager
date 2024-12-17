import React from 'react';
import { CheckCircle, ListTodo, Layout } from 'lucide-react';

interface TaskHeaderProps {
  completedTasks: number;
  totalTasks: number;
}

export function TaskHeader({ completedTasks, totalTasks }: TaskHeaderProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-full mb-6">
        <Layout className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
        <ListTodo className="w-10 h-10 mr-3 text-blue-600" />
        Gerenciador de Tarefas
      </h1>
      <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
        <span className="text-gray-700 font-medium">
          {completedTasks} de {totalTasks} tarefas completadas
        </span>
      </div>
    </div>
  );
}