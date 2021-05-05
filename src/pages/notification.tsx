import React, { SyntheticEvent } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'




// cria um componente para ser chamado na notificacao
const CustomToast = ({closeToast}) => {
  return (
    <div>
      algo deu errado !
      <button onClick ={closeToast}>close</button>
    </div>
  )
}

toast.configure();
// cria as notificacoes e config delas, com posicoes e oque vai estar escrito

function testenotification() {
    
  const notify = () => {
    toast("notificacao basica", { position: toast.POSITION.TOP_LEFT }); //notificacao basica

    toast.success("notificacao successo", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000, //tempo de duração da notificacao  //autoclose:false serve para a notificacao nao apagar
    }); //notifica em caso de sucesso

    toast.info("notificacao informação", {
      position: toast.POSITION.TOP_RIGHT,
    }); // notifica uma informação

    toast.warn( "notificacao de aviso",{          //"notificacao de aviso"
      position: toast.POSITION.BOTTOM_LEFT,
    }); //notifica um aviso

    toast.error("notificacao de erro", {
      position: toast.POSITION.BOTTOM_CENTER,
    }); //notifica um erro

    toast("notificacao basica", { position: toast.POSITION.BOTTOM_RIGHT }); //notificacao simples
  };

  //rendezira as notificacoes

  console.log(testenotification)
  return (
    <div className="testenotification">
      <button onClick={notify}>Notification</button>
    </div>
  );
}




export default testenotification;