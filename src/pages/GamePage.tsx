import React, { useState, useEffect, useCallback } from 'react';
import { Gamepad2, Trophy } from 'lucide-react';

interface Snake {
  x: number;
  y: number;
}

export function GamePage() {
  const [snake, setSnake] = useState<Snake[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Snake>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<string>('right');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem('snakeHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const generateFood = useCallback(() => {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    setFood({ x, y });
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('right');
    setScore(0);
    setGameOver(false);
    generateFood();
  };

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'right':
        head.x += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
    }

    // Check collision with walls or self
    if (
      head.x >= 20 || head.x < 0 || head.y >= 20 || head.y < 0 ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('snakeHighScore', score.toString());
      }
      return;
    }

    // Check if snake ate food
    if (head.x === food.x && head.y === food.y) {
      setScore(s => s + 1);
      generateFood();
    } else {
      newSnake.pop();
    }

    newSnake.unshift(head);
    setSnake(newSnake);
  }, [snake, direction, food, generateFood, gameOver, isPaused, score, highScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        setIsPaused(p => !p);
        return;
      }

      if (gameOver) {
        resetGame();
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'down') setDirection('up');
          break;
        case 'ArrowDown':
          if (direction !== 'up') setDirection('down');
          break;
        case 'ArrowLeft':
          if (direction !== 'right') setDirection('left');
          break;
        case 'ArrowRight':
          if (direction !== 'left') setDirection('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    const gameInterval = setInterval(moveSnake, 200);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameInterval);
    };
  }, [moveSnake, direction, gameOver]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 mb-4">
          <Gamepad2 className="h-8 w-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-900">Snake Game</h1>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Score:</span>
            <span className="text-2xl font-bold text-indigo-600">{score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600">High Score:</span>
            <span className="text-2xl font-bold text-yellow-500">{highScore}</span>
          </div>
        </div>
      </div>

      <div className="relative w-[400px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Game background with grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        {/* Snake */}
        {snake.map((segment, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 rounded-sm transition-all duration-200"
            style={{
              left: `${segment.x * 20}px`,
              top: `${segment.y * 20}px`,
              background: i === 0 
                ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' 
                : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: i === 0 ? '0 0 10px rgba(99, 102, 241, 0.5)' : 'none',
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute w-5 h-5 rounded-full animate-pulse"
          style={{
            left: `${food.x * 20}px`,
            top: `${food.y * 20}px`,
            background: 'linear-gradient(135deg, #ef4444, #f87171)',
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
              <p className="mb-4">Final Score: {score}</p>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Pause Overlay */}
        {isPaused && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-4xl font-bold text-white">PAUSED</div>
          </div>
        )}
      </div>

      <div className="text-center mt-8 text-gray-600">
        <p className="mb-2">Use arrow keys to control the snake</p>
        <p>Press SPACE to pause/resume</p>
      </div>
    </div>
  );
}