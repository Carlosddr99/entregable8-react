import { useSelector, useDispatch } from "react-redux"
import { setEmail } from "../slices/userInfoSlice";
import { useState } from "react";

export default function Email (){

    const dispatch = useDispatch();

    const email = useSelector((state) => state.userInfo.usuario.email)

    const [modificar, setModificar] = useState(false);


    function modificarEmail(evento){
        evento.preventDefault();
        const nuevoEmail = evento.target[0].value;
        dispatch(setEmail(nuevoEmail));
        setModificar(false);
    }

    function mostarCambio(){
        return(
            <div>
            <form onSubmit={modificarEmail}>
                <input type="text" placeholder={email}></input>
                <input type="submit" value="Modificar"/>
                <button onClick={()=> setModificar(false)} > Cancelar</button>
            </form>
            </div>
        )
    }

    function mostarNormal(){
        return(
            <div>
                <p>{email}</p>
                <button onClick={()=> setModificar(true)} > Modificar</button>
            </div>
        )
    }
    return(
        <div>
        {modificar ? mostarCambio() : mostarNormal()}
        </div>
    )
}