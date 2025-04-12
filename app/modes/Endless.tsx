import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTriviaGame } from "@/hooks/useTriviaGame";

export default function Endless() {
  const { questions, shuffledAnswers, loading } = useTriviaGame();
  const [index, setIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (answer: string) => {
    const current = questions[index];
    if (answer === current.correct_answer) {
      setStreak(streak + 1);
      setIndex(index + 1);
    } else {
      setGameOver(true);
    }
  };

  if (loading) return <Text>Loading questions...</Text>;
  if (gameOver) return <Text>Wrong answer! Streak: {streak}</Text>;

  const current = questions[index];
  const answers = shuffledAnswers[index];

  return (
    <View>
      <Text>Streak: {streak}</Text>
      <Text>{current.question}</Text>
      {answers.map((a, i) => (
        <TouchableOpacity key={i} onPress={() => handleAnswer(a)}>
          <Text>{a}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
