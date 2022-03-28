import moment from "moment";
import { ApiTeamPlayerData } from "../types/apiTypes";
import { TeamPlayersData } from "../types/domainTypes";

const findTeamPlayersAdapter = (data: ApiTeamPlayerData): TeamPlayersData => {
  const { name: teamName, squad } = data;

  const parserData = <T, K>({
    value,
    defaultValue,
    finalValue,
  }: {
    value: T;
    defaultValue: K;
    finalValue: K;
  }): K => (value !== null ? finalValue : defaultValue);

  const players = squad?.map(
    ({ name, dateOfBirth, nationality, position }) => ({
      name: parserData({ value: name, finalValue: name, defaultValue: "-" }),
      nationality: parserData({
        value: nationality,
        finalValue: nationality,
        defaultValue: "-",
      }),
      position: parserData({
        value: position,
        finalValue: position,
        defaultValue: "-",
      }),
      age: parserData({
        value: dateOfBirth,
        finalValue: moment().diff(dateOfBirth, "years"),
        defaultValue: 0,
      }),
    })
  );

  return {
    players,
    teamName,
  };
};

export default findTeamPlayersAdapter;
