import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  price?: number | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  roomNumber?: string | null;
  status?: string | null;
  typeField?: string | null;
};
