class HotelsDataService {
  static apiKey = "45cdbb94c0mshcb7a755e815b533p1e674ejsn7b059bfb7178";
  static apiHost = "hotelsearch2.p.rapidapi.com";

  constructor() {}

  getHotels() {
    return fetch("https://hotelsearch2.p.rapidapi.com/?location=Georgia", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": HotelsDataService.apiKey,
        "X-RapidAPI-Host": HotelsDataService.apiHost,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const myHotels = response.suggestions[0].entities.map(Hotel.fromJSON);
        const myHotelsJSON = myHotels.map(Hotel.toJSON);
        console.log(myHotels, myHotelsJSON);
        return Promise.resolve(myHotels);
      });
  }
}
