import { sortAvailablePlaces } from '../utils/sortAvailablePlaces.js';
import {useFetchPlaces} from "../hooks/useFetch.js";
import Places from './Places.jsx';
import ErrorMessage from "./ErorMessage.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    loading,
    placesArr: availablePlaces,
    error } = useFetchPlaces(sortAvailablePlaces, []);

  if(error){
    return (<ErrorMessage title={"Error"} message={error.message} />)
  }

  return (
    <Places
      title="Available Places"
      loading={loading}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
