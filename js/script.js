// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
// initialize variables
  let answer = ""
  const MIN = 15
  
// get user input
	let temperature = parseInt(document.getElementById('temperature').value)


  	// if guess is right says correct
	if (temperature >= MIN){
		answer = "HOT HOT HOT!!!"
	} 
	//if not says incorrect	
	else {
		answer = "BRRRRRR It' cold outside."
	}

  // display the results
  document.getElementById('answer').innerHTML = answer
}