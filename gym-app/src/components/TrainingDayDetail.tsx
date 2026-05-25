import React from 'react';
import type { TrainingDay } from '../types';
import { ExerciseCard } from './ExerciseCard';
import { ArrowLeft } from 'lucide-react';

interface TrainingDayDetailProps {
  trainingDay: TrainingDay;
  onBack: () => void;
}

export const TrainingDayDetail: React.FC<TrainingDayDetailProps> = ({ trainingDay, onBack }) => {
  const totalSeries = trainingDay.exercises.reduce((sum, ex) => sum + ex.sets, 0);
  const totalTime = totalSeries * 4; // Estimativa: 4 minutos por série

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div
        className="p-4 text-white shadow-lg"
        style={{ backgroundColor: trainingDay.color }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={24} />
          <span>Voltar</span>
        </button>

        <h1 className="text-3xl font-bold mb-2">{trainingDay.name}</h1>
        <p className="mb-4 opacity-90">{trainingDay.dayOfWeek}</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <div className="text-2xl font-bold">{trainingDay.exercises.length}</div>
            <div className="text-sm opacity-90">Exercícios</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <div className="text-2xl font-bold">{totalSeries}</div>
            <div className="text-sm opacity-90">Séries</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <div className="text-2xl font-bold">{totalTime}min</div>
            <div className="text-sm opacity-90">Tempo Est.</div>
          </div>
        </div>
      </div>

      {/* Exercises */}
      <div className="p-4 space-y-4">
        {trainingDay.exercises.map((exercise, index) => (
          <div key={exercise.id}>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: trainingDay.color }}
              >
                {index + 1}
              </div>
              <span className="text-sm font-semibold text-gray-600">
                Exercício {index + 1} de {trainingDay.exercises.length}
              </span>
            </div>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}

        {/* Resumo Final */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4 border-l-4" style={{ borderColor: trainingDay.color }}>
          <h3 className="font-bold text-lg mb-3" style={{ color: trainingDay.color }}>
            ✅ Resumo do Treino
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Faça 2-3 minutos de aquecimento antes de começar</li>
            <li>• Mantenha intervalos de descanso entre 60-90 segundos</li>
            <li>• Prioritize qualidade sobre quantidade</li>
            <li>• Hidrate-se durante todo o treino</li>
            <li>• Estique-se por 5-10 minutos após o treino</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
