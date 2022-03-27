import { useState, useEffect, useCallback } from "react";
import findTeams from "../../data/repositories/findTeams";
import { TeamData } from "../../data/types/domainTypes";

type Params = {
  teamList: TeamData[];
  isLoading: boolean;
};

export default function useTeamList(): Params {
  const [teamList, setTeamList] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTeams = useCallback(async () => {
    try {
      const teams = await findTeams(2014);
      setTeamList(teams);
    } catch (error) {
      console.error(error);
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
  };
}
