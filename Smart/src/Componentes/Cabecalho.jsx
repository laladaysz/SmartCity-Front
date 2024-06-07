import estilos from './Cabecalho.module.css'


export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <img src="./public/iconSC.png" alt="ícone" width={"100px"} />        
            <p>SmartCity</p>        
        </header>
    )
}
