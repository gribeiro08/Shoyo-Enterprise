import PageTitle from '../components/layout/PageTitle'
import './Morador.css'

export default () => {
    function search(formData) {
        
    }
    return (
    <div className="ContentMorador">
        <PageTitle title="Portal do Morador" />
        <form action= {search}>
            <p>Nome</p>
            <input name="name" />
            <p>Sobrenome</p>
            <input name="secondName" />
            <p>CPF</p>
            <input name="CPF" />
            <p>Email</p>
            <input name="email" />
            <p>Telefone</p>
            <input name="telefone" />
            <p>Bloco</p>
            <input name="bloco" />
            <p>Apartamento</p>
            <input name="apartamento" />
          <button type="submit">Enviar</button>
      </form>
    </div>
    )
}

