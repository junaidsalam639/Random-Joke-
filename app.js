document.getElementById('random').addEventListener('click', fecthData)

 async function fecthData(){
    const url =  await fetch('https://icanhazdadjoke.com/' , {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj =await  url.json();
    console.log(jokeObj.joke);

    document.getElementById('p').innerHTML = jokeObj.joke
  }

