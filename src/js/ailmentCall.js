import $ from 'jquery';

export class AilmentCall{
  getDoctors(ailment){
    return new Promise(function(resolve, reject) {
      const key = process.env.exports.apiKey;
      let request = new XMLHttpRequest()
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&location=or-portland&skip=0&limit=10&user_key=${key}`;
      request.onload = function(){
        if (this.status === 200){
          resolve(request.response)
        } else {
          reject(Error(request.statusText))
        }
      }
      request.open("GET", url, true)
      request.send()
    })
  }
}
