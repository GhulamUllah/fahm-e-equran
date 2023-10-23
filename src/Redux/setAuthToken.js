import axios from "axios"


const setAuthToken = (token) =>{
    if(token){
        axios.defaults.headers['auth'] = token
    }
    else delete axios.defaults.headers['auth']
}

export default setAuthToken;