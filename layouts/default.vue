<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <img
          src="https://www.marysillero.com/wp-content/uploads/2018/04/unnamed.png"
          fluid
          alt="Responsive image"
          height="50px"
          width="50px"
        />
        <b-navbar-brand href="#"></b-navbar-brand>
        <b-navbar-brand href>IMC</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'index'}">Crear Usuario</b-nav-item>
            <b-nav-item :to="{name:'info'}">Información IMC</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt />
  </div>
</template>

<style>
.navbar.navbar-dark.bg-dark {
  background-color: blue !important;
}

.cubierta-emergente {
  background-color: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.mensaje-emergente {
  position: absolute;
  background-color:chartreuse;
  padding: 10px;
  width: 250px;
  height: 300x;
  font-size: 2em;
  z-index: 11;
  top: 50%;
  left: 50%;
  margin-left: -120px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
