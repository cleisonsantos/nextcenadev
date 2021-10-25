import style from '../styles/Main.module.css'
import btn from '../styles/Btn.module.css'

export default function Main() {
    return(
        <div className={style.main}>
            <h1>Websites, sistemas, para o seu negocio!</h1>
            <a className={btn.inf}>Conheça-nos</a>
        </div>
    )
}