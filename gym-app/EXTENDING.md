# 🔧 Estendendo o GymApp

Guia para adicionar novos exercícios, dias de treino ou recursos ao app.

## Adicionando um Novo Exercício

### 1. Adicione os dados ao `trainingDays.ts`

```typescript
// src/data/trainingDays.ts

{
  id: 'novo-exercicio',
  name: 'Novo Exercício (Equipamento)',
  sets: 3,
  reps: '10-12',
  description: 'Descrição do exercício e seu objetivo',
  muscleGroup: 'grupo-muscular',
  animationKey: 'novo-exercicio' // Essa chave será usada na animação
}
```

### 2. Adicione a animação em `ExerciseAnimation.tsx`

```typescript
// src/components/ExerciseAnimation.tsx

case 'novo-exercicio':
  return (
    <svg viewBox="0 0 200 300" className="w-full h-full">
      {/* Desenhe o SVG do movimento */}
      <ellipse cx="100" cy="140" rx="35" ry="40" fill="#E8B4B4" />
      {/* ... mais elementos ... */}
      
      <style>{`
        @keyframes novoExercicio {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        svg { animation: novoExercicio 2s infinite; }
      `}</style>
    </svg>
  );
```

## Adicionando um Novo Dia de Treino

### 1. Crie o objeto do dia em `trainingDays.ts`

```typescript
// src/data/trainingDays.ts

{
  id: 'novo-dia',
  name: 'Novo Dia',
  dayOfWeek: 'Sexta-feira',
  color: '#FF6B9D', // Cor única para o dia
  exercises: [
    // Adicione exercícios aqui
  ]
}
```

### 2. A rota será automática!

O componente `TrainingDayCard` e `Home` já suportam novos dias automaticamente.

## Criando Animações SVG

### Estrutura Básica

```typescript
<svg viewBox="0 0 200 300" className="w-full h-full">
  {/* Corpo */}
  <ellipse cx="100" cy="140" rx="35" ry="40" fill="#E8B4B4" />
  
  {/* Cabeça */}
  <circle cx="100" cy="80" r="20" fill="#D4A59A" />
  
  {/* Braços */}
  <line 
    x1="65" y1="130" 
    x2="40" y2="110" 
    stroke="#D4A59A" 
    strokeWidth="8" 
    strokeLinecap="round" 
  />
  
  {/* Estilo com animação */}
  <style>{`
    @keyframes meuExercicio {
      0%, 100% { /* Estado inicial */ }
      50% { /* Estado no meio do movimento */ }
    }
    svg { animation: meuExercicio 2s infinite; }
  `}</style>
</svg>
```

### Cores Utilizadas

- **Corpo**: `#E8B4B4` (tom de pele claro)
- **Pele**: `#D4A59A` (tom de pele mais escuro)
- **Madeira/Banco**: `#8B7355`
- **Metal**: `#4a4a4a` ou `#999`
- **Ouro/Halteres**: `#FFB000`

### Sistema de Coordenadas

- ViewBox: `0 0 200 300` (200px de largura, 300px de altura)
- Coordenadas começam no topo-esquerdo (0, 0)
- Aumente Y para descer, X para mover para direita

## Adicionando Novos Componentes

### Exemplo: Novo tipo de Card

```typescript
// src/components/NewComponent.tsx

import React from 'react';
import type { ComponentType } from '../types';

interface NewComponentProps {
  data: ComponentType;
}

export const NewComponent: React.FC<NewComponentProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Seu conteúdo aqui */}
    </div>
  );
};
```

## Modificando Estilos

### Com Tailwind CSS

O app usa Tailwind CSS. Para modificar:

```tsx
// Use classes direto no HTML
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Conteúdo
</div>
```

### Cores Customizadas

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'custom': '#FF6B6B',
      'custom-dark': '#CC0000',
    },
  },
}
```

## Adicionando TypeScript Types

### Novo tipo em `types/index.ts`

```typescript
export interface NovoTipo {
  id: string;
  name: string;
  // ... mais campos
}
```

## Exemplo Completo: Novo Exercício

Digamos que você quer adicionar "Leg Press Machine":

### 1. Dados (`trainingDays.ts`)

```typescript
{
  id: 'leg-press',
  name: 'Leg Press (Máquina)',
  sets: 4,
  reps: '8-10',
  description: 'Exercício seguro para desenvolver força nas pernas',
  muscleGroup: 'pernas',
  animationKey: 'leg-press'
}
```

### 2. Animação (`ExerciseAnimation.tsx`)

```typescript
case 'leg-press':
  return (
    <svg viewBox="0 0 200 300" className="w-full h-full">
      {/* Cadeira */}
      <rect x="20" y="80" width="160" height="80" fill="#8B7355" rx="10" />
      
      {/* Corpo sentado */}
      <ellipse cx="100" cy="120" rx="35" ry="30" fill="#E8B4B4" />
      <circle cx="100" cy="70" r="18" fill="#D4A59A" />
      
      {/* Pernas estendidas (movimento) */}
      <line x1="85" y1="150" x2="70" y2="260" stroke="#D4A59A" strokeWidth="10" />
      <line x1="115" y1="150" x2="130" y2="260" stroke="#D4A59A" strokeWidth="10" />
      
      {/* Pés */}
      <rect x="60" y="260" width="20" height="15" fill="#333" rx="3" />
      <rect x="120" y="260" width="20" height="15" fill="#333" rx="3" />
      
      <style>{`
        @keyframes legPress {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        svg { animation: legPress 2s infinite; }
      `}</style>
    </svg>
  );
```

## Dicas de Performance

### Otimizando Renderização

```typescript
// Use React.memo para componentes que não precisam re-renderizar
export const MeuComponente = React.memo(({ props }) => {
  return <div>{/* conteúdo */}</div>;
});
```

### Gerenciando Estado

```typescript
// Use useState para estado local
const [isCompleted, setIsCompleted] = useState(false);

// Use useCallback para functions otimizadas
const handleClick = useCallback(() => {
  setIsCompleted(!isCompleted);
}, [isCompleted]);
```

## Testando suas Mudanças

### Desenvolvimento
```bash
npm run dev
# Acesse http://localhost:5173
```

### Build de Teste
```bash
npm run build
npm run preview
```

### Verificação de Tipos
```bash
npm run type-check  # Se disponível
# Ou use o TypeScript direto
npx tsc --noEmit
```

## Estrutura de Pastas Recomendada

Se o app crescer muito:

```
src/
├── components/
│   ├── common/           # Componentes reutilizáveis
│   │   └── Button.tsx
│   ├── exercises/        # Componentes específicos
│   │   └── ExerciseCard.tsx
│   ├── layouts/          # Layouts
│   │   └── AppLayout.tsx
│   └── pages/            # Páginas principais
│       └── Home.tsx
├── data/
│   ├── trainingDays.ts
│   └── constants.ts
├── types/
│   └── index.ts
├── utils/                # Funções auxiliares
│   └── helpers.ts
└── styles/               # Estilos customizados
    └── globals.css
```

## Publicando o App

### Deploy no Vercel

```bash
# Instale a CLI do Vercel
npm install -g vercel

# Faça deploy
vercel
```

### Deploy no Netlify

```bash
# Instale a CLI do Netlify
npm install -g netlify-cli

# Faça deploy
netlify deploy --prod --dir=dist
```

---

**Divirta-se estendendo o app! 🚀**
