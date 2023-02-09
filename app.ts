let reportAcudits: any[] = [];

const getAPITemperature:any =async()=>{
  const respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=36186b9d10d0073dd0551fb3d0367789');
  const temperatura = await respuesta.json();

    let temp: any = document.getElementById("temperature");
    let numTemp: any = document.getElementById("numTemperature");
    let icono:any = temperatura.weather[0].icon;
    let num:any = (temperatura.main.temp)-273.15;// Conversión de grados Kelvin a Celsius
    temp.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;
    numTemp.textContent = num.toFixed(1)+'ºC';

}
getAPITemperature();

const randomJoke= () => {
  randomBackground();
  Math.random() > 0.5 ? requestApiJoke() : requestApiJokeChuck();
}

const randomBackground = () =>{
  
  const arrayBackgrounds = ["url('/img/cian.svg')","url('/img/yellow.svg')","url('/img/blue.svg')","url('/img/red.svg')","url('/img/purple.svg')",]

  let change: any = document.querySelector(".container");
  let title: any = document.querySelector("#title");
  let randomNumber: number = Math.floor(Math.random()*5);
  change.style.backgroundImage = arrayBackgrounds[randomNumber];
  change.style.backgroundRepeat = "no-repeat";
  change.style.backgroundSize = "cover";
  change.style.backgroundPositionX = "center";
  change.style.backgroundPositionY = "center";
  change.style.backgroundOrigin = "border-box";
  title.style.color="white";
}


const requestApiJoke:any = async ()=>{

    const respuesta = await fetch('https://icanhazdadjoke.com/slack');
    const data = await respuesta.json();

    console.log(data.attachments[0].text);

    let caja: any = document.getElementById("jokeBox");
    caja.textContent = data.attachments[0].text;

    reportAcudits[reportAcudits.length] = { joke: data.attachments[0].text , result: "", date: "" };
    const d = new Date();
    let text = d.toISOString();
    reportAcudits[reportAcudits.length-1].date = text;
    console.log(reportAcudits);
}

const requestApiJokeChuck:any = async ()=>{

  const respuesta = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await respuesta.json();

  console.log(data.value);

  let caja: any = document.getElementById("jokeBox");
  caja.textContent = data.value;

  reportAcudits[reportAcudits.length] = { joke: data.value , result: "", date: "" };
  const d = new Date();
  let text = d.toISOString();
  reportAcudits[reportAcudits.length-1].date = text;
  console.log(reportAcudits);
}

let boton:any = document.getElementById("next");

boton?.addEventListener('click',()=> {randomJoke();
                                      addBotons();
                                      rating();
                                      boton.textContent="Next joke!";
                                      });

let opinion:any = document.getElementById("opinion");

const addBotons:any = ()=>{ 
  opinion.innerHTML="";
  opinion.insertAdjacentHTML('beforeend',`
  <button class="faces">😁</button>
  <button class="faces">😐</button>
  <button class="faces">😪</button>`);
}

let rank:number;

const rating:any = ()=>{
  let botonPositive:any = document.getElementById("positive");
  botonPositive?.addEventListener('click',()=> {rank = 3;
                                                reportAcudits[reportAcudits.length - 1].result = rank;});

  let botonNeutral:any = document.getElementById("neutral");
  botonNeutral?.addEventListener('click',()=> {rank = 2;
                                               reportAcudits[reportAcudits.length - 1].result = rank;});

  let botonNegative:any = document.getElementById("negative");
  botonNegative?.addEventListener('click',()=> {rank = 1;
                                                reportAcudits[reportAcudits.length - 1].result = rank;});
}









