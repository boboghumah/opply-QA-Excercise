const argv = require('yargs').argv;

export class Properties {
  baseUrl: string

  static instance: Properties;

  static getProperties(): Properties {
    if (!this.instance) {
      const env = argv.env;

      let baseUrl = 'https://main--vermillion-queijadas-1f4ca3.netlify.app/';


      const defaultValues = {
        baseUrl: baseUrl,
      };

      this.instance = Object.assign(defaultValues, argv);
    }

    return this.instance;
  }

}
