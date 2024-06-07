import estilos from './Lateral.module.css'
import { Link } from 'react-router-dom'


export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
             <h3>O que deseja fazer hoje?</h3>
            </header>
            <section>
                <Link 
                    className={estilos.botao}
                    to='/inicial'>
                    Lista Sensores
                </Link>

                <Link 

                    className={estilos.botao}
                    to='/inicial/cadsensor'
                >Cadastrar Sensor
                </Link>
                <Link 
                    className={estilos.botao}
                    to='/inicial/localizacao'
                >Mapa
                </Link>
                <Link 
                    className={estilos.botao}
                    to='/inicial/filtro'
                >Filtros
                </Link>
            </section>
        </aside>
    )
}