import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import QuestionHeader from "../src/components/QuestionHeader";
import AnswerListItem from "../src/components/AnswerListItem";
import { getQuestionQuery } from "../src/graphql/queries";
import { useQuery } from "urql";

export default function details() {
  const { id } = useSearchParams();

  const [res] = useQuery({
    query: getQuestionQuery,
    variables: { id },
  });

  if (res.fetching) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (res.error) {
    return (
      <SafeAreaView>
        <Text>An ERROR has occurred: {res.error.message} </Text>
      </SafeAreaView>
    );
  }
  const question = res.data.question.items[0];

  if (!question) {
    return (
      <SafeAreaView>
        <Text>An ERROR has occurred: Question not found!</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={question.answers}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
