import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../new_redux/action";
function Cart()
{
    const cartItems=useSelector(state=>state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
      dispatch(removeFromCart(productId));
  };
   let handleamount = 0;
    for (let i = 0; i < cartItems.length; i++) {
    handleamount += cartItems[i].price * cartItems[i].quantity;
 }
    return(
        <div>
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
                    .remove{
                    padding: 6px 12px;
                    background-color: #05065aff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    }
                    .remove:hover{
                     background-color: #094c83ff;}`
                    }
            <h2>Cart page</h2>
            {cartItems.length===0&& <p>Cart is empty</p>}
            <ul>
                {cartItems.map((items,index)=>(
                    <li key={index}>{items.name} : {items.price}/-  : Quantity:{items.quantity} <button className="remove" onClick={() => handleRemove(items.id)}>remove</button></li>

                ))}
               
            </ul>
            <h3>Total amount is :{handleamount}</h3>
        </div>
    )
    
}
export default Cart;
