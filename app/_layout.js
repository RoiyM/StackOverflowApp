import { Stack } from "expo-router";
import client from "../src/graphql/client";
import { Provider } from "urql";

const RootLayout = () => {
  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "StackOverflow" }} />
        <Stack.Screen name="[id]" options={{ title: "Question" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
