import React, { Component } from 'react';

class Registro extends Component {
    render() {
        return (
            <form>
                {/*campo del nombre*/}
                <div className="form-group">
                    <label for="nombre">Nombre completo*</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" />
                </div>
                {/*campo del email*/}
                <div className="form-group">
                    <label for="email">Correo electrónico*</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu correo electrónico" />
                </div>
                {/*campo del contraseña*/}
                <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña"/>
                </div>
                {/*Tipo de usuario selección múltiple, aquí se tiene que hacer una condición
                para que pedir un código de admin o de empleado excepto en el caso de "clientes"*/}
                <div class="form-group">
                    <label for="tipoDeUsuario">Tipo de Usuario</label>
                    <select multiple="" className="form-control">
                        <option>-Selecciona uno-</option>
                        <option>Administrador</option>
                        <option>Recepcionista</option>
                        <option>Estilista</option>
                        <option>Cliente</option>
                    </select>
                </div>
                {/*campo del teléfono*/}
                <div className="form-group">
                    <label for="telefono">Número de Teléfono*</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu número de teléfono" />
                </div>
                {/*Fecha de nacimiento, aquí me gustaría agregar un date picker, creo que podemos
                encontrar uno que no sea tan dificil y así se ve más pro*/}
                <div className="form-group">
                    <label for="fechaDeNacimiento">Fecha de nacimiento*</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu fecha de nacimiento" />
                </div>
                <button type="button" className="btn btn-primary">Enviar</button>
            </form>
        );
    }
}
        
export default Registro;