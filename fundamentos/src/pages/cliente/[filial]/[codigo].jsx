import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'


export default function ClientePorcodigo() {
    const router = useRouter()  
    return (
        <Layout titulo = "Navegação Dinamica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.codigo}</div>
        </Layout>
    )
}