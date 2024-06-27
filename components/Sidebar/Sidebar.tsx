import React from "react"
import styles from "./Sidebar.module.css"
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <h4 className={`${styles.Title} t-h4`}>Dashboard</h4>
            <div className={styles.List}>
                <Link href="/"  className={styles.Routes}>
                Home
                </Link>
                <Link href="/tareas"  className={styles.Routes}>
                Tareas
                </Link>
                <Link href="/usuarios"  className={styles.Routes}>
                Usuarios
                </Link>
                <Link href="/about"  className={styles.Routes}>
                Sobre nosotros
                </Link>
            </div>

            <div className={styles.Footer}></div>
        </div>
    )
}

export default Sidebar
