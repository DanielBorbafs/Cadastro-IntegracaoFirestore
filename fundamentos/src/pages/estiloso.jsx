import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'
export default function Estiloso() {
    return (
        <Layout titulo= "Exemplo de Css modularizado">
            <div className={styles.roxo}>
                <h1>Estilo Usando CSS Módulos</h1>
            </div>
        </Layout>
        
    )

}