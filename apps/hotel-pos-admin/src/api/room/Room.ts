import { Reservation } from "../reservation/Reservation";

export type Room = {
  createdAt: Date;
  id: string;
  price: number | null;
  reservations?: Array<Reservation>;
  roomNumber: string | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
};
