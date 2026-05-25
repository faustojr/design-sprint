import type { TrainingDay } from '../types';

export const trainingDays: TrainingDay[] = [
  {
    id: 'peito',
    name: 'Peito Day',
    dayOfWeek: 'Segunda-feira',
    color: '#ff6b6b',
    exercises: [
      {
        id: 'supino-reto',
        name: 'Supino Reto (Barra)',
        sets: 4,
        reps: '6-8',
        description: 'Exercício fundamental para desenvolvimento de peito',
        muscleGroup: 'peito',
        animationKey: 'bench-press'
      },
      {
        id: 'supino-inclinado',
        name: 'Supino Inclinado (Halteres)',
        sets: 4,
        reps: '8-10',
        description: 'Trabalha a parte superior do peito',
        muscleGroup: 'peito',
        animationKey: 'incline-press'
      },
      {
        id: 'crucifixo',
        name: 'Crucifixo (Máquina)',
        sets: 3,
        reps: '10-12',
        description: 'Isolamento para contração máxima',
        muscleGroup: 'peito',
        animationKey: 'fly-machine'
      },
      {
        id: 'flexao-pectoral',
        name: 'Flexão no Pec Deck',
        sets: 3,
        reps: '12-15',
        description: 'Finalização do treino de peito',
        muscleGroup: 'peito',
        animationKey: 'pec-deck'
      }
    ]
  },
  {
    id: 'costas',
    name: 'Costas Day',
    dayOfWeek: 'Terça-feira',
    color: '#4ecdc4',
    exercises: [
      {
        id: 'barra-fixa',
        name: 'Barra Fixa (Pronada)',
        sets: 4,
        reps: '6-8',
        description: 'Exercício essencial para largura das costas',
        muscleGroup: 'costas',
        animationKey: 'pull-ups'
      },
      {
        id: 'rosca-direta',
        name: 'Rosca Direta (Barra)',
        sets: 4,
        reps: '8-10',
        description: 'Trabalha toda a cadeia posterior',
        muscleGroup: 'costas',
        animationKey: 'deadlift'
      },
      {
        id: 'rosca-curvada',
        name: 'Rosca Curvada (Halteres)',
        sets: 3,
        reps: '10-12',
        description: 'Isolamento de dorsais',
        muscleGroup: 'costas',
        animationKey: 'bent-rows'
      },
      {
        id: 'remada-alta',
        name: 'Remada Alta (Barra)',
        sets: 3,
        reps: '12-15',
        description: 'Trabalha trapézio e costa média',
        muscleGroup: 'costas',
        animationKey: 'high-row'
      }
    ]
  },
  {
    id: 'ombros',
    name: 'Ombros Day',
    dayOfWeek: 'Quarta-feira',
    color: '#ffd93d',
    exercises: [
      {
        id: 'desenvolvimento',
        name: 'Desenvolvimento (Barra)',
        sets: 4,
        reps: '6-8',
        description: 'Exercício base para ombros',
        muscleGroup: 'ombros',
        animationKey: 'shoulder-press'
      },
      {
        id: 'desenvolvimento-halteres',
        name: 'Desenvolvimento (Halteres)',
        sets: 4,
        reps: '8-10',
        description: 'Movimento mais seguro e controlado',
        muscleGroup: 'ombros',
        animationKey: 'dumbbell-press'
      },
      {
        id: 'elevacao-lateral',
        name: 'Elevação Lateral (Halteres)',
        sets: 3,
        reps: '10-12',
        description: 'Isolamento para deltóide lateral',
        muscleGroup: 'ombros',
        animationKey: 'lateral-raise'
      },
      {
        id: 'elevacao-frontal',
        name: 'Elevação Frontal (Barra)',
        sets: 3,
        reps: '12-15',
        description: 'Trabalha deltóide frontal',
        muscleGroup: 'ombros',
        animationKey: 'front-raise'
      }
    ]
  },
  {
    id: 'pernas',
    name: 'Pernas Day',
    dayOfWeek: 'Quinta-feira',
    color: '#a8e6cf',
    exercises: [
      {
        id: 'agachamento',
        name: 'Agachamento (Barra)',
        sets: 4,
        reps: '6-8',
        description: 'Rainha dos exercícios para pernas',
        muscleGroup: 'pernas',
        animationKey: 'squat'
      },
      {
        id: 'leg-press',
        name: 'Leg Press',
        sets: 4,
        reps: '8-10',
        description: 'Alternativa mais segura ao agachamento',
        muscleGroup: 'pernas',
        animationKey: 'leg-press'
      },
      {
        id: 'leg-curl',
        name: 'Leg Curl (Sentado)',
        sets: 3,
        reps: '10-12',
        description: 'Isolamento para bíceps femoral',
        muscleGroup: 'pernas',
        animationKey: 'leg-curl'
      },
      {
        id: 'leg-extension',
        name: 'Leg Extension',
        sets: 3,
        reps: '12-15',
        description: 'Isolamento para quadríceps',
        muscleGroup: 'pernas',
        animationKey: 'leg-extension'
      },
      {
        id: 'panturrilha',
        name: 'Panturrilha (Máquina)',
        sets: 3,
        reps: '15-20',
        description: 'Trabalha o gástrocnêmio',
        muscleGroup: 'pernas',
        animationKey: 'calf-raise'
      }
    ]
  }
];
