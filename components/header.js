import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={75}
            />
            <nav>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a>
                            Parceiros
                        </a>
                    </li>
                    <li>
                        <a>
                            Sobre
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}