import moment from "moment";
import { ApiTeamPlayerData } from "../types/apiTypes";
import { TeamPlayersData } from "../types/domainTypes";

const findTeamPlayersAdapter = (data: ApiTeamPlayerData): TeamPlayersData => {
  const { name: teamName, squad } = data;

  const players = squad.map(({ name, dateOfBirth, nationality, position }) => ({
    name,
    nationality,
    position,
    age: moment().diff(dateOfBirth, "years"),
  }));

  return {
    players,
    teamName,
  };
};

export default findTeamPlayersAdapter;
