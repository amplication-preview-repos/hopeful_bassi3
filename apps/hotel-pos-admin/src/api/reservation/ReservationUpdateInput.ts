import { BillUpdateManyWithoutReservationsInput } from "./BillUpdateManyWithoutReservationsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationUpdateInput = {
  bills?: BillUpdateManyWithoutReservationsInput;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
};
