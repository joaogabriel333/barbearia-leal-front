import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroServiço from "../componets/CadastroServiço";
import Listagem from "../componets/Listagem";

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="cadastro/Serviço" element={<CadastroServiço />}/>
            <Route path="listagem/Serviço" element={<Listagem />}/>
        </Routes>
        </BrowserRouter>
    )

}

export default AppRouter;