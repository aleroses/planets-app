import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

export const getPlanets = async (): Promise<Planet[]> => {
  console.log("Making an https request.");
  const res = await planetsApi.get<Planet[]>("/");

  return res.data;
};
