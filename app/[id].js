import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import questions from "../data/questions.json";
import QuestionHeader from "../src/components/QuestionHeader";

export default function details() {
  const { id } = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);
  if (!question) {
    return <text>Question Not Found!</text>;
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <QuestionHeader question={question} />
    </View>
  );
}

const styles = StyleSheet.create({});
