import { useState, useEffect, useCallback } from "react";
import findTeamPlayers from "../../data/repositories/findTeamPlayers";
import { TeamPlayersData } from "../../data/types/domainTypes";

type Params = {
  teamPlayers: TeamPlayersData;
  isLoading: boolean;
  hasError: boolean;
};

export default function useTeamPlayers(teamId: string): Params {
  const [teamPlayers, setTeamPlayers] = useState<TeamPlayersData>(
    {} as TeamPlayersData
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchTeamPlayers = useCallback(async () => {
    try {
      const players = await findTeamPlayers(teamId);
      setTeamPlayers(players);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [teamId]);

  useEffect(() => {
    if (isLoading) {
      fetchTeamPlayers();
    }
  }, [fetchTeamPlayers, isLoading]);

  return {
    teamPlayers,
    isLoading,
    hasError,
  };
}
