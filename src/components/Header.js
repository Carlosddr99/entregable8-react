import { useSelector } from "react-redux";


export default function Header(){

    const user = useSelector((state) => state.userInfo.usuario)
    const nombre = user.name ; 
    const userName = user.username;

    return(
        <div>
            <p>Nombre Usuario : {nombre}</p>
            <p>UserName : {userName}</p>
        </div>
    )
}