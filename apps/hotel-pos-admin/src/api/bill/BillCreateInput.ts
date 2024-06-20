import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type BillCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  reservation?: ReservationWhereUniqueInput | null;
};
