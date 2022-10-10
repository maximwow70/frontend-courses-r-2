// #region hotels
const widgetRoot = document.querySelector(".app__weather");
const hotels = [
  new Hotel(1, "Hotel 1"),
  new Hotel(2, "Hotel 2"),
  new HotelDetailed(3, "Hotel 3", "type", "caption", new Date()),
];
const hotelWidget = new HotelsComponent(widgetRoot, hotels, "Baku Hotels");
// #endregion hotels

// #region minskHotels
const minskHotels = [new Hotel(1, "Minsk 1"), new Hotel(2, "Minsk 2")];
const minskHotelWidget = new HotelsComponent(
  document.querySelector(".app__minsk-weather"),
  minskHotels,
  "Minsk Hotels"
);
const newHotel = new Hotel(4, "Hotel 3 Minsk");
setTimeout(() => {
  minskHotelWidget.addHotel(new Hotel(new Date().getTime(), "qwe 1"));
  minskHotelWidget.addHotel(newHotel);
  setTimeout(() => {
    minskHotelWidget.removeHotel(newHotel);
  }, 2000);
}, 2000);
// #endregion minskHotels

// #region hotels
const tbilisiHotels = [new Hotel(1, "Tbilisi Hotel")];
const tbilisiHotelWidget = new HotelsComponent(
  document.querySelector(".app__tbilisi-weather"),
  tbilisiHotels,
  "Tbilisi Hotels"
);

setTimeout(() => {
  tbilisiHotelWidget.destroy();
}, 2000);
// #endregion hotels

// new Hotel(
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   new HotelOwner(0, "Maksim", new Date())
// );
