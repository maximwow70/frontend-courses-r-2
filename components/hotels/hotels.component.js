class HotelsComponent {
  renderer;
  hotels = [];
  title = "Default Title";

  newHotel = "";

  constructor(rootElement, hotels, title) {
    this.renderer = new HotelsComponentRender(rootElement);

    this.hotels = hotels;
    this.title = title;

    this.render();
  }

  removeHotelListener = (event) => {
    const currentId = event.target?.getAttribute("data-id");
    if (currentId !== null || currentId !== undefined) {
      this.removeHotel(currentId);
    }
  };

  render() {
    this.renderer.render(this.hotels, this.title);
    this.renderer.weatherHTMLElement.addEventListener(
      "click",
      this.removeHotelListener
    );
    this.renderer.newHotelElement.addEventListener("input", () => {
      this.newHotel = this.renderer.newHotelElement.value;
    });
    this.renderer.newHotelElement.addEventListener("keyup", (event) => {
      if (event.code === "Enter") {
        this.addHotel(
          new Hotel(this.getNewHotelId(), this.newHotel, "", this.newHotel)
        );
        this.newHotel = "";
        this.renderer.newHotelElement.value = "";
      }
    });
  }

  addHotel(hotel) {
    
    this.hotels = [...this.hotels, hotel];
    this.renderer.updateHotelList(this.hotels);
  }

  removeHotel(id) {
    this.hotels = this.hotels.filter((hotel) => hotel.id !== id);
    this.renderer.updateHotelList(this.hotels);
  }

  getNewHotelId() {
    return `${Math.floor(Math.random() * 10000000)}-${Math.floor(
      Math.random() * 10000000
    )}`;
  }

  destroy() {
    this.renderer.rootElement.remove();
    this.renderer.weatherHTMLElement.removeEventListener(
      "click",
      this.removeHotelListener
    );
  }
}
