import React, { Component } from 'react';
import * as firebase from 'firebase';


class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {};

        this.onInputChange = this.onInputChange.bind(this);
        this.writeUser = this.writeUser.bind(this);
    }

    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    writeUser(event){
        

        firebase.database().ref('usuarios/').push(this.state);
    }

    render() {
        return (
            <form>
                {/*campo del nombre*/}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre completo*</label>
                    <input name="nombre" type="text" className="form-control" value={this.state.nombre} onChange={this.onInputChange} placeholder="Ingresa tu nombre completo" />
                </div>
                {/*campo del email*/}
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico*</label>
                    <input name="mail" type="text" value={this.state.mail} onChange={this.onInputChange} className="form-control" placeholder="Ingresa tu correo electrónico" />
                </div>
                {/*campo del contraseña*/}
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input name="password" value={this.state.password} onChange={this.onInputChange} type="password" className="form-control" placeholder="Contraseña"/>
                </div>
                {/*Tipo de usuario selección múltiple, aquí se tiene que hacer una condición
                para que pedir un código de admin o de empleado excepto en el caso de "clientes"*/}
                <div className="form-group">
                    <label htmlFor="tipoDeUsuario">Tipo de Usuario</label>
                    <select multiple="" name="type" value={this.state.type} onChange={this.onInputChange} className="form-control">
                        <option>-Selecciona uno-</option>
                        <option value="0">Administrador</option>
                        <option value="1">Recepcionista</option>
                        <option value="2">Estilista</option>
                        <option value="3">Cliente</option>
                    </select>
                </div>
                {/*campo del teléfono*/}
                <div className="form-group">
                    <label htmlFor="telefono">Número de Teléfono*</label>
                    <input name="telefono" value={this.state.telefono} onChange={this.onInputChange} type="text" className="form-control" placeholder="Ingresa tu número de teléfono" />
                </div>
                {/*Fecha de nacimiento, aquí me gustaría agregar un date picker, creo que podemos
                encontrar uno que no sea tan dificil y así se ve más pro*/}
                <div className="form-group">
                    <label htmlFor="fechaDeNacimiento">Fecha de nacimiento*</label>
                    <input name="fechaNacimiento" type="text" value={this.state.fechaNacimiento} onChange={this.onInputChange} className="form-control" placeholder="Ingresa tu fecha de nacimiento" />
                </div>
                <button type="button" onClick={this.writeUser} className="btn btn-primary">Enviar</button>
            </form>
        );
    }
}
        
export default Registro;