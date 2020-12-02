import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './components/layout/Header'
import './style.css'
import Home from './components/pages/Home'
import Landing from './components/pages/Landing'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import { AuthProvider } from './components/auth/contexts/AuthContext';
import { Pagination } from 'react-bootstrap'



export default function App() {
    // initGA()
    // logPageView()
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/catalog" component={Home} />
                        <Route exact path="/catalog" component={Header} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

