class Observable {
  subscribers
}

// #region hotels
const hotelsDataService = new HotelsDataService();

hotelsDataService.getHotels().then((hotels) => {
  if (hotels) {
    const widgetRoot = document.querySelector(".app__weather");
    const hotelWidget = new HotelsComponent(
      widgetRoot,
      hotels,
      "Georgia Hotels"
    );

    // const newHotelsWidget = ???;
  } else {
    console.error("API is not working");
  }
});
// #endregion hotels
