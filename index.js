function Hotel(id, name, type, caption) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.caption = caption;
}

const hotel1 = new Hotel(0, "Hotel 3", "city", "<div>hello</div>");
const hotel2 = new Hotel(1, "Hotel 42", "other city", "<div>hello</div>");
const hotel3 = new Hotel(2, "hotel 22", "another city", "<div>hello</div>");

const hotelList = [hotel1, hotel3, new Hotel(3, undefined, "city", "")];
hotelList.push(hotel2);
console.log(hotelList);

const cityHotelNames = hotelList
  .filter((hotel) => hotel.type === "city")
  .map(function (hotel) {
    return hotel.name;
  });
console.log(cityHotelNames);

const hotel3Find = hotelList.find((hotel) => hotel.name === "Hotel 3123");
if (hotel3Find) {
  console.log(hotel3Find?.name);
}

hotelList
  .map((h) => h.name)
  .forEach((name) => {
    console.log(name);
  });

const condition = hotelList.some((hotel) => hotel.id === -2);
console.log(condition);

const newList = hotelList
  .filter((h) => Boolean(h.name))
  .sort((prevHotel, nextHotel) => {
    const prevName = parseInt(prevHotel.name.split(" ")[1]);
    const nextName = parseInt(nextHotel.name.split(" ")[1]);
    return nextName - prevName;
  });

console.log(newList);