/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  /* global cedula */

$(document).ready(function() {
//obtenemos el valor de los input

$('#agregar').click(function() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var genero = document.getElementById("genero").value;
  var i = 1; //contador para asignar id al boton que borrara la fila
  var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + apellido + '</td><td>' + correo + '</td><td>' + telefono + '</td><td>' + genero + '</td><td> <button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

  i++;

  $('#mytable tr:first').after(fila);
    $("#agregaremos").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#agregaremos").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("genero").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value ="";
    document.getElementById("apellido").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").focus();
  });
$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#agregaremos").text("");
    var nFilas = $("#mytable tr").length;
    $("#agregaremos").append(nFilas - 1);
  });
});


