import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TaskFormFieldProps {
  id: string;
  label: string;
  Icon: LucideIcon;
  children: React.ReactNode;
}

export function TaskFormField({ id, label, Icon, children }: TaskFormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center text-sm font-medium text-gray-700 mb-1">
        <Icon className="w-4 h-4 mr-2" />
        {label}
      </label>
      {children}
    </div>
  );
}