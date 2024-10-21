import Card from '../components/layout/Card'
import PageTitle from '../components/layout/PageTitle'
import './Home.css'

export default () => {
    return (
    <div className="Cards">
        <PageTitle title="Avisos Gerais" />
        <Card title="Aviso 1" content="o kami ta me devendo um minezin" data = "21/10" />
        <Card title="Aviso 2"content="lorem" data = "20/10"/>
    </div>
    )
}
