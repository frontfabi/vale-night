class Evento {
  constructor(
    title,
    image,
    description,
    startDate,
    endDate,
    address,
    addressNumber,
    neighborhood,
    city,
    state,
    country,
    online,
    status,
    participants,
    price
  ) {
    this._createdAt = new Date();
    this._title = title;
    this._image = image;
    this._description = description;
    this._startDate = new Date(startDate);
    this._endDate = new Date(endDate);
    this._address = address;
    this._addressNumber = addressNumber;
    this._neighborhood = neighborhood;
    this._city = city;
    this._state = state;
    this._country = country;
    this._online = online;
    this._status = status;
    this._participants = participants;
    this._price = price;
  }

  get title() {
    return this._title;
  }

  get image() {
    return this._image;
  }

  get description() {
    return this._description;
  }

  get startDate() {
    let completeDate = {
      fullDate:
        this._startDate.getFullYear() +
        '-' +
        (this._startDate.getMonth() + 1) +
        '-' +
        this._startDate.getDate(),
      fullHour:
        this._startDate.getUTCHours() + ':' + this._startDate.getUTCMinutes()
    };

    return completeDate;
  }

  get endDate() {
    let completeDate = {
      fullDate:
        this._endDate.getFullYear() +
        '-' +
        (this._endDate.getMonth() + 1) +
        '-' +
        this._endDate.getDate(),
      fullHour:
        this._endDate.getUTCHours() + ':' + this._endDate.getUTCMinutes()
    };
    return completeDate;
  }

  get address() {
    return this._address;
  }

  get addressNumber() {
    return this._addressNumber;
  }

  get neighborhood() {
    return this._neighborhood;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get country() {
    return this._country;
  }

  get online() {
    return this._online;
  }

  get status() {
    return this._status;
  }

  get participants() {
    return this._participants;
  }

  get price() {
    return `R$ ${this._price.replace('.', ',')}`;
  }
}
