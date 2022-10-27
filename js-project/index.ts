import { Observable } from "./components/observable/observable";
import Subscriber from "./components/observable/subscriber";

// // #region hotels
// const hotelsDataService = new HotelsDataService();
// hotelsDataService.getHotels().then((hotels) => {
//   if (hotels) {
//     const widgetRoot = document.querySelector(".app__weather");
//     const hotelWidget = new HotelsComponent(
//       widgetRoot,
//       hotels,
//       "Georgia Hotels"
//     );

//     // const newHotelsWidget = ???;
//   } else {
//     console.error("API is not working");
//   }
// });
// // #endregion hotels

// #region observable
const data$ = new Observable(1);

const subscriber1 = new Subscriber(1, (value: any) => {
  console.log(value * 2);
});
data$.subscribe(subscriber1);

const subscriber2 = new Subscriber(2, (value: any) => {
  console.log(value * 4);
});
data$.subscribe(subscriber2);

data$.next(4);

// only for debugging
(window as any).data$ = data$;
// #endregion observable

interface MyHotel {
  id: number;
  name: string;
}

const hotel1: MyHotel = {
  id: 123,
  name: "123"
};