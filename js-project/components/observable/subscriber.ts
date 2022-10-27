export default class Subscriber {
  id = 0;
  action;

  constructor(id: number, action: (value: any) => void) {
    this.id = id;
    this.action = action; 
  }
}
