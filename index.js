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

// #region observable
const data$ = new Observable(1);

const subscriber1 = new Subscriber(1, (value) => {
  console.log(value * 2);
});
data$.subscribe(subscriber1);

const subscriber2 = new Subscriber(2, (value) => {
  console.log(value * 4);
});
data$.subscribe(subscriber2);

data$.next(4);

window.data$ = data$;
// #endregion observable
