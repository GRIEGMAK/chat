import {makeAutoObservable} from "mobx";

const noop = () => {}
const storageName = 'userData'

class authStore {
    token= null
    userId = null
    login = noop
    logout = noop
    isAuthenticated = false
    constructor() {
        makeAutoObservable(this)
    }
    login = (jwtToken, id)=>{
        this.token = jwtToken
        this.userId=id
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
        this.isAuthenticated = true
    }
    logout = () => {
        this.token = null
        this.UserId = null
        localStorage.removeItem(storageName)
        this.isAuthenticated = false
    }
    checked = () => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if(data && data.token){
    this.login(data.token, data.userId)
    }
}

}

export default new authStore();