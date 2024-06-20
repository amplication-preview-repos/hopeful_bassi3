import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  reservations?: ReservationListRelationFilter;
  roomNumber?: StringNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
