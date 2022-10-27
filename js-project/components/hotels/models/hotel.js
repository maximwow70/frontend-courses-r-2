class Hotel {
  static defaultId = 0;

  id;
  name;
  type;
  caption;
  owner;

  _secret = "000";

  get secret() {
    console.log("I'm getting the secret");
    return this._secret;
  }

  set secret(secret) {
    this._secret = secret === 4 ? secret * 2 : secret;
  }

  constructor(id = Hotel.defaultId, name, type, caption, owner) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.caption = caption;
    this.owner = owner;
  }

  static fromJSON(json) {
    return new Hotel(
      `${json.destinationId}-${json.geoId}`,
      json.name,
      json.type,
      json.caption
    );
  }

  static toJSON(hotel) {
    return {
      destinationId: hotel.id.split("-")[0],
      geoId: hotel.id.split("-")[1],
      name: hotel.name,
      type: hotel.type,
      caption: hotel.caption,
    };
  }

  equals(hotel) {
    return this.id === hotel.id;
  }
}
