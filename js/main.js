//Tomamos en una costante la sentencia document para usarla sin tener que escribir la sentencia completa de nuevo
const style = document.documentElement.style;
const tamanio = () => {
    style.setProperty('--width', '80%');
}