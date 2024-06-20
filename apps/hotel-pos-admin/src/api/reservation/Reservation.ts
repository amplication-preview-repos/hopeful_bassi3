import { Bill } from "../bill/Bill";
import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Reservation = {
  bills?: Array<Bill>;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  room?: Room | null;
  updatedAt: Date;
};
