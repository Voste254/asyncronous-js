
function orderpizza(waiting){
    console.log('you ordered pizza')
    setTimeout(()=>{
        const pizza='🍕';
        waiting(pizza,readyAlert)
    }, 2000)
}
function waiting(pizza,readyAlert){
    console.log(`we have just placed an order`)
    setTimeout(()=>{
        const thanks='thank you for your patience'
        console.log(`here is your order :${pizza}`)
        readyAlert(thanks)
    },2000)
}
function readyAlert(thanks){
    console.log(thanks)
}

// orderpizza(waiting, readyAlert)
// console.log(`you can do anything in the meantime`)
function getWeather(){
    return new Promise(function(resolve,reject){
       setTimeout(()=>{
         reject('sunny')
       },2000)
    })
}
function onSuccess(data){
    console.log(`Succes: ${data}`)
}
function onError(error){
    console.log(`Error: ${error}`)
}

// getWeather().then(onSuccess,onError)
function fetchWeather(){
    return new Promise(function(resolve,reject){
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(response=>response.json())
        .then(data=>reject(data.properties.periods[1].shortForecast))
    })
}
function displayWeather(weather){
    console.log(weather)
}
function errpg(err){
    console.log(`error: ${err}`)
}
// fetchWeather().then(displayWeather)
//             .catch(errpg)
async function getdata(){
    const data=await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    const result=await data.json()
    console.log(result.properties.periods[1])
}
// getdata()
const url = 'http://worldtimeapi.org/api/timezone/America/New_York'

async function getZone(){
    const response= await fetch(url)
    const data=await response.json()
    console.log(data)
}
// getZone()
 const giturl='https://api.github.com/users/voste254'
 async function getGitData(){
    const data= await fetch(giturl)
    const response = await data.json()
    console.log(response.location)
 }
 getGitData()