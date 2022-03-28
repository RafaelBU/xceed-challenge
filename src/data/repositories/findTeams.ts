import findTeamsAdapter from "../adapters/findTeamsAdapter";
import { ApiTeamData } from "../types/apiTypes";
import { TeamData } from "../types/domainTypes";
import { customHeaders, sleep } from "./utils";

const findTeams = async (id: number): Promise<TeamData[]> => {
  await sleep(1500);
  const response = await fetch(
    `http://api.football-data.org/v2/competitions/${id}/teams`,
    customHeaders
  );
  if (response.ok) {
    const data = (await response.json()) as ApiTeamData;
    return findTeamsAdapter(data);
  }
  throw new Error();
};

export default findTeams;
