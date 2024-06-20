import { Reservation } from "../reservation/Reservation";

export type Bill = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  reservation?: Reservation | null;
  updatedAt: Date;
};
