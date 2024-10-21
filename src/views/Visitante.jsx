import PageTitle from '../components/layout/PageTitle'
import './Visitante.css'

export default () => {
    function search(formData) {
        
    }
    return (
    <div className="ContentVisitante">
        <PageTitle title="Cadastrar Visitante" />
        <form action= {search}>
            <p>Nome</p>
            <input name="name" />
            <p>CPF</p>
            <input name="CPF" />
            <input type="hidden" name="morador_responsavel" />
            <p>Data Visita</p>
            <input name="data_visita" />
          <button type="submit">Enviar</button>
      </form>
    </div>
    )
}