import React, { useState } from 'react';
import type { Exercise } from '../types';
import { ExerciseAnimation } from './ExerciseAnimation';
import { Check } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${completed ? 'bg-green-50 border-2 border-green-500' : 'hover:shadow-lg'}`}>
      {/* Animação */}
      <ExerciseAnimation animationKey={exercise.animationKey} />

      {/* Informações */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{exercise.name}</h3>
          <button
            onClick={() => setCompleted(!completed)}
            className={`p-2 rounded-full transition-colors ${
              completed
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <Check size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">{exercise.sets}</div>
            <div className="text-xs text-gray-600">Séries</div>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">{exercise.reps}</div>
            <div className="text-xs text-gray-600">Repetições</div>
          </div>

          <div className="bg-orange-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-orange-600">⏱️</div>
            <div className="text-xs text-gray-600">Descanso</div>
          </div>
        </div>

        {/* Dica de descanso */}
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">💡 Dica:</span> Mantenha a forma correta e controle o movimento em todas as repetições.
          </p>
        </div>
      </div>
    </div>
  );
};
