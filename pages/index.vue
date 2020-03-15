<template>
  <div class="container">
    <div>
      <b-container fluid="md">
        <center>
          <h1>Creación de usuarios</h1>
        </center>
        <br />
        <!-- Formulario con los parametros indicados -->
        <b-form action="javascript:void(0)" @submit="crearUsuario()" @reset="onReset">
          <!-- Opciones dentro del formulario -->

          <!-- b-form-select para los Tipos de ID de usuarios -->
          <b-form-group label=" Tipo de identificación:" label-for="tipoId">
            <b-form-select
              class="form-control"
              v-model="usuario.tipoId"
              :options="tipoId"
              id="tipoId"
              
            />
          </b-form-group>

          <b-form-group label="Identificación:" label-for="id">
            <b-form-input
              class="form-control"
              type="number"
              v-model="usuario.id"
              placeholder="Ingrese ID del Usuario"
              id="id"
            />
          </b-form-group>

          <b-form-group label=" Nombre:" label-for="nombre">
            <b-form-input
              class="form-control"
              type="text"
              v-model="usuario.nombre"
              placeholder=" Ingrese nombre(s) del usuario"
              id="nombre"
            />
          </b-form-group>

          <b-form-group label=" Apellido:" label-for="apellido">
            <b-form-input
              class="form-control"
              type="text"
              v-model="usuario.apellido"
              placeholder=" Ingrese apellido(s) del usuario"
              id="apellido"
            />
          </b-form-group>

          <b-form-group label=" Correo electrónico:" label-for="correo">
            <b-form-input
              class="form-control"
              type="email"
              v-model="usuario.correo"
              placeholder="Ingrese email del usuario"
              id="correo"
            />

            <b-form-group label="Peso:" label-for="peso">
              <b-form-input
                class="form-control"
                type="number"
                v-model="usuario.peso"
                placeholder="Ingrese peso(Kg) del Usuario"
                id="peso"
              />
            </b-form-group>

            <b-form-group label="Estatura:" label-for="estatura">
              <b-form-input
                class="form-control"
                type="number"
                v-model="usuario.estatura"
                placeholder="Ingrese estatura(cm) del Usuario"
                id="estatura"
              />
            </b-form-group>
          </b-form-group>

          <!-- Botones agrupados -->
          <b-button type="submit" variant="success" v-if="!enEdicion">Crear Usuario</b-button>
          <b-button @click="actualizarUsuario()" variant="success" v-else>Actualizar Usuario</b-button>
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
        <br />
        
        <!-- Tabla de usuarios -->
        <b-table striped hover :items="lista_usuarios" :fields="fields">
          <template v-slot:cell(acciones)="row">
            <!-- Botones para editar y eliminar usuarios de la lista -->
            <b-button size="sm" @click="cargarUsuario(row)" class="mr-2">Modificar</b-button>
            <b-button size="sm" @click="eliminarUsuario(row)" class="mr-2">Eliminar</b-button>
            <b-button size="sm" @click="verEstado(row)" class="mr-2">Ver Estado</b-button>
          </template>
        </b-table>

      </b-container>
    </div>
  </div>
</template>


<script src="@/assets/index.js"/>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
