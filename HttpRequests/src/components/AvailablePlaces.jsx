import {useEffect, useState} from "react";
import Places from './Places.jsx';
import ErrorMessage from "./ErorMessage.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [loading, setLoading] = useState(true);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('http://localhost:3000/placess');
        const data = await response.json();

        if(!response.ok){
          throw new Error("Something went wrong");
        }
        setAvailablePlaces(data.places);
        setLoading(false);
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
