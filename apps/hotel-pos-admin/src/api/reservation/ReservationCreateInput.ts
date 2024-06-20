import { BillCreateNestedManyWithoutReservationsInput } from "./BillCreateNestedManyWithoutReservationsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationCreateInput = {
  bills?: BillCreateNestedManyWithoutReservationsInput;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
};
