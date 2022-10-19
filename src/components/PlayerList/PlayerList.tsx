import { GetAllPlayers_players } from "../../operations/query/__generated__/GetAllPlayers";
import Player from "../player/Player";

type Props = {
  players: GetAllPlayers_players[];
};

function PlayerList({ players }: Props) {
  let rank = 0;
  return (
    <table>
      <thead></thead>
      <tbody>
        {players.map((player) => {
          rank++;
          return <Player rank={rank} player={player} key={player.id}></Player>;
        })}
      </tbody>
    </table>
  );
}

export default PlayerList;
