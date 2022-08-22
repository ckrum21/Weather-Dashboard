var search = document.querySelector(".searchContainer");
var main = document.querySelector(".mainContianer");
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var huminity= document.querySelector(".huminity");
var uv = document.querySelector(".uv");
var forecast = document.querySelector(".fiveDay");

var apiKey="https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

var APIurl="https://api.openweathermap.org/data";

