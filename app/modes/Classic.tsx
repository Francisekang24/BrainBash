import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTriviaGame } from "@/hooks/useTriviaGame";

export default function Classic() {
  const { questions, shuffledAnswers, loading } = useTriviaGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setHasAnswered(false);
      } else {
        const newScore = questions.reduce((score, question, index) =>
          updatedAnswers[index] === question.correct_answer ? score + 1 : score, 0);
        setScore(newScore);
        setGameCompleted(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setGameCompleted(false);
    setScore(0);
    setHasAnswered(false);
  };

  if (loading) return <Text>Loading questions...</Text>;
  if (gameCompleted) return (
    <View>
      <Text>Game Completed!</Text>
      <Text>Score: {score}/{questions.length}</Text>
      <TouchableOpacity onPress={restartGame}>
        <Text>Play Again</Text>
      </TouchableOpacity>
    </View>
  );

  const current = questions[currentQuestionIndex];
  const answers = shuffledAnswers[currentQuestionIndex];
  const userAnswer = selectedAnswers[currentQuestionIndex];

  return (
    <View>
      <Text>{current.question}</Text>
      {answers.map((a, idx) => (
        <TouchableOpacity key={idx} onPress={() => handleAnswerSelect(a)}>
          <Text>{a}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
