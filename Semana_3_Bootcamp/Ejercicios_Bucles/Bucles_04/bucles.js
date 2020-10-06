


//4.Escribe un programa que pida 10 valores. Al final mostrar la media de esos valores.

let suma= 0;

for(let i=0; i<10; i++){
    let num= parseInt(window.prompt("Escibe un número"));
    suma= suma + num;
}

let media=suma / 10;

console.log(media);
