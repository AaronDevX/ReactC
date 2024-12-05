import {useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import {sortPlacesByDistance} from "./loc.js";

const initialPickedPlaces = JSON.parse(localStorage.getItem('pickedPlaces')) || [];

function App() {
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(initialPickedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const places = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(places);
    })
  }, [])

  function handleStartRemovePlace(id) {
    setIsOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsOpen(false)
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
    setIsOpen(false)
  }

  return (
    <>
      {isOpen  && <Modal isOpen={isOpen}>
        <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
        />
      </Modal>}

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
