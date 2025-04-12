import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface AnswerProps {
  answer: string;
  onPress: () => void;
  disabled: boolean;
  isCorrect: boolean;
  isSelected: boolean;
  hasAnswered: boolean;
}

export const AnswerButton = ({
  answer,
  onPress,
  disabled,
  isCorrect,
  isSelected,
  hasAnswered,
}: AnswerProps) => {
  let baseClasses =
    "px-4 py-3 rounded-lg border-2 w-[90%] mx-auto mb-2 text-center text-base text-gray-800 dark:text-white";
  let style = "bg-gray-100 border-gray-300";

  if (hasAnswered) {
    if (isCorrect) style = "bg-green-100 border-green-500";
    else if (isSelected) style = "bg-red-100 border-red-500";
  } else if (isSelected) {
    style = "bg-blue-100 border-blue-500";
  }

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} className={`${baseClasses} ${style}`}>
      <Text>{answer}</Text>
    </TouchableOpacity>
  );
};

interface ResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const GameResult = ({ score, total, onRestart }: ResultProps) => (
  <View className="p-6 items-center">
    <Text className="text-3xl font-bold mb-4">Game Completed!</Text>
    <Text className="text-2xl mb-6">Your Score: {score}/{total}</Text>
    <TouchableOpacity onPress={onRestart} className="bg-blue-600 px-6 py-3 rounded-lg">
      <Text className="text-white text-lg">Play Again</Text>
    </TouchableOpacity>
  </View>
);

interface PlayerScoreProps {
  scores: number[];
}

export const PlayerScores = ({ scores }: PlayerScoreProps) => (
  <View className="items-center py-6">
    <Text className="text-xl mb-2">Player 1 Score: {scores[0]}</Text>
    <Text className="text-xl mb-2">Player 2 Score: {scores[1]}</Text>
    <Text className="text-xl font-semibold">
      {scores[0] > scores[1] ? "Player 1 Wins!" : scores[1] > scores[0] ? "Player 2 Wins!" : "It's a tie!"}
    </Text>
  </View>
);