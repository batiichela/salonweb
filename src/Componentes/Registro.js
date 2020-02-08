import React, { Component } from 'react';

class Registro extends Component {
    render() {
        return (
            <form>
                <div className ="form-group row">
                    <div className="col-md-6">
                        {/*campo del nombre*/}
                        <div className="form-group">
                            <label for="nombre">Nombre*</label>
                            <input type="text" className="form-control" placeholder="Ingresa tu nombre" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/*campo del apellido*/}
                        <div className="form-group">
                            <label for="apellido">Apellidos*</label>
                            <input type="text" className="form-control" placeholder="Ingresa tus apellidos" />
                        </div>
                    </div>
                </div>
                <div className ="form-group row">
                    {/*campo del email*/}
                    <div className="col-md-6">
                        <div className="form-group">                    
                            <label for="email">Correo electrónico*</label>
                            <input type="text" className="form-control" placeholder="Ingresa tu correo electrónico" />
                        </div>
                    </div>                
                    {/*campo del contraseña*/}
                    <div className="col-md-6">
                        <div className="form-group">                        
                            <label for="password">Contraseña*</label>
                            <input type="password" className="form-control" placeholder="Contraseña"/>
                        </div>
                    </div>
                </div>
                <div className ="form-group row">
                {/*Tipo de usuario selección múltiple, aquí se tiene que hacer una condición
                para que pedir un código de admin o de empleado excepto en el caso de "clientes"*/}
                    <div className="col-md-6">
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
                    </div>
                </div>
                {/*campo del teléfono*/}
                <div className ="form-group row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="telefono">Número de Teléfono*</label>
                            <input type="text" className="form-control" placeholder="Ingresa tu número de teléfono" />
                        </div>
                    </div>                
                    {/*Fecha de nacimiento, aquí me gustaría agregar un date picker, creo que podemos
                    encontrar uno que no sea tan dificil y así se ve más pro*/}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="fechaDeNacimiento">Fecha de nacimiento*</label>
                            <input type="text" className="form-control" placeholder="Ingresa tu fecha de nacimiento" />
                        </div>
                    </div>
                </div>
                <button onClick={this.enviado.bind(this)} type="button" className="btn btn-primary">Enviar</button>
            </form>
        );
    }

    enviado() {
        alert('Tu registro se guardó correctamente');
    }
}
        
export default Registro;