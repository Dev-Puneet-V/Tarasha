export const BASE_URL_DATA = "https://res.cloudinary.com/dpv6poha8/raw/upload/v1695560956/data_icdvwg.json";
export const BASE_URL = "https://tarashainteriors.onrender.com"
export const API_ENDPOINT = {
    "SITE_DATA" : BASE_URL_DATA + "/site-data",
    "REGISTER": BASE_URL + "/user/users/signup",
    "LOGIN": BASE_URL + "/user/users/login",
    "SAVE_QUESTIONARE": BASE_URL + "/user/save-user-inquiry",
    "AVAILABLE_SLOTS": BASE_URL + "/calendar/get-calendar-slots",
    "PAYMENT_INFO": BASE_URL + "/user/payment-details",
    "SAVE_PAYMENT_INFO": BASE_URL + "/user/payment-success-save-details",
    "GOOGLE_SIGNIN": BASE_URL +  "/user/google-signin",
    "IMAGE_UPLOAD": BASE_URL + "/blogs/uploadImage",
    "CREATE_BLOG": BASE_URL + "/blogs/create",
    "GET_BLOG_DATA": BASE_URL + "/blogs/allBlogs",
    "TRANSACTION_HISTORY": BASE_URL + "/user/transactions"
}
export const ACTIVE_LINK_STYLE = {
    'background': 'linear-gradient(90deg, #F0C660 20.75%, #FFFFFF 79.25%)',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
};

export const GOOGLE_AUTH_CLIENT_ID='889450406403-hs3iqsnkds6k0oajrclnsva09i0jilil.apps.googleusercontent.com';


// countryCodes.js

export const countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+91', name: 'India' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'Canada' },
    { code: '+61', name: 'Australia' },
    { code: '+33', name: 'France' },
    { code: '+49', name: 'Germany' },
    { code: '+7', name: 'Russia' },
    { code: '+86', name: 'China' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
    { code: '+39', name: 'Italy' },
    { code: '+34', name: 'Spain' },
    { code: '+52', name: 'Mexico' },
    { code: '+55', name: 'Brazil' },
    { code: '+20', name: 'Egypt' },
    { code: '+27', name: 'South Africa' },
    { code: '+353', name: 'Ireland' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    // Add more country codes and names as needed
  ];
  