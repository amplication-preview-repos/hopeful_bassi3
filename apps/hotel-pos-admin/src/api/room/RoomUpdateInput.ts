import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  price?: number | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  roomNumber?: string | null;
  status?: string | null;
  typeField?: string | null;
};
