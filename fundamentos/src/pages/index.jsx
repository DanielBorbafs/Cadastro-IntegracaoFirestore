import Navegador from "../components/Navegador"


export default function Inicio() {
    return (
        <div style={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
            }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo"  destino="/exemplo"cor="#780d8d" />
            <Navegador texto="jsx"  destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01"  destino="/navegacao" cor="orange" />
            <Navegador texto="Navegação #02"  destino="/cliente/sp/1" cor="purple" />
            <Navegador texto="Componente com Estado"  destino="/estado" cor="green" />
            <Navegador texto="Integração com API"  destino="/integracao_1" cor="Gray" />
        </div>
    )
}