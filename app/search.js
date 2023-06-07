import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState, useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { useQuery } from "urql";
import { searchQuery } from "../src/graphql/queries";
import QuestionListItem from "../src/components/QuestionListItem";

const search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [res, fetch] = useQuery({
    query: searchQuery,
    pause: true,
    variables: { term: searchTerm },
  });

  const navigation = useNavigation();

  const search = () => {
    fetch();
    console.log("search: ", searchTerm);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
        onBlur: search,
      },
    });
  }, [navigation, searchTerm, setSearchTerm]);

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

  if (!res.data) {
    return (
      <SafeAreaView>
        <Text>An ERROR has occurred!</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={res.data.search.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
};

export default search;
