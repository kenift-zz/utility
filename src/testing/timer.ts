import {Exception} from "@kenift/exception";

export class Timer {
  public stop: (options: Kenift.Utility.TestingTimerStopOptions) => void;
  constructor() {
    let start = Date.now();

    this.stop = (options: Kenift.Utility.TestingTimerStopOptions) => {
      let finish = Date.now();
      let diff = finish - start;
      let seconds = diff / 1000;

      let text = options.message ? options.message : "?";

      Exception.info(
        options.module ? options.module : "Unknown",
        seconds + " seconds to " + text
      )
    }
  }
}
