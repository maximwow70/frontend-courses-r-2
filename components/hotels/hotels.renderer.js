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
    return this.createElement("div", "weather__hotel", hotel.getFullName());
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
