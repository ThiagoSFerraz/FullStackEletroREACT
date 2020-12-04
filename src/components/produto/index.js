import './produto.css'
import Lista from './lista'


export default function Produto(props) {
    return(
            
                <div className="col-3 mx-1 my-3 text-center border border-black-50 rounded">
                    <img src={require(`./img/fogao1.webp`).default} className="w-75 " onclick="exibir_categoria"/>
                    <br />
                    <div className="font-weight-bold"></div>
                    <div className="bg-warning col-12 btn my-3"> R$ <br/> Clique aqui para comprar! </div>
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