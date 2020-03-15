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
            fields: ["tipoId", "id", "nombre", "apellido", "correo", "peso", "estatura", "IMC", "acciones"],
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

        /** Muestra el mensaje emergente en la pagina */
        mostrarEmergente(string) {
            let divEmergente = document.createElement('div');
            divEmergente.setAttribute('id', 'divEmergente');
            divEmergente.setAttribute('class', 'cubierta-emergente');
            document.body.appendChild(divEmergente);

            let divMensaje = document.createElement('div');
            let textoDivMensaje = document.createTextNode(string);
            divMensaje.appendChild(textoDivMensaje);
            divMensaje.setAttribute('id', 'divMensaje');
            divMensaje.setAttribute('class', 'mensaje-emergente');

            divMensaje.onclick = this.removerEmergente;

            document.body.appendChild(divMensaje);
        },

        /** Remueve el mensaje emergente de la pagina */
        removerEmergente() {
            document.body.removeChild(document.getElementById('divEmergente'));
            document.body.removeChild(document.getElementById('divMensaje'));
        },

        /** Almacena los datos obtenidos del formulario en un objeto aplicacion y lo guarda en el array */
        crearUsuario() {
            let user = this.usuario;
            let existe = this.lista_usuarios.find(x => user.id === x.id)
            if (existe) {
                this.mostrarEmergente("Usuario ya existe");
                return;
            } else {
                let aux = ((user.peso * 100) / (user.estatura * user.estatura)) * 100
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
                }
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

        verEstado({ item }) {
            let aux = this.lista_usuarios.find(usuario => usuario.id == item.id);
            let estado;
            let xd = aux.IMC;
            if (xd > 0 && xd < 18) {
                estado = "Su estado actual es: Infrapeso"
            } else if (xd < 25) {
                estado = "Su estado actual es: Peso Normal"
            } else if (xd < 27) {
                estado = "Su estado actual es: Sobrepeso G1"
            } else if (xd < 30) {
                estado = "Su estado actual es: Sobrepeso G2"
            } else if (xd < 35) {
                estado = "Su estado actual es: Obesidad G1"
            } else if (xd < 40) {
                estado = "Su estado actual es: Obesidad G2"
            } else if (xd < 50) {
                estado = "Su estado actual es: Obesidad G3"
            } else if (xd > 50) {
                estado = "Su estado actual es: Obesidad Extrema"
            } else {
                estado = "Por favor verifique e ingrese bien los datos"
            } 
            this.mostrarEmergente(estado);
        },

        /** Toma la posicion de la aplicacion en el array y lo reemplaza por el objeto modificado */
        actualizarUsuario() {

            this.enEdicion = false;
            let posicion = this.lista_usuarios.findIndex(
                usuario => usuario.id == this.usuario.id
            );
            let user = this.usuario;
            let aux = ((user.peso * 100) / (user.estatura * user.estatura)) * 100
            user.IMC = aux.toFixed(2)
            this.lista_usuarios.splice(posicion, 1, user);
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
    }
};