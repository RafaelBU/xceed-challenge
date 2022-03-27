export type Player = {
  name: string;
  nationality: string;
  position: string;
  age: number;
};

export type TeamData = {
  name: string;
  id: number;
};

export type TeamPlayersData = {
  players: Player[];
  teamName: string;
};
