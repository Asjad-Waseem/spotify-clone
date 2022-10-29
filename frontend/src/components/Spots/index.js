import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadSpots } from "../../store/spotsReducer";
import { NavLink, Link } from "react-router-dom";
import * as action from "../../store/spotsReducer";
const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spotsState);

  useEffect(() => {
    dispatch(loadSpots());
  }, []);

  return (
    <div className="">
      <ul className="spots-preview">
        {Object.keys(spots).map((spotId) => {
          return (
            <NavLink
              to={`/spots-details/${spotId}`}
              className="spot-preview"
              key={spotId}
            >
              <div className="spot-display">
                <img
                  className="spot-img"
                  src={spots[spotId].previewImage}
                  alt={spots[spotId].name}
                />
                <div>
                  <div>
                    <strong>
                      <p className="spot-location">{`${spots[spotId].city}, ${spots[spotId].state}`}</p>
                    </strong>
                    {spots[spotId].name && (
                      <p className="spot-name">{spots[spotId].name}</p>
                    )}
                  </div>
                  <div className="spot-price">
                    <strong>{`$${spots[spotId].price}`}</strong>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Spots;
