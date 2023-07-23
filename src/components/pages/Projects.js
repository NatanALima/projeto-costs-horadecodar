import { useLocation } from "react-router-dom";
import Message from "../layout/Message";

export default function Projects() {

    const location = useLocation();
    let message = "";
    if(location.state) {
        message = location.state.message;
        //Impede que, ao recarregar a página, a mensagem seja exibida;
        window.history.replaceState({}, document.title);

    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            <Message msg={"message"} type={"sucess"}/>
        </div>
        
    )
}