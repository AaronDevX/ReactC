import {useRef, useState, useCallback, useEffect} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {updateUserPlaces, getUserPlaces} from "./utils/requests.js";
import ErrorMessage from "./components/ErorMessage.jsx";

function App() {
  const selectedPlace = useRef();

  const [loading, setLoading] = useState(true);
  const [userPlaces, setUserPlaces] = useState([]);
  const [error, setError] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchUserPlaces() {
      try{
        setLoading(true);
        const places = await getUserPlaces()
        setUserPlaces(places);
        setLoading(false);
      }catch(error){
        setError({ message: error.message });
      }
    }
    fetchUserPlaces();
  }, [])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    try{
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    }catch(error){
      setError({ message: error.message || "Something went wrong selecting the place." });
      return;
    }

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    try{
      await updateUserPlaces([...userPlaces].filter((place) => place.id !== selectedPlace.current.id));
    }catch (error){
      setModalIsOpen(false)
      setError({ message: error.message || "Something went wrong with user places." });
      return;
    }

    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    setModalIsOpen(false);
  }, [userPlaces]);

  return (
    <>
      <Modal open={error} onClose={() => setError(null)}>
        <ErrorMessage title={"Error"} message={error ? error.message :  null} />
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {!error && (<Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
            loading={loading}
        />)}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
