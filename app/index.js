import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";

import { useQuery } from "urql";
import { getQuestions } from "../src/graphql/queries";

export default function Page() {
  const [res] = useQuery({
    query: getQuestions,
    variables: { sort: "votes" },
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
  return (
    <View style={styles.container}>
      <FlatList
        data={res.data.questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
