//Tomamos en una costante la sentencia document para usarla sin tener que escribir la sentencia completa de nuevo
const style = document.documentElement.style;

/* Cambia el width al presionar un boton
const tamanio = () => {
    style.setProperty('--width', '80%');
}
*/
const handChangeWidth1 = () => {
    value = document.getElementById('selectWidth1').value;
    style.setProperty('--width1', value);
    console.log(value);
}
const handChangeWidth2 = () => {
    value = document.getElementById('selectWidth2').value;
    style.setProperty('--width2', value);
    console.log(value);
}
const handChangeWidth3 = () => {
    value = document.getElementById('selectWidth3').value;
    style.setProperty('--width3', value);
    console.log(value);
}
const handChangeWidth4 = () => {
    value = document.getElementById('selectWidth4').value;
    style.setProperty('--width4', value);
    console.log(value);
}
const handChangeWidth5 = () => {
    value = document.getElementById('selectWidth5').value;
    style.setProperty('--width5', value);
    console.log(value);
}
const handChangeWidth6 = () => {
    value = document.getElementById('selectWidth6').value;
    style.setProperty('--width6', value);
    console.log(value);
}
const handChangeWidth7 = () => {
    value = document.getElementById('selectWidth7').value;
    style.setProperty('--width7', value);
    console.log(value);
}