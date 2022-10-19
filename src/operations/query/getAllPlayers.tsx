import { gql } from "@apollo/client";

export const GET_ALL_PLAYERS = gql`
  query GetAllPlayers($limit: Int, $offset: Int) {
    players(request: { limit: $limit, offset: $offset }) {
      id
      name
      elo
    }
  }
`;
