import { TeamData } from "../../types/domainTypes";
import { mockTeamsData } from "./mockData";

const findTeams = async () => {
  const response = await new Promise<TeamData[]>((resolve) => {
    resolve(mockTeamsData);
  });
  return response;
};

export default findTeams;
