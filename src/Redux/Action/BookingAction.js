import { bookingService } from "../../API";
import { createAction } from "./Action";
import { FETCH_MALICHCHIEU } from "./Type";

export const fetchBookingAction = (maLichChieu) => {
  return (dispatch) => {
    bookingService
      .fetchBookingAPI(maLichChieu)
      .then((rs) => {
        
        dispatch(createAction(FETCH_MALICHCHIEU, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
