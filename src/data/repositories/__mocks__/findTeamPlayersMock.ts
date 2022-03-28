import { TeamPlayersData } from "../../types/domainTypes";
import { mockTeamPlayers } from "./mockData";

const findTeamPlayersMock = async () => {
  const response = await new Promise<TeamPlayersData>((resolve) => {
    resolve(mockTeamPlayers);
  });

  return response;
};

export default findTeamPlayersMock;
