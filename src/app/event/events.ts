import { Logistics } from "app/logistics/logistics";

export interface Events {
  id_event: number;
  eventName: string;
  description: string;
  eventStart: Date;
  eventEnd: Date;
  budget: number;
  poster: string;
  logistiques?: Logistics;
}
