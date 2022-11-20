import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo 1.png"
import './cadastro.css'

export default function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  // Atualizar os campos quando digita.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  
  return (

    <div className="cadastro">
      <div className="form">
        <div className="formContent">
          <div className="labelBox"><label className="label">Bem Vindo</label></div>
          <div className="linkBox">
              <Link to="/login" >
                <input
                  type="submit"
                  value="Entrar"
                  className="linkButtonCadastro"
                />
              </Link>
              <Link to="/cadastro" >
                <input 
                  type="submit"
                  value="Cadastrar"
                  className="linkButtonCadastro"
                />
              </Link>
          </div>
          <form >


            <div className="inputBox">
              <div>
                <input 
                  placeholder="email"
                  type="email"
                  className="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
                />
              </div>
              <div>
                <input
                  placeholder="senha"
                  type="password"
                  className="senha"
                  id="senha"
                  value={form.senha}
                  onChange={(e) => updateForm({ senha: e.target.value })}
                />
              </div>
            </div>
          </form>
          <Link to="/" >
            <input
              type="submit"
              value="Entrar"
              className="cadastroSubmit"
            />
          </Link>
        </div>
      </div>
      <div className="content">
        <img className="img" src={logo} alt="Logo" />
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a semper orci, vitae tristique ante. Vivamus ac enim sed ex accumsan congue eget non dui. Sed imperdiet in justo ut iaculis. Suspendisse potenti. Nullam eleifend porttitor pharetra. Suspendisse lobortis risus eu auctor tristique. Fusce ut</p>
      </div>
    </div>
  );
}