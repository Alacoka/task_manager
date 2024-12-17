import React from 'react';
import { ListTodo } from 'lucide-react';

export function EmptyTaskList() {
  return (
    <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
      <div className="flex flex-col items-center">
        <ListTodo className="w-16 h-16 text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">
          Nenhuma tarefa adicionada. Comece adicionando uma nova tarefa!
        </p>
      </div>
    </div>
  );
}