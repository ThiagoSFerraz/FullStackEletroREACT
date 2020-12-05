import './produto.css'
import Lista from './lista'


export default function Produto(props) {
    return(
            
                <div className="shadow col-3 mx-3 my-3 text-center border rounded">
                    <img src={require(`./img/${props.imagem}`).default} className="w-75 my-5 rounded" onclick="exibir_categoria"/>
                    <br />
                    <div className="font-weight-bold mt-3">{props.descricao}</div>
                    <div className="bg-warning font-weight-bold col-12 btn my-3"> R$: {props.preco} <br/> Clique aqui para comprar! </div>
                </div>
            
        
   



    // <div className="boxProduto">
    //         <img src={require(`./img/fogao1.webp`).default} width="300px" alt="Imagem do produto"/>
    //         <figcaption>
    //             <p className="nome-prod">
    //                 {props.nome} teste
    //             </p>
    //             <p className="precofina-prod">
    //                 R$: {props.preco}
    //             </p>
    //         </figcaption>
    // </div>
    )
}