import findTeamPlayersAdapter from "../adapters/findTeamPlayersAdapter";
import { ApiTeamPlayerData } from "../types/apiTypes";
import { TeamPlayersData } from "../types/domainTypes";
import { customHeaders, sleep } from "./utils";

const findTeamPlayers = async (id: string): Promise<TeamPlayersData> => {
  await sleep(1500);
  const response = await fetch(
    `http://api.football-data.org/v2/teams/${id}`,
    customHeaders
  );
  if (response.ok) {
    const data = (await response.json()) as ApiTeamPlayerData;
    return findTeamPlayersAdapter(data);
  }
  throw new Error();
};

export default findTeamPlayers;
