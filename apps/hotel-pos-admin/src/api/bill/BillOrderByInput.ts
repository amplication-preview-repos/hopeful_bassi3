import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  reservationId?: SortOrder;
  updatedAt?: SortOrder;
};
