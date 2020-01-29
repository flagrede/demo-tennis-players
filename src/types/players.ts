export type PlayerType = {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };
};
