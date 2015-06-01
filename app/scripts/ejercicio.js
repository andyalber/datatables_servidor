   'use strict';
   $(document).ready(function() {
       $('#miTabla').DataTable({
           'processing': true,
           'serverSide': true,
           'ajax': 'http://localhost/juanda/datatables_servidor/server_processing.php',
           'columns':
           [
               { 'data': 'idClinica' },
               { 'data': 'nombre' },
               { 'data': 'razonSocial' },
               { 'data': 'cif' },
               { 'data': 'localidad' },
               { 'data': 'provincia' },
               { 'data': 'direccion' },
               { 'data': 'numClinica' },
               { 'data': 'idTarifa'},
               { 'data': 'nombreTarifa'},
               { 'data': 'idClinica',
               'render': function(data) {
                   return '<a class="btn btn-primary" href=http://localhost/php/editar.php?id_clinica=' + data + '>Editar</a><a class="btn btn-warning" href=http://localhost/php/borrar.php?id_clinica=' + data + '>Borrar</a>';
               }
           }]
       
           ,
           'language': {
               'sProcessing': 'Procesando...',
               'sLengthMenu': 'Mostrar _MENU_ registros',
               'sZeroRecords': 'No se encontraron resultados',
               'sEmptyTable': 'Ningún dato disponible en esta tabla',
               'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
               'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
               'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
               'sInfoPostFix': '',
               'sSearch': 'Buscar:',
               'sUrl': '',
               'sInfoThousands': ',',
               'sLoadingRecords': 'Cargando...',
               'oPaginate': {
                   'sFirst': 'Primero',
                   'sLast': 'Último',
                   'sNext': 'Siguiente',
                   'sPrevious': 'Anterior'
               },
               'oAria': {
                   'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
                   'sSortDescending': ': Activar para ordenar la columna de manera descendente'
               }
           }
       });
   });
