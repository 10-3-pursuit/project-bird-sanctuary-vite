const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form /*onSubmit={handleSubmit}*/>
    <label htmlFor="name">First Name:</label>
    <input
      type="text"
      id="name"
      // onChange={handleTextChange}
      // value={newEvent.name}
    />

    <label htmlFor="organizer">Last Name:</label>
    <input
      type="text"
      id="organizer"
      // onChange={handleTextChange}
      // value={newEvent.organizer}
    />

    <label htmlFor="organizer">Email:</label>
    <input
      type="text"
      id="organizer"
      // onChange={handleTextChange}
      // value={newEvent.organizer}
    />

    <label htmlFor="eventImage">Zip Code:</label>
    <input
      type="text"
      id="eventImage"
      // onChange={handleTextChange}
      // value={newEvent.eventImage}
    />
    <br />
    <input type="submit" />
  </form>
    </div>
  );
};

export default Checkout;
