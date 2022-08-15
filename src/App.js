import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import {Login, Chats} from "./components"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Switch> 
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
