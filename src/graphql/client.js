import { Client, cacheExchange, fetchExchange } from "urql";
import { API_KEY } from "@env";

const client = new Client({
  url: "https://fohnsdorf.stepzen.net/api/stackoverflow/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Apikey ${API_KEY}`,

      "Content-Type": "application/json",
    },
  },
});

export default client;
