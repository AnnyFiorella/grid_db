<!--
    Template en que se visualizará el listado de los usuarios
    registrados en la base de datos crud_usuarios
-->
<template>
    <div>
        <h3 class="center-align">Listado de usuarios</h3>
        <table class="striped centered responsive-table">
            <thead>
                <tr>
                    <th>Identificador</th>
                    <th>nombre</th>
                    <th>Apellido</th>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Teléfono</th>
                    <th>Código de área</th>
                    <th>Fecha de nacimiento</th>                    
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
               
            </tbody>
        </table>

    </div>
</template>

<script>

/**
 * importa libreria moment.js
 * para parsear y dar formato a las fechas
 */
import moment from 'moment'

    export default {
    }

</script>