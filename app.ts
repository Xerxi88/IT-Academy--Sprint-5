const requestApiJoke:any = async ()=>{

    const respuesta = await fetch('https://icanhazdadjoke.com/slack');
    const data = await respuesta.json();

    console.log(data.attachments[0].text);

    let caja: any = document.getElementById("jokeBox");
    caja.textContent = data.attachments[0].text;
}

let boton:any = document.getElementById("next");
boton?.addEventListener('click',()=> {requestApiJoke();
                                      boton.textContent="Next joke!"});









