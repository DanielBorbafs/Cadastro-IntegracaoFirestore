import Layout from "../components/Layout";


export default function Estado() {
    
    const state = useSate(0)
    
    let numero = state[0]
    let alterarNumero = state[1]

    function incrementar() {
        alterarNumero(numero + 1 )
    }
    return (
        <Layout titulo = "Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}