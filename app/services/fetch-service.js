import Service from '@ember/service';

export default class FetchServiceService extends Service {

  get_data(options) {
    
    let headers = new Headers();
    headers.append('apikey', '6o2Nyn7zmdikn1yceXHWUm73IavpgZJk');
    headers.append('Content-Type', 'application/jsonk');

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(options.url, {
          method: 'GET',
          headers: headers,
        });

        const resp = await response.json();

        
          resolve(resp);
       
      } catch (error) {
        reject(error);
      }
    });
  }


}
