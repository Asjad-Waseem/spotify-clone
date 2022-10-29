import "./createSpot.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewSpot } from "../../store/spotsReducer";

function CreateSpot() {
  const dispatch = useDispatch();

  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  console.log(currentUser);

  if (!currentUser) {
    history.push("/");
  }

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpot = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    };
    dispatch(addNewSpot(newSpot));
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="number"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="number"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="input"
          placeholder="Spot Image"
          value={previewImage}
          onChange={(e) => setImage(e.target.value)}
        />
        <div>
          <button type="submit" className="submit-button">
            Create A Spot
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSpot;
