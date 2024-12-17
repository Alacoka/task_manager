import React from 'react';
import { TaskHeader } from './components/Header/TaskHeader';
import { TaskList } from './components/Task/TaskList';
import { TaskForm } from './components/Form/TaskForm';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, getCompletedTasksCount } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <TaskHeader
          completedTasks={getCompletedTasksCount()}
          totalTasks={tasks.length}
        />

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <h2 className="text-white text-lg font-semibold">Nova Tarefa</h2>
            </div>
            <div className="p-6">
              <TaskForm onAddTask={addTask} />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <TaskList
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;