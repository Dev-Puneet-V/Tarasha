export const BASE_URL_DATA = "http://localhost:3000";
export const BASE_URL = "https://0f5e-2406-b400-66-d71-d45-5457-6633-8daa.ngrok-free.app"
export const API_ENDPOINT = {
    "SITE_DATA" : BASE_URL_DATA + "/site-data",
    "REGISTER": BASE_URL + "/user/users/signup",
    "LOGIN": BASE_URL + "/user/users/login",
    "SAVE_QUESTIONARE": BASE_URL + "/user/save-user-inquiry",
    "AVAILABLE_SLOTS": BASE_URL + "/calendar/get-calendar-slots",
    "PAYMENT_INFO": BASE_URL + "/user/payment-details",
    "SAVE_PAYMENT_INFO": BASE_URL + "/user/payment-success-save-details"
}
export const ACTIVE_LINK_STYLE = {
    'background': 'linear-gradient(90deg, #F0C660 20.75%, #FFFFFF 79.25%)',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
};