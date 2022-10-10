class HotelsComponentRender {
  rootElement;

  weatherHTMLElement;
  hotelListHTMLElement;
  newHotelElement;

  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render(hotels, title) {
    this.rootElement.innerHTML = "";

    this.weatherHTMLElement = document.createElement("div");
    this.weatherHTMLElement.classList.add("weather");

    this.weatherHTMLElement.appendChild(this.getWeatherTitleHTMLElement(title));

    this.hotelListHTMLElement = this.getHotelListElement(hotels);
    this.weatherHTMLElement.appendChild(this.hotelListHTMLElement);

    this.newHotelElement = this.createElement("input", "weather__add-hotel");
    this.weatherHTMLElement.appendChild(this.newHotelElement);

    this.rootElement.appendChild(this.weatherHTMLElement);
  }

  updateHotelList(hotels) {
    this.hotelListHTMLElement.innerHTML = "";
    hotels.forEach((hotel) => {
      this.hotelListHTMLElement.appendChild(this.getHotelElement(hotel));
    });
  }

  getWeatherTitleHTMLElement(title) {
    return this.createElement("div", "weather__title", title);
  }

  getHotelListElement(hotels) {
    const hotelListHTMLElement = this.createElement(
      "div",
      "weather__hotel-list"
    );
    hotels.forEach((hotel) => {
      hotelListHTMLElement.appendChild(this.getHotelElement(hotel));
    });
    return hotelListHTMLElement;
  }

  getHotelElement(hotel) {
    const hotelHTMLElement = this.createElement(
      "div",
      "weather__hotel",
      hotel.getFullName()
    );
    hotelHTMLElement.setAttribute("data-id", hotel.id);
    return hotelHTMLElement;
  }

  createElement(tagName, classes, html) {
    const element = document.createElement(tagName);
    element.classList.add(classes);
    if (Boolean(html)) {
      element.innerHTML = html;
    }
    return element;
  }
}
