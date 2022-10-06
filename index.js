const hotels = [
  new Hotel(1, "Hotel 1"),
  new Hotel(2, "Hotel 2"),
  new HotelDetailed(3, "Hotel 3", "type", "caption", new Date()),
];

const minskHotels = [new Hotel(1, "Minsk 1"), new Hotel(2, "Minsk 2")];

const widgetRoot = document.querySelector(".app__weather");

const hotelWidget = new HotelsComponent(widgetRoot, hotels, "Baku Hotels");

const minskHotelWidget = new HotelsComponent(
  document.querySelector(".app__minsk-weather"),
  minskHotels,
  "Minsk Hotels"
);
const newHotel = new Hotel(4, "Hotel 3 Minsk");
setTimeout(() => {
  minskHotelWidget.addHotel(newHotel);
  setTimeout(() => {
    minskHotelWidget.removeHotel(newHotel);
  }, 2000);
}, 2000);

window.minskHotelWidget = minskHotelWidget;
console.log(minskHotelWidget);
