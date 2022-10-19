/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPlayers
// ====================================================

export interface GetAllPlayers_players {
  __typename: "Player";
  id: string;
  name: string;
  elo: number;
}

export interface GetAllPlayers {
  players: GetAllPlayers_players[];
}
