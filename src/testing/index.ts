import {Timer} from "./timer";

export const Testing = new class Testing {
  public Timer: typeof Timer;
  constructor() {
    this.Timer = Timer;
  }
}
