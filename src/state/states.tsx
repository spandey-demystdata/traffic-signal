export type light = {
  color: string;
  time: number;
};

export type Props = {
  allStates: light[];
  initialState: boolean;
};

export const allStates: light[] = [
  {
    color: "red",
    time: 3000,
  },
  {
    color: "yellow",
    time: 1000,
  },
  {
    color: "green",
    time: 4000,
  },
];
