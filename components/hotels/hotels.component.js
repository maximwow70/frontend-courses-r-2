class HotelsComponent {
  renderer;
  hotels = [];
  title = "Default Title";

  constructor(rootElement, hotels, title) {
    this.renderer = new HotelsComponentRender(rootElement);
    this.hotels = hotels;
    this.title = title;

    this.renderer.render(this.hotels, this.title);
  }

  addHotel(hotel) {
    this.hotels = [...this.hotels, hotel];
    this.renderer.render(this.hotels, this.title);
  }

  removeHotel(hotel) {
    this.hotels = this.hotels.filter((h) => h.id !== hotel.id);
    this.renderer.render(this.hotels, this.title);
  }
}
