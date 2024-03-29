import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroServiço from "../componets/CadastroServiço";
import ListagemServico from "../componets/ListagemServico";

import ListagemClientes from "../componets/ListagemClientes";
import CadastroProfissional from "../componets/CadastroProfissional";

import CadastroClientes from "../componets/CadastraCliente";
import ListagemProfissional from "../componets/listagemProfissional";

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="cadastro/Serviço" element={<CadastroServiço />}/>
            <Route path="listagem/Serviço" element={<ListagemServico />}/>
            <Route path="cadastro/Clientes" element={<CadastroClientes />}/>
            <Route path="listagem/Clientes" element={<ListagemClientes />}/>
            <Route path="cadastro/Profissional" element={<CadastroProfissional />}/>
            <Route path="listagem/Profissional" element={<ListagemProfissional />}/>
        </Routes>
        </BrowserRouter>
    )

}

export default AppRouter;