import React from 'react';

interface ExerciseAnimationProps {
  animationKey: string;
}

export const ExerciseAnimation: React.FC<ExerciseAnimationProps> = ({ animationKey }) => {
  const renderAnimation = () => {
    switch (animationKey) {
      case 'bench-press':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full">
            {/* Banco */}
            <rect x="40" y="150" width="120" height="20" fill="#8B7355" />
            <rect x="35" y="170" width="10" height="50" fill="#8B7355" />
            <rect x="155" y="170" width="10" height="50" fill="#8B7355" />

            {/* Corpo */}
            <ellipse cx="100" cy="140" rx="35" ry="40" fill="#E8B4B4" />

            {/* Cabeça */}
            <circle cx="100" cy="80" r="20" fill="#D4A59A" />

            {/* Braços com movimento */}
            <line x1="65" y1="130" x2="40" y2="110" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="135" y1="130" x2="160" y2="110" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Mãos */}
            <circle cx="40" cy="110" r="5" fill="#D4A59A" />
            <circle cx="160" cy="110" r="5" fill="#D4A59A" />

            {/* Barra */}
            <rect x="35" y="105" width="130" height="8" fill="#4a4a4a" />
            <circle cx="30" cy="109" r="6" fill="#999" />
            <circle cx="170" cy="109" r="6" fill="#999" />

            {/* Pernas */}
            <line x1="85" y1="180" x2="75" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="180" x2="125" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Pés */}
            <ellipse cx="75" cy="225" rx="8" ry="12" fill="#333" />
            <ellipse cx="125" cy="225" rx="8" ry="12" fill="#333" />

            {/* Animação */}
            <style>{`
              @keyframes benchPress {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(0, -20px); }
              }
              svg { animation: benchPress 2s infinite; }
            `}</style>
          </svg>
        );

      case 'squat':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full">
            {/* Corpo */}
            <ellipse cx="100" cy="120" rx="35" ry="40" fill="#E8B4B4" />

            {/* Cabeça */}
            <circle cx="100" cy="60" r="20" fill="#D4A59A" />

            {/* Braços */}
            <line x1="65" y1="110" x2="50" y2="140" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="135" y1="110" x2="150" y2="140" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Mãos */}
            <circle cx="50" cy="140" r="5" fill="#D4A59A" />
            <circle cx="150" cy="140" r="5" fill="#D4A59A" />

            {/* Barra */}
            <rect x="45" y="105" width="110" height="8" fill="#4a4a4a" />

            {/* Pernas - movimento de agachamento */}
            <line x1="85" y1="160" x2="80" y2="230" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="160" x2="120" y2="230" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Pés */}
            <ellipse cx="80" cy="235" rx="8" ry="12" fill="#333" />
            <ellipse cx="120" cy="235" rx="8" ry="12" fill="#333" />

            <style>{`
              @keyframes squat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(30px); }
              }
              svg { animation: squat 2s infinite; }
            `}</style>
          </svg>
        );

      case 'pull-ups':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full">
            {/* Barra */}
            <line x1="30" y1="50" x2="170" y2="50" stroke="#4a4a4a" strokeWidth="8" strokeLinecap="round" />
            <circle cx="30" cy="50" r="6" fill="#999" />
            <circle cx="170" cy="50" r="6" fill="#999" />

            {/* Corpo */}
            <ellipse cx="100" cy="150" rx="30" ry="35" fill="#E8B4B4" />

            {/* Cabeça */}
            <circle cx="100" cy="100" r="18" fill="#D4A59A" />

            {/* Braços */}
            <line x1="70" y1="110" x2="40" y2="50" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="130" y1="110" x2="160" y2="50" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Mãos */}
            <circle cx="40" cy="50" r="5" fill="#D4A59A" />
            <circle cx="160" cy="50" r="5" fill="#D4A59A" />

            {/* Pernas */}
            <line x1="85" y1="185" x2="80" y2="240" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="185" x2="120" y2="240" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Pés */}
            <ellipse cx="80" cy="245" rx="7" ry="10" fill="#333" />
            <ellipse cx="120" cy="245" rx="7" ry="10" fill="#333" />

            <style>{`
              @keyframes pullUps {
                0%, 100% { transform: translateY(40px); }
                50% { transform: translateY(0); }
              }
              svg { animation: pullUps 2s infinite; }
            `}</style>
          </svg>
        );

      case 'shoulder-press':
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full">
            {/* Banco */}
            <rect x="50" y="160" width="100" height="15" fill="#8B7355" />
            <rect x="45" y="175" width="10" height="40" fill="#8B7355" />
            <rect x="145" y="175" width="10" height="40" fill="#8B7355" />

            {/* Corpo */}
            <ellipse cx="100" cy="140" rx="32" ry="38" fill="#E8B4B4" />

            {/* Cabeça */}
            <circle cx="100" cy="70" r="20" fill="#D4A59A" />

            {/* Braços levantados */}
            <line x1="68" y1="125" x2="50" y2="70" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="132" y1="125" x2="150" y2="70" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Mãos */}
            <circle cx="50" cy="70" r="5" fill="#D4A59A" />
            <circle cx="150" cy="70" r="5" fill="#D4A59A" />

            {/* Halteres */}
            <rect x="42" y="65" width="16" height="8" fill="#FFB000" />
            <rect x="142" y="65" width="16" height="8" fill="#FFB000" />

            {/* Pernas */}
            <line x1="85" y1="178" x2="75" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="178" x2="125" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />

            {/* Pés */}
            <ellipse cx="75" cy="225" rx="8" ry="12" fill="#333" />
            <ellipse cx="125" cy="225" rx="8" ry="12" fill="#333" />

            <style>{`
              @keyframes shoulderPress {
                0%, 100% { transform: translateY(15px); }
                50% { transform: translateY(-15px); }
              }
              svg { animation: shoulderPress 2s infinite; }
            `}</style>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <ellipse cx="100" cy="140" rx="35" ry="40" fill="#E8B4B4" />
            <circle cx="100" cy="80" r="20" fill="#D4A59A" />
            <line x1="65" y1="130" x2="40" y2="110" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="135" y1="130" x2="160" y2="110" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="85" y1="180" x2="75" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="180" x2="125" y2="220" stroke="#D4A59A" strokeWidth="8" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-64 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg flex items-center justify-center p-4">
      {renderAnimation()}
    </div>
  );
};
