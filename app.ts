let reportAcudits: any[] = [];

const requestApiJoke:any = async ()=>{

    const respuesta = await fetch('https://icanhazdadjoke.com/slack');
    const data = await respuesta.json();

    console.log(data.attachments[0].text);

    let caja: any = document.getElementById("jokeBox");
    caja.textContent = data.attachments[0].text;

    reportAcudits[reportAcudits.length] = { joke: data.attachments[0].text , result: "", date: "" };
    const d = new Date();
    let text = d.toISOString();
    reportAcudits[reportAcudits.length - 1].date = text;
    console.log(reportAcudits);
}

let boton:any = document.getElementById("next");

boton?.addEventListener('click',()=> {requestApiJoke();
                                      addBotons();
                                      rating();
                                      boton.textContent="Next joke!";
                                      rank = 0;
                                    });

let opinion:any = document.getElementById("opinion");

const addBotons:any = ()=>{ 
  opinion.innerHTML="";
  opinion.insertAdjacentHTML('beforeend',`
  <button id="positive">😁</button>
  <button id="neutral">😐</button>
  <button id="negative">😪</button>`);
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









