/*
  Barra de título dinámica - agradecimientos a José Manuel Pérez - Twitter: @jmpevzla.
  FUNCIONAMIENTO: este script cambia cada X tiempo [valores en milisegundos], el contenido de la etiqueta <title> en un documento HMTL.
*/

function ScriptTitulo () {
  setTime (() => document.title = 'Eva: la de Sistemas', 5000)
}
