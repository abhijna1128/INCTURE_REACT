import { useDispatch } from "react-redux";
import { addToCart } from "../new_redux/action";


const products = [
    { id: 100, name: 'IPhone', price: 80000 },
    { id: 200, name: 'HP laptop', price: 60000 },
    { id: 300, name: 'Macbook', price: 150000 },
    { id: 400, name: 'Samsung', price: 40000 },
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <div>
            <style>
                {`
                .product{
                   padding: 20px;
                   max-width: 600px;
                   margin: auto;
                   font-family: Arial, sans-serif;
                }
                .product-list{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px;
                    border: 1px solid #ccc;
                    margin-bottom: 10px;
                    border-radius: 6px;
                    background-color: #f9f9f9;
                    }
                    .productname{
                    font-weight: bold;
                    font-size: 16px;
                    }
                    .productprice{
                     margin-left: 10px;
                    color: #555;}
                    .button{
                    padding: 6px 12px;
                    background-color: #05065aff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    }
                    .button:hover{
                     background-color: #094c83ff;}`
                    }
            </style>
        <div className="product">
            <h2>Products:</h2>
            {products.map(product => (
                <div key={product.id} className="product-list" style={{ marginBottom: '10px',color:'black' }}>
                    <span className="productname" color="black">{product.name} </span>
                    <span className="productprice" color="black">:: {product.price}/-</span>
                    <button className="button"
                        style={{ marginLeft: '10px' }}
                        onClick={() => dispatch(addToCart(product))}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProductList;
