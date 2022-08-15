import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../services/firebase'

const AutoContext = React.createContext();

export const useAuth = () => useContext(AutoContext)

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
     auth.onAuthStateChanged((user)=> {setUser(user); setLoading(false); if(user)history.push('/chats')})
    }, [user, history])

    const value = {user};

    return(
        <AutoContext.Provider value={value}>
            {!loading && children}
        </AutoContext.Provider>
    )
}