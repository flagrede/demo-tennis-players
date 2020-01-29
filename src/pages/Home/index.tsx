import React, { useEffect, useState } from "react";
import fetchClient from "../../utils/fetchClient";
import { PlayerType } from "../../types/players";
import PlayerCard from "../../components/PlayerCard";

function Home() {
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchClient("/headtohead.json")
      .then(data => setPlayers(data.players))
      .catch(() => setError("Failed to fetch"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex justify-center items-center mx-auto container h-screen">
      {error && <div className="text-red-500">{error}</div>}
      {isLoading
        ? "loading..."
        : players.map(player => (
            <PlayerCard player={player} className="mr-8" />
          ))}
    </div>
  );
}

export default Home;
