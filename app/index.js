// import { useState, useLayoutEffect } from "react";
// import { useNavigation } from "expo-router";
import { StyleSheet, FlatList, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questions from "../data/questions.json";

export default function Page() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerSearchBarOptions: {
  //       onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
  //       onBlur: search,
  //     },
  //   });
  // }, [navigation, searchTerm, setSearchTerm]);
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
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
