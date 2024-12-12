import {getAvailablePlaces} from "./requests.js";
import {sortPlacesByDistance} from "../loc.js";

const getLocation = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(async (position) => resolve(position))
})

export async function sortAvailablePlaces(){
    const places = await getAvailablePlaces();
    const position = await getLocation;

    return sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
}