import '../components/homepage/style.css'


export default function Home(){
    return(
        <div className="bg-white">
        <div className="homepg jumbotron bg-white text-center font-weight-bold rounded-0">
            <h1 className="display-1">Seja bem vindo!</h1>
            <p className="lead">Aqui em nossa loja, <em class="font-weight-bold">programadores tem desconto</em> nos produtos para sua casa!</p>
            <hr className="my-4"/>
            <p>Venha conhecer nossos produtos!</p>
            <a className="btn btn-warning col-6 btn-lg" href="/produtos" role="button">Nossos Produtos!</a>
        </div>
        <div className="cartao jumbotron bg-white text-center font-weight-bold rounded-0">
            <h1 className="display-3">Aceitamos as principais bandeiras!</h1>
            <img src={require(`../components/homepage/cartaocred.png`).default} className="w-25" alt="Bandeiras de cartão" />
        </div>
            
        
        </div>
    )
}