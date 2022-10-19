import { gql } from "@apollo/client";

export const GET_ALL_PLAYERS = gql`
  query GetAllPlayers {
    players(request: {}) {
      id
      name
      elo
    }
  }
`;
