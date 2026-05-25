import React, { useState } from 'react';
import { trainingDays } from '../data/trainingDays';
import { TrainingDayCard } from './TrainingDayCard';
import { TrainingDayDetail } from './TrainingDayDetail';
import type { TrainingDay } from '../types';
import { Dumbbell } from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<TrainingDay | null>(null);

  if (selectedDay) {
    return (
      <TrainingDayDetail
        trainingDay={selectedDay}
        onBack={() => setSelectedDay(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Dumbbell size={32} />
          <h1 className="text-3xl font-bold">GymApp</h1>
        </div>
        <p className="text-blue-100">Seu treino de musculação no bolso</p>
        <p className="text-sm text-blue-200 mt-2">Transforme seu corpo com consistência e dedicação</p>
      </div>

      {/* Current Day Indicator */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-400">
          <h2 className="font-bold text-lg mb-1">📅 Treino de Hoje</h2>
          <p className="text-sm text-gray-600">
            {new Date().toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long'
            })}
          </p>
        </div>
      </div>

      {/* Training Days */}
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-bold text-gray-800 ml-2">Sua Rotina Semanal</h2>

        {trainingDays.map((day) => (
          <TrainingDayCard
            key={day.id}
            trainingDay={day}
            onClick={() => setSelectedDay(day)}
          />
        ))}
      </div>

      {/* Tips Section */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-bold text-lg mb-4">💪 Dicas para o Sucesso</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-800">Consistência</h4>
                <p className="text-sm text-gray-600">Treinar regularmente é mais importante que treinar com peso pesado</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">💧</span>
              <div>
                <h4 className="font-semibold text-gray-800">Hidratação</h4>
                <p className="text-sm text-gray-600">Beba água ao longo do dia, especialmente durante o treino</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">😴</span>
              <div>
                <h4 className="font-semibold text-gray-800">Descanso</h4>
                <p className="text-sm text-gray-600">O crescimento muscular acontece durante o repouso</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🍎</span>
              <div>
                <h4 className="font-semibold text-gray-800">Nutrição</h4>
                <p className="text-sm text-gray-600">Coma proteína suficiente e mantenha uma dieta balanceada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-sm text-gray-600 pb-8">
        <p>Desenvolvido com ❤️ para sua saúde</p>
        <p className="mt-2 text-xs">v1.0 - 2024</p>
      </div>
    </div>
  );
};
