import * as THREE from 'three';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';
// import 'three-examples/controls/OrbitControls';
import { AilmentCall } from "./js/ailmentCall.js";
import { DoctorCall } from "./js/doctorCall.js";

$(document).ready(function() {
  // threeDee();

  $("#ailment-button").click(function(){
    let ailment = $("#ailment").val()
    let newAilmentCall = new AilmentCall;
    let promise = newAilmentCall.getDoctors(ailment);
    promise.then(
      function(response) {
      let sickList = JSON.parse(response)
      console.log(sickList)
      $("#results").text("There are results")
      },
      function(error) {
      $("#results").text(`There was an error with your request : ${error.message}`)
      }
    )
  })
})
