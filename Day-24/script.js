// day :24 Weather app

function getLocation() {
    let SearchLocation = document.getElementById('location');
    let searchbtn = document.getElementById('search');
    searchbtn.addEventListener("click", () => {
        if (SearchLocation.value != "") {
            let apikey =""; //enter your api key;
            let cityname = SearchLocation.value;
            const fetchweater = async () => {
                try {
                    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`);
                    let newdata = await data.json();

                    document.getElementById('temp').innerHTML = `<h1>${((newdata.main.temp) - 273.15).toFixed()}<sup> ℃</sup></h1>
                    <h3>${newdata.weather[0].main}</h3>`;

                    document.getElementById('humidity').innerHTML = `<img src="https://cdn-icons-png.flaticon.com/128/5664/5664979.png" alt="humidity">${(newdata.main.humidity) / 10}%<br>Humidity`
                    document.getElementById('wind').innerHTML = `<img src="https://cdn-icons-png.flaticon.com/128/11742/11742598.png" alt="wind">${((newdata.wind.speed) * 3.6).toFixed(1)}km/h<br>Wind Speed`;




                } catch (error) {
                    console.log(error);
                }
            };
            fetchweater();

        }
        else {
            alert("Enter City First");
        }


    })

}
getLocation();


