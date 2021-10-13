import React from 'react';
import Logo from '../images/cheems.jpg';

const Index = ({form, onChange, onSubmit}) => (
    <div className="principal">
        <div className="container-form">
            
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center mb-4">
                    <img src={Logo} alt="Logotipo"/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Direccion de correo</label>
                    <input onChange={onChange} value={form.email} type="email" className="form-control" name="email" id="email" placeholder="direccion_correo@example.com" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Contraseña</label>
                    <input onChange={onChange} value={form.pass} type="password" className="form-control" name="pass" id="pass" placeholder="Ingrese la contraseña" />
                </div>
                <div className="text-center mt-3">
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
    </div>
);

export default Index;