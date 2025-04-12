import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTriviaGame } from "@/hooks/useTriviaGame";

export default function Versus() {
  const { questions, shuffledAnswers, loading } = useTriviaGame();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (answer: string) => {
    const current = questions[index];
    if (answer === current.correct_answer) {
      const newScores = [...scores];
      newScores[currentPlayer - 1]++;
      setScores(newScores);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    } else {
      setGameOver(true);
    }
  };

  if (loading) return <Text>Loading questions...</Text>;
  if (gameOver) return (
    <View>
      <Text>Player 1 Score: {scores[0]}</Text>
      <Text>Player 2 Score: {scores[1]}</Text>
      <Text>{scores[0] > scores[1] ? "Player 1 Wins!" : scores[1] > scores[0] ? "Player 2 Wins!" : "It's a tie!"}</Text>
    </View>
  );

  const current = questions[index];
  const answers = shuffledAnswers[index];

  return (
    <View>
      <Text>Player {currentPlayer}'s turn</Text>
      <Text>{current.question}</Text>
      {answers.map((a, i) => (
        <TouchableOpacity key={i} onPress={() => handleAnswer(a)}>
          <Text>{a}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
