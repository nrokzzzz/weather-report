const apikey="d9d0cd380308b7a57fdbbdacf7bef46a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function weatherReport(){
    let input = document.getElementById("input-text").value.trim();
    if(input===""){
        alert('Give the valid city name');
    }
    else{
         try {
            const response = await fetch(`${apiurl}&q=${input}&appid=${apikey}`);
            
            if (!response.ok) {
                throw new Error("City not found!");
            }

            const data = await response.json();

            document.getElementById("city").innerText = data.name;
            document.getElementById("degrees").innerText = data.main.temp + "°C";
            document.querySelector(".humidity").innerText = data.main.humidity + "%";
            document.querySelector(".wind").innerText = data.wind.speed + " km/h";
            document.querySelector(".weather").style.display="block";
            // console.log(data);
        } catch (error) {
            alert(error.message);
        }
    }

}
const button = document.querySelector(".btt");
button.addEventListener('click',weatherReport);
document.getElementById("input-text").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
   weatherReport()
    
  }
}
);

