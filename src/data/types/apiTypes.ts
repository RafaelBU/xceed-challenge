type Area = {
  id: number;
  name: string;
};

type Competition = {
  area: Area;
  code: string;
  id: number;
  lastUpdated: string;
  name: string;
  plan: string;
};

type Winner = {
  crestUrl: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
};

type Season = {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
  winner: Winner;
};

type Team = {
  address: string;
  area: Area;
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  tla: string;
  venue: string;
  website: string;
};

export type ApiTeamData = {
  competition: Competition;
  count: number;
  filters?: unknown;
  season: Season;
  teams: Team[];
};
