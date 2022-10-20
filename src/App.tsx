import { useQuery } from "@apollo/client";
import PlayerList from "./components/PlayerList/PlayerList";
import { GET_ALL_PLAYERS } from "./operations/query/getAllPlayers";
import { GetAllPlayers } from "./operations/query/__generated__/GetAllPlayers";

function App() {
  const { data, loading, error } = useQuery<GetAllPlayers>(GET_ALL_PLAYERS, {
    variables: {
      limit: 30,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div>No data returned</div>;
  }

  return <PlayerList players={data.players}></PlayerList>;
}

export default App;
