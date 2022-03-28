import { useState, useEffect, useCallback } from "react";
import findTeams from "../../data/repositories/findTeams";
import { TeamData } from "../../data/types/domainTypes";

type Params = {
  teamList: TeamData[];
  isLoading: boolean;
  hasError: boolean;
};

export default function useTeamList(): Params {
  const [teamList, setTeamList] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchTeams = useCallback(async () => {
    try {
      const teams = await findTeams(2014);
      setTeamList(teams);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      fetchTeams();
    }
  }, [fetchTeams, isLoading]);

  return {
    teamList,
    isLoading,
    hasError,
  };
}
