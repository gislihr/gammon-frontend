import { GetAllPlayers_players } from "../../operations/query/__generated__/GetAllPlayers";
import "./Player.css";

type Props = {
  player: GetAllPlayers_players;
  rank: number;
};

function Player({ player, rank }: Props) {
  return (
    <tr>
      <td>{rank}</td>
      <td>{player.name}</td>
      <td>{player.elo.toFixed(2)}</td>
    </tr>
  );
}

export default Player;
