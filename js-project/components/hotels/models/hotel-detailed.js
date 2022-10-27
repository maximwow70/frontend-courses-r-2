class HotelDetailed extends Hotel {
  constructor(id = Hotel.defaultId, name, type, caption, owner, date) {
    super(id, name, type, caption, owner);
    this.date = date;
  }
}
