import React from 'react';
import type { TrainingDay } from '../types';
import { ChevronRight } from 'lucide-react';

interface TrainingDayCardProps {
  trainingDay: TrainingDay;
  onClick: () => void;
}

export const TrainingDayCard: React.FC<TrainingDayCardProps> = ({ trainingDay, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden border-l-4"
      style={{ borderColor: trainingDay.color }}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: trainingDay.color }}>
              {trainingDay.name}
            </h2>
            <p className="text-sm text-gray-500">{trainingDay.dayOfWeek}</p>
          </div>
          <ChevronRight size={24} className="text-gray-400" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {trainingDay.exercises.map((exercise) => (
            <span
              key={exercise.id}
              className="px-2 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: trainingDay.color + '20',
                color: trainingDay.color
              }}
            >
              {exercise.name.split('(')[0].trim()}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>{trainingDay.exercises.length} exercícios</span>
          <span className="font-semibold">{trainingDay.exercises.reduce((sum, ex) => sum + ex.sets, 0)} séries totais</span>
        </div>
      </div>
    </button>
  );
};
