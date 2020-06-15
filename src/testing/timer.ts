export class Timer {
  public stop: (options: {
    module?: string;
    message?: string;
  }) => string;
  constructor() {
    let start = Date.now();

    this.stop = (options: {
      module?: string;
      message?: string;
    }): string => {
      let finish = Date.now();
      let diff = finish - start;
      let seconds = diff / 1000;

      let text = options.message ? options.message : "?";

      return `${options.module ? options.module : "Unknown"}: ${seconds} seconds to ` + text;
    }
  }
}
