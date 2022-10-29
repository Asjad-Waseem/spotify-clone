function EditSpot() {
  return (
    <div className="edit-container">
      <form className="edit-form">
        Address
        {/* <input type="text" placeholder="test" value="address" />
        City
        <input type="text" placeholder="test" value="city" />
        State
        <input type="text" placeholder="test" value="state" />
        Country
        <input type="text" placeholder="test" value="country" />
        Latitude
        <input type="text" placeholder="test" value="Latitude" />
        Longitude
        <input type="text" placeholder="test" value="Longitude" />
        name
        <input type="text" placeholder="test" value="name" />
        Description
        <input type="text" placeholder="test" value="Description" />
        Price
        <input type="text" placeholder="test" value="Price" /> */}
        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditSpot;
