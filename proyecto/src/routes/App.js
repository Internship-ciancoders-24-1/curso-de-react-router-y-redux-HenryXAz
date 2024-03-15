import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";

import Layout from "../components/Layout";
import Player from "../containers/Player";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="login" Component={Login} />
                <Route exact path="/register" Component={Register} />
                <Route exact path="/player/:id" Component={Player}  />
                <Route path="*" Component={NotFound} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default App;
