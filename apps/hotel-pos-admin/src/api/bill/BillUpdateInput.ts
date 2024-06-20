import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type BillUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  reservation?: ReservationWhereUniqueInput | null;
};
