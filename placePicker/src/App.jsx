import {useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from "./loc.js";

const initialPickedPlaces = JSON.parse(localStorage.getItem('pickedPlaces')) || [];

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(initialPickedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const places = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(places);
    })
  }, [])

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = availablePlaces.find((place) => place.id === id);
      localStorage.setItem('pickedPlaces', JSON.stringify([place, ...prevPickedPlaces]));
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => {
          const places = prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
          localStorage.setItem('pickedPlaces', JSON.stringify(places));
          return places;
        }
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
