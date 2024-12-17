import React, { useState } from 'react';
import { TaskCategory } from '../types/Task';
import { PlusCircle, Type, AlignLeft, Tag } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (title: string, description: string, category: TaskCategory) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<TaskCategory>('personal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description, category);
      setTitle('');
      setDescription('');
      setCategory('personal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Type className="w-4 h-4 mr-2" />
          Título da Tarefa
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Digite o título da tarefa"
        />
      </div>

      <div>
        <label htmlFor="description" className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <AlignLeft className="w-4 h-4 mr-2" />
          Descrição
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Digite a descrição da tarefa"
        />
      </div>

      <div>
        <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Tag className="w-4 h-4 mr-2" />
          Categoria
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as TaskCategory)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="personal">Pessoal</option>
          <option value="work">Trabalho</option>
          <option value="shopping">Compras</option>
          <option value="health">Saúde</option>
          <option value="other">Outros</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Adicionar Tarefa
      </button>
    </form>
  );
}