import { ApiTeamData } from "../types/apiTypes";
import { TeamData } from "../types/domainTypes";

const findTeamsAdapter = (data: ApiTeamData): TeamData[] => {
  const { teams } = data;
  return teams.map(({ name, id }) => ({
    name,
    id,
  }));
};

export default findTeamsAdapter;
