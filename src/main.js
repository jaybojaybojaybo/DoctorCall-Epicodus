// import * as THREE from 'three';
// import 'three-examples/controls/OrbitControls';
import $ from 'jquery';
import './styles.css';
import { AilmentCall } from "./js/ailmentCall.js";
import { DoctorCall } from "./js/doctorCall.js";

$(document).ready(function() {
  // threeDee();

  $("#ailment-button").click(function(event){
    event.preventDefault();
    let ailment = $("#ailment").val();
    $("#ailment").val("");
    $("#results").empty()
    $("#showErrors").empty()
    let newAilmentCall = new AilmentCall;
    let promise = newAilmentCall.getDoctors(ailment);
    promise.then(
      function(response){
      let sickList = JSON.parse(response)
      if(Object.keys(sickList.data).length < 1) {
        $("#results").append("<li> No results. Change your search and try again. </li>")
      } else {
        for(let i = 0; i < Object.keys(sickList.data).length ; i++) {
          $("#results").append(
            "<div class='w3-container doctorResult w3-row' id='" + i + "'>" +
            "<div class='w3-half photo'>" +
            "<span>" +
            "<img src='" + sickList.data[i].profile.image_url + "'>" +
            "</span>" +
            "</div>" +
            "<div class='w3-half info'>" +
            "<li>" +
            sickList.data[i].profile.first_name + " " +
            sickList.data[i].profile.last_name + " " +
            sickList.data[i].profile.title +
            "</li>" +
            "<li>" +
            sickList.data[i].practices[0].visit_address.street +
            "</li>" +
            "<li>" +
            sickList.data[i].practices[0].visit_address.city + "," +
            sickList.data[i].practices[0].visit_address.state + " " +
            sickList.data[i].practices[0].visit_address.zip +
            "</li>" +
            "<li>" +
            sickList.data[i].practices[0].phones[0].number +
            "</li>" +
            "<li>Accepts New Patients: " +
            sickList.data[i].practices[0].accepts_new_patients +
            "</li>" +
            "</div>" +
            "</div>" +
            "<br>"
          )
        }
      }
    },
    function(error) {
      $("#showErrors").text(`No results found. Error Message: ${error.message}`)
      }
    )
  })

  $("#doctor-button").click(function(event){
    event.preventDefault();
    let name = $("#doctor").val();
    $("#doctor").val("");
    $("#results").empty()
    $("#showErrors").empty()
    let newDoctorCall = new DoctorCall;
    let promise = newDoctorCall.getDoctors(name);
    promise.then(
      function(response) {
      let doctorList = JSON.parse(response)
      if(Object.keys(doctorList.data).length < 1) {
        $("#results").append("<li> No results. Change your search and try again. </li>")
      } else {
        for(let i = 0; i < Object.keys(doctorList.data).length ; i++) {
          $("#results").append(
            "<div class='w3-container doctorResult w3-row' id='" + i + "'>" +
            "<div class='w3-half photo'>" +
            "<span>" +
            "<img src='" + doctorList.data[i].profile.image_url + "'>" +
            "</span>" +
            "</div>" +
            "<div class='w3-half info'>" +
            "<li>" +
            doctorList.data[i].profile.first_name + " " +
            doctorList.data[i].profile.last_name + " " +
            doctorList.data[i].profile.title +
            "</li>" +
            "<li>" +
            doctorList.data[i].practices[0].visit_address.street +
            "</li>" +
            "<li>" +
            doctorList.data[i].practices[0].visit_address.city + "," +
            doctorList.data[i].practices[0].visit_address.state + " " +
            doctorList.data[i].practices[0].visit_address.zip +
            "</li>" +
            "<li>" +
            doctorList.data[i].practices[0].phones[0].number +
            "</li>" +
            "<li>Accepts New Patients: " +
            doctorList.data[i].practices[0].accepts_new_patients +
            "</li>" +
            "</div>" +
            "</div>" +
            "<br>"
          )}
        }
      },
      function(error) {
        $("#showErrors").append(`There was an error processing your request: ${error.message}`)
      }
    )
  })

})
