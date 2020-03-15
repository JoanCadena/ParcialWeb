/** Codigo .js para la pagina index.vue */
export default {
    data() {
        return {
            /** Determina si la aplicacion se encuentra en estado de edicion */
            enEdicion: false,
            /** Array de usuarios */
            lista_usuarios: [

            ],
            /** Opciones de identificación en la lista desplegable */
            tipoId: [
                { text: "Seleccione tipo de identificación", value: null },
                "CC",
                "CE",
                "RN",
                "TI",
            ],
            
            /** Parametros de formulario */
            fields:["tipoId", "id", "nombre", "apellido", "correo", "peso", "estatura", "IMC", "estado"],
            usuario: {
                id: "",
                nombre: "",
                apellido: "",
                correo: "",
                peso: "",
                estatura: "",
                IMC: "",
                acciones: true
            },
            show: true
        };
    },
    /** Metodos */
    methods: {
        /** Limpia los campos del formulario */
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.usuario.tipoId = "";
            this.usuario.id = "";
            this.usuario.nombres = "";
            this.usuario.apellidos = "";
            this.usuario.correo = "";
            this.usuario.peso = "";
            this.usuario.estatura = "";

        },
        /** Almacena los datos obtenidos del formulario en un objeto aplicacion y lo guarda en el array */
        crearUsuario() {
            let user = this.usuario;
            let aux = ((user.peso*100)/(user.estatura*user.estatura))*100
            user.IMC = aux.toFixed(2)
            this.lista_usuarios.push(user);
            this.usuario = {
                id: "",
                nombres: "",
                apellidos: "",
                correo: "",
                peso: "",
                estatura: "",
                acciones: true
            };
        },
        /** Busca la posicion del objeto dentro del array y lo elimina */
        eliminarUsuario({ item }) {
            let posicion = this.lista_usuarios.findIndex(usuario => usuario.id == item.id);
            this.lista_usuarios.splice(posicion, 1);
        },
        /** Llena los campos del formulario con los datos de la aplicacion para luego ser editados, segun la fila
    en que se encuentre */
        cargarUsuario({ item }) {
            let aux = this.lista_usuarios.find(usuario => usuario.id == item.id);
            this.enEdicion = true;
            this.usuario = Object.assign({}, aux);
        },
        /** Toma la posicion de la aplicacion en el array y lo reemplaza por el objeto modificado */
        actualizarUsuario() {
            let posicion = this.lista_usuarios.findIndex(
                usuario => usuario.id == this.usuario.id
            );
            this.lista_usuarios.splice(posicion, 1, this.usuario);
            this.usuario = {
                id: "",
                nombres: "",
                apellidos: "",
                correo: "",
                peso: "",
                estatura: "",
                acciones: true
            };
        }
    }
};