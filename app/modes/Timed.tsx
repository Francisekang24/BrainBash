import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useTriviaGame } from "@/hooks/useTriviaGame";

export default function Timed() {
  const { questions, shuffledAnswers, loading } = useTriviaGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answer: string) => {
    const current = questions[currentQuestionIndex];
    if (answer === current.correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  if (loading) return <Text>Loading questions...</Text>;
  if (gameOver) return <Text>Time's up! Your score: {score}</Text>;

  const current = questions[currentQuestionIndex];
  const answers = shuffledAnswers[currentQuestionIndex];

  return (
    <View>
      <Text>Time Left: {timeLeft}s</Text>
      <Text>{current.question}</Text>
      {answers.map((a, idx) => (
        <TouchableOpacity key={idx} onPress={() => handleAnswer(a)}>
          <Text>{a}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
