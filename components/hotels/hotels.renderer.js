class HotelsComponentRender {
  rootElement;

  weatherHTMLElement;

  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render(hotels, title) {
    this.rootElement.innerHTML = "";

    this.weatherHTMLElement = document.createElement("div");
    this.weatherHTMLElement.classList.add("weather");

    this.weatherHTMLElement.appendChild(this.getWeatherTitleHTMLElement(title));

    this.weatherHTMLElement.appendChild(this.getHotelListElement(hotels));

    this.rootElement.appendChild(this.weatherHTMLElement);
  }

  getWeatherTitleHTMLElement(title) {
    const weatherTitleHTMLElement = document.createElement("h3");
    weatherTitleHTMLElement.classList.add("weather__title");
    weatherTitleHTMLElement.innerHTML = title;
    return weatherTitleHTMLElement;
  }

  getHotelListElement(hotels) {
    const hotelListHTMLElement = document.createElement("div");
    hotelListHTMLElement.classList.add("weather__hotel-list");
    hotels.forEach((hotel) => {
      hotelListHTMLElement.appendChild(this.getHotelElement(hotel));
    });
    return hotelListHTMLElement;
  }

  getHotelElement(hotel) {
    const hotelHTMLElement = document.createElement("div");
    hotelHTMLElement.classList.add("weather__hotel");
    hotelHTMLElement.innerHTML = hotel.getFullName();
    return hotelHTMLElement;
  }
}
