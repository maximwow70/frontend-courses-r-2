class HotelDetailed extends Hotel {
  constructor(id = Hotel.defaultId, name, type, caption, date) {
    super(id, name, type, caption);
    this.date = date;
  }
}
