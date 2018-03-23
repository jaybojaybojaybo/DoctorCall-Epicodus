import $ from 'jquery';

export class DoctorCall{
  getDoctors(name){
    return new Promise(function(resolve, reject) {
      const key = process.env.exports.apiKey;
      let request = new XMLHttpRequest()
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${key}`;
      request.onload = function(){
        if (this.status === 200){
          resolve(request.response)
        } else {
          reject(Error(request.statusText))
          console.log(Error.message);
        }
      }
      request.open("GET", url, true)
      request.send()
    })
  }
}
