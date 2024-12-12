import {useEffect, useState} from 'react';
import { sortPlacesByDistance } from '../loc.js'
import { request } from '../utils/requests.js';
import Places from './Places.jsx';
import ErrorMessage from "./ErorMessage.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [loading, setLoading] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const places = await request();

        navigator.geolocation.getCurrentPosition(async (position) => {
          const sortedPlaces = await sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setLoading(false);
        })

      }catch(error){
        setError({ message: error.message });
      }
    }
    fetchData();
  }, [])

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
