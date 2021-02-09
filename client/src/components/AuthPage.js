import React from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import authStore from "../store/auth";

const AuthPage = () => {
    const [checkPass, setCheckPass] = React.useState(false)
    const message = useMessage()
    const auth = authStore
    const {loading, request, error, clearError} = useHttp()
    const [sign, setSign] = React.useState(false)
    const [formLog, setFormLog] = React.useState({
        email:'', password:''
    })
    const [formReg, setFormReg] = React.useState({
        email:'', password:'', nickname:''
    })
    React.useEffect(()=> {
        message(error)
        clearError()
    }, [error, message, clearError])
    const changeLogHandler = event => {
        setFormLog({
            ...formLog, [event.target.name]: event.target.value
        })
        setCheckPass(false)
    }
    const changeRegHandler = event => {
        setFormReg({
            ...formReg, [event.target.name]: event.target.value
        })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...formReg})
            message(data.message)
            setCheckPass(false)
        }catch(e){

        }
    }
    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...formLog})
            auth.login(data.token, data.userId)
            setCheckPass(false)
        }catch(e){

        }
    }
    const changeSign = () => {
        if (!sign) {
            return (
                <div>
                    <div>Войти</div>
                    <input type="text" name="email" placeholder="Введите email" onChange={changeLogHandler}/>
                    {checkPass
                        ?<input type="text" name="password" placeholder="Введите пароль" onChange={changeLogHandler}/>
                        :<input type="password" name="password" placeholder="Введите пароль" onChange={changeLogHandler}/>
                    }
                    <a onClick={()=>setCheckPass(!checkPass)}>&#128065;</a>
                    <button onClick={loginHandler}>Войти</button><a onClick={()=>setSign(true)}><small>Зарегистрироваться</small></a>
                </div>
            )
        }
        else{
            return (
                <div>
                    <div>Регистрация</div>
                    <input type="text" placeholder="Введите email" onChange={changeRegHandler}/>
                    <input type="text" placeholder="Введите nick" onChange={changeRegHandler}/>
                    {checkPass
                        ?<input type="text" name="password" placeholder="Введите пароль" onChange={changeRegHandler}/>
                        :<input type="password" name="password" placeholder="Введите пароль" onChange={changeRegHandler}/>
                    }
                    <a onClick={()=>setCheckPass(!checkPass)}>&#128065;</a>
                    <button disabled={loading} onClick={registerHandler}>Зарегистрироваться</button><a onClick={()=>setSign(false)}><small>Уже есть аккаунт</small></a>
                </div>
            )
        }
    }
    return(
        <div>
            <div>
                Авторизация
            </div>
            <div>
                {changeSign()}
            </div>
        </div>
    )
}
export default AuthPage