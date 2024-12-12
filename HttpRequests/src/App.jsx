import {useRef, useState, useCallback, useEffect} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {updateUserPlaces, getUserPlaces} from "./utils/requests.js";
import {useFetchPlaces} from "./hooks/useFetch.js";
import ErrorMessage from "./components/ErorMessage.jsx";

function App() {
  const selectedPlace = useRef();
  const {loading,
        placesArr:userPlaces,
        error: errorFetchPlaces,
        modifyPlaces: setUserPlaces} = useFetchPlaces(getUserPlaces, []);
  const [globalError, setGlobalError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setGlobalError(errorFetchPlaces);
  }, [errorFetchPlaces])

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
      setGlobalError({ message: "Something went wrong selecting the place." });
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
      setGlobalError({ message: "Something went wrong removing the place." });
      return;
    }

    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    setModalIsOpen(false);
  }, [userPlaces, setUserPlaces]);


  return (
    <>
      <Modal open={(globalError && !errorFetchPlaces) } onClose={() => setGlobalError(null)}>
        <ErrorMessage title={"Error"} message={globalError ? globalError.message :  null} />
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
        {errorFetchPlaces && <ErrorMessage title={"Error"} message={errorFetchPlaces.message} />}
        {!errorFetchPlaces && (<Places
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
