import findTeamPlayersAdapter from "../adapters/findTeamPlayersAdapter";
import { ApiTeamPlayerData } from "../types/apiTypes";
import { customHeaders, sleep } from "./utils";

const findTeamPlayers = async (id: string) => {
  await sleep(1500);
  const response = await fetch(
    `http://api.football-data.org/v2/teams/${id}`,
    customHeaders
  );
  const data = (await response.json()) as ApiTeamPlayerData;
  return findTeamPlayersAdapter(data);
};

export default findTeamPlayers;
