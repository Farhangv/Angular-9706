import { Laureate } from "./laureate.entity";

export interface Prize {
  year: string;
  category: string;
  overallMotivation: string;
  laureates?: (Laureate)[] | null;
}
