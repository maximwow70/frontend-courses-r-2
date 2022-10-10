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
    this.caption = `${caption} ${this._secret}`;
    this.owner = owner;
  }

  getFullName() {
    return `${this.id} ${this.name}`;
  }

  equals(hotel) {
    return this.id === hotel.id;
  }
}
