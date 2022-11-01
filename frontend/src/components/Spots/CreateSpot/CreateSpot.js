import React, { useState } from "react";
import "./CreateSpot.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addNewSpot } from "../../../store/spotsReducer";

const CreateSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    <div className="create-spot-container">
      <div className="create-spot-left-side-container">
        <div className="create-spot-left-side-container-text">
          Please fill out this listing form.
        </div>
      </div>
      <div className="create-spot-right-side-container">
        <button
          className="create-spot-back-to-home-button"
          onClick={() => history.push("/")}
        >
          Back to Home
        </button>
        <div className="create-spot-right-side-form-container">
          <form className="create-spot-form" onSubmit={handleSubmit}>
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="number"
              placeholder="Latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="number"
              placeholder="Longitude"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="Location Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="create-spot-form-input"
              type="input"
              placeholder="Spot Image"
              value={previewImage}
              onChange={(e) => setImage(e.target.value)}
            />
            <ul className="create-spot-errors"></ul>
            <button className="create-spot-form-button" type="submit">
              Submit Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSpot;
