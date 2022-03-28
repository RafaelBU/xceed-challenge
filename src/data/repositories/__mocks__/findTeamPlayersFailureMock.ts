import { TeamPlayersData } from "../../types/domainTypes";

const findTeamPlayersFailureMock = async () => {
  const response = await new Promise<TeamPlayersData>((_resolve, reject) => {
    reject("Some error");
  });

  return response;
};

export default findTeamPlayersFailureMock;
