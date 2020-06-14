import {Exception, KExceptionInfo} from "@kenift/exception";

export class Timer {
  public stop: (options: {
    module?: string;
    message?: string;
  }) => KExceptionInfo;
  constructor() {
    let start = Date.now();

    this.stop = (options: {
      module?: string;
      message?: string;
    }): KExceptionInfo => {
      let finish = Date.now();
      let diff = finish - start;
      let seconds = diff / 1000;

      let text = options.message ? options.message : "?";

      return Exception.info(
        options.module ? options.module : "Unknown",
        seconds + " seconds to " + text
      )
    }
  }
}
