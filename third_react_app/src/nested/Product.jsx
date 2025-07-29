import { useSearchParams } from "react-router-dom"

function Product()
{const [searchParams,setSearchparams]=useSearchParams();
    const category=searchParams.get('category');
    const price=searchParams.get('price');
    return(
        <div>
            <h2>Product page:</h2>
            <p><strong>Category:{category}</strong></p>
            <p><strong>price:{price}</strong></p>
            <hr></hr>
            <button onClick={()=>setSearchparams({category:"Dell laptop",price:"40000"})}>Dell laptop</button>
            <button onClick={()=>setSearchparams({category:"HP laptop",price:"60000"})}>HP laptop</button>
        </div>
    )
}
export default Product;