import UserService from './UserAPI';
import MovieService from './MovieAPI';
import CinemaService from './CinemaAPI';
import BookingService from './BookingAPI';
import AdminService from './AdminAPI';

export const userService = new UserService() ;
export const movieService = new MovieService();
export const cinemaService = new CinemaService();
export const bookingService = new BookingService();
export const adminService = new AdminService();