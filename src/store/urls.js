const hostname = 'http://165.227.43.65:5000';
// const hostname = 'http://zatiq-server-1.wepspuhami.ca-central-1.elasticbeanstalk.com';

export const uploadImageUrl = `${hostname}/image/business`;
export const userLoginUrl = `${hostname}/user/login`;
export const userProfileUrl = `${hostname}/user/profile`;
export const userAddReviewUrl = `${hostname}/user/review/add`;
export const userReviewsUrl = `${hostname}/user/reviews/all`;

export const closestRestaurantsUrl = `${hostname}/restaurants/nearby`;
export const userFindRestaurantByNameUrl = `${hostname}/find/restaurant/name`;
export const foodGridUrl = `${hostname}/food/grid`;
export const foodGridSearchNameUrl = `${hostname}/food/grid/name`; // api_token, text

export const dealsUrl = `${hostname}/deals`;

// restaurant screen endpoints
export const businessMenusUrl = `${hostname}/user/menu/all`;
export const businessInteriorUrl = `${hostname}/user/interior/all`;

export const searchCuisineUrl = `${hostname}/search/:cuisine`;
export const guestCuisineUrl = `${hostname}/guest/:cuisine`;
export const userPreferencesUrl = `${hostname}/user/preferences`;
export const businessesListUrl =  `${hostname}/businesses/list`;

export const businessLoginUrl =  `${hostname}/business/login`;
export const businessRegisterUrl =  `${hostname}/business/register`;

export const businessProfileUrl =  `${hostname}/business/profile`;
export const businessEditProfileUrl =  `${hostname}/business/profile/edit`;
export const businessReviewsUrl =  `${hostname}/business/reviews/all`;

export const businessAddMenuPictureUrl =  `${hostname}/restaurant/menu/add`;
export const businessDeleteMenuPictureUrl =  `${hostname}/restaurant/menu/delete`;
export const businessMenuPicturesUrl =  `${hostname}/restaurant/menu/all`;

export const businessAddRestaurantPictureUrl =  `${hostname}/restaurant/interior/add`;
export const businessDeleteRestaurantPictureUrl =  `${hostname}/restaurant/interior/delete`;
export const businessRestaurantPicturesUrl =  `${hostname}/restaurant/interior/all`;

export const businessFoodItemsUrl = `${hostname}/food/restaurantid`; // need api_token and user_type
export const businessAddFoodItemUrl = `${hostname}/business/add/food`;
export const businessEditFoodItemUrl = `${hostname}/business/edit/food`;
export const businessDeleteFoodItemUrl = `${hostname}/business/delete/food`;

export const businessFoodItemUrl = `${hostname}/food/id`;
