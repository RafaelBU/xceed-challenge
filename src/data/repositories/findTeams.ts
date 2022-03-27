import findTeamsAdapter from "../adapters/findTeamsAdapter";
import { ApiTeamData } from "../types/apiTypes";
import { customHeaders, sleep } from "./utils";

const findTeams = async (id: number) => {
  await sleep(1500);
  const response = await fetch(
    `http://api.football-data.org/v2/competitions/${id}/teams`,
    customHeaders
  );
  const data = (await response.json()) as ApiTeamData;
  return findTeamsAdapter(data);
};

export default findTeams;
