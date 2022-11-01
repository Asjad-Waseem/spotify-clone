import React, { useState, useEffect } from "react";
import "./ManageSpots.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EditListingFormModal from "../../Modals/EditListingFormModal";

import { deleteMySpot } from "../../../store/spotsReducer";
import { loadMySpots } from "../../../store/spotsReducer";

const ManageSpots = () => {
  const [editListingModal, setEditListingModal] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const mySpots = useSelector((state) => state.spotsState);

  const [selectedEditSpot, setSelectedEditModal] = useState();

  const editListingOnClick = (spotId) => {
    setEditListingModal((editListingModal) => !editListingModal);
    const selectedEditSpotObj = mySpots.filter((spot) => spot.id === spotId);
    setSelectedEditModal(selectedEditSpotObj);
  };

  const deleteListingOnClick = (spotId) => {
    dispatch(deleteMySpot(spotId));
    window.location.reload();
  };

  const initialAddressValue = selectedEditSpot && selectedEditSpot[0]?.address;
  const initialCityValue = selectedEditSpot && selectedEditSpot[0]?.city;
  const initialStateValue = selectedEditSpot && selectedEditSpot[0]?.state;
  const initialCountryValue = selectedEditSpot && selectedEditSpot[0]?.country;
  const initialLatValue = selectedEditSpot && selectedEditSpot[0]?.lat;
  const initialLngValue = selectedEditSpot && selectedEditSpot[0]?.lng;
  const initialNameValue = selectedEditSpot && selectedEditSpot[0]?.name;
  const initialDescriptionValue =
    selectedEditSpot && selectedEditSpot[0]?.description;
  const initialPriceValue = selectedEditSpot && selectedEditSpot[0]?.price;
  const initialPreviewImageValue =
    selectedEditSpot && selectedEditSpot[0]?.previewImage;

  useEffect(() => {
    dispatch(loadMySpots());
  }, [dispatch]);

  return (
    <div
      className="account-details"
      onClick={editListingModal === true ? editListingOnClick : null}
    >
      <div>
        <section className="account-details-sidebar">
          <header className="account-details-header">
            <h1 className="account-sidebar-header">Account</h1>
            <p className="account-sidebar-sub-header">
              <strong className="account-sidebar-sub-header">
                {sessionUser.username},
              </strong>
              {" " + sessionUser.email}
            </p>
          </header>
          <div className="account-detail-links">
            <Link
              className="account-detail-link-active active"
              to="/account-details/spots"
            >
              Your Listings
            </Link>
          </div>
        </section>
      </div>
      <div className="account-details-divider" />
      <section className="account-details-content-container">
        {mySpots?.length > 0 &&
          mySpots.map((spot, id) => (
            <div key={id}>
              <ul>
                <div className="user-spots-item">
                  <div className="user-spots-item-img-container">
                    <img
                      className="user-spots-item-img"
                      src={
                        spot.previewImage
                          ? spot.previewImage
                          : "https://mccoymart.com/post/wp-content/uploads/2020/03/Home-Design-and-Plans-According-to-Vastu-Shastra.jpg"
                      }
                      alt="preview-img-alt"
                    />
                  </div>
                  <div className="user-spots-details">
                    <div className="user-spot-address-container">
                      <div className="user-spot-name">{spot.name}</div>
                      <div className="user-spot-address">{spot.address},</div>
                      <div className="user-spot-address">{spot.city},</div>
                      <div className="user-spot-address">{spot.state},</div>
                      <div className="user-spot-address">{spot.country}</div>
                    </div>
                    <div className="user-spot-detail-check-date created-at">
                      <div className="user-spot-check-bold">Created At</div>
                      <div className="user-spot-check-light">
                        {spot.createdAt.slice(0, 10)}
                      </div>
                    </div>
                    <div className="user-spot-detail-check-date">
                      <div className="user-spot-check-bold">Updated At</div>
                      <div className="user-spot-check-light">
                        {spot.updatedAt.slice(0, 10)}
                      </div>
                    </div>
                    <div className="user-spot-edit-container">
                      <button
                        className="booking-edit-container-button"
                        onClick={() => editListingOnClick(spot.id)}
                      >
                        <Link
                          className="booking-button fa-solid fa-pen-to-square fa-2x"
                          to="/account-details/spots"
                        />
                      </button>
                      <button
                        className="spot-edit-container-button"
                        onClick={() => deleteListingOnClick(spot.id)}
                      >
                        <Link
                          className="spot-button fa-solid fa-trash fa-2x"
                          to="/account-details/spots"
                        />
                      </button>
                    </div>
                  </div>
                  <EditListingFormModal
                    showModal={editListingModal}
                    setShowModal={() => editListingModal}
                    addressInitialValue={initialAddressValue}
                    cityInitialValue={initialCityValue}
                    stateInitialValue={initialStateValue}
                    countryInitialValue={initialCountryValue}
                    latInitialValue={initialLatValue}
                    lngInitialValue={initialLngValue}
                    nameInitialValue={initialNameValue}
                    descriptionInitialValue={initialDescriptionValue}
                    priceInitialValue={initialPriceValue}
                    previewImageInitialValue={initialPreviewImageValue}
                    id={spot.id}
                  />
                </div>
              </ul>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ManageSpots;
