import React from "react"
import styles from "./Sidebar.module.css"
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <h2 className={`${styles.Title} t-h2`}>Dashboard</h2>
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
                <Link href="/contacto"  className={styles.Routes}>
                Contacto
                </Link>
            </div>

            <div className={styles.Footer}></div>
        </div>
    )
}

export default Sidebar
