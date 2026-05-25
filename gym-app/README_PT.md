# 💪 GymApp - Seu Treino de Musculação no Bolso

Um aplicativo web responsivo para gerenciar seu treino de musculação com animações interativas e divisão de exercícios em dias específicos.

## 🎯 Características

### 📅 Divisão de Treino
- **Peito Day (Segunda)** - 4 exercícios com foco em peito
- **Costas Day (Terça)** - 4 exercícios com foco em dorsais
- **Ombros Day (Quarta)** - 4 exercícios com foco em ombros
- **Pernas Day (Quinta)** - 5 exercícios com foco em pernas

### 💻 Interface Responsiva
- Totalmente otimizado para **mobile first**
- Funciona perfeitamente em tablets e desktops
- Design moderno e intuitivo

### 🎬 Animações
- SVG animações de um manequim demonstrando cada exercício
- Diferentes movimentos para cada tipo de exercício
- Animações suaves e contínuas

### 📊 Informações Detalhadas por Exercício
- Nome do exercício
- Número de séries recomendadas
- Quantidade de repetições
- Descrição e objetivo do exercício
- Dicas de execução
- Estimativa de tempo total

### ✅ Sistema de Checklist
- Marque exercícios como completados
- Visual feedback com cores
- Acompanhamento do progresso

## 🚀 Como Usar

### Instalação

```bash
cd gym-app
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O app será executado em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
gym-app/
├── src/
│   ├── components/
│   │   ├── Home.tsx                    # Página principal
│   │   ├── TrainingDayCard.tsx         # Card do dia de treino
│   │   ├── TrainingDayDetail.tsx       # Detalhes do treino
│   │   ├── ExerciseCard.tsx            # Card do exercício
│   │   └── ExerciseAnimation.tsx       # Animações SVG
│   ├── data/
│   │   └── trainingDays.ts             # Database de exercícios
│   ├── types/
│   │   └── index.ts                    # Tipos TypeScript
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **SVG** - Animações

## 🎨 Design Responsivo

O app utiliza:
- Grid e Flexbox para layouts flexíveis
- Breakpoints do Tailwind para diferentes telas
- Cores vibrantes para cada dia de treino:
  - 🔴 Peito Day: Vermelho (#ff6b6b)
  - 🔵 Costas Day: Turquesa (#4ecdc4)
  - 🟡 Ombros Day: Amarelo (#ffd93d)
  - 🟢 Pernas Day: Verde (#a8e6cf)

## 📱 Exercícios Inclusos

### Peito Day
- Supino Reto (Barra)
- Supino Inclinado (Halteres)
- Crucifixo (Máquina)
- Flexão no Pec Deck

### Costas Day
- Barra Fixa (Pronada)
- Rosca Direta (Barra)
- Rosca Curvada (Halteres)
- Remada Alta (Barra)

### Ombros Day
- Desenvolvimento (Barra)
- Desenvolvimento (Halteres)
- Elevação Lateral (Halteres)
- Elevação Frontal (Barra)

### Pernas Day
- Agachamento (Barra)
- Leg Press
- Leg Curl (Sentado)
- Leg Extension
- Panturrilha (Máquina)

## 💡 Dicas de Treino

O app inclui dicas importantes:
- Consistência é mais importante que peso pesado
- Mantenha intervalos de descanso entre 60-90 segundos
- Hidrate-se durante o treino
- Durma o suficiente para recuperação muscular
- Coma proteína suficiente

## 🔄 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Faz build para produção |
| `npm run preview` | Visualiza o build |
| `npm run lint` | Executa o linter |

## 📈 Próximas Melhorias

- [ ] Sistema de login e salvamento de progresso
- [ ] Histórico de treinos
- [ ] Cálculo automático de 1RM
- [ ] Progressão de pesos
- [ ] Notificações de treino
- [ ] Integração com wearables
- [ ] Gráficos de progresso
- [ ] Suporte a português completo

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas features
- Melhorar a documentação
- Enviar pull requests

---

**Desenvolvido com ❤️ para sua saúde**

Transforme seu corpo com consistência e dedicação! 💪
