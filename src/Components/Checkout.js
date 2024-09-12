import './css-components/checkout.css';

function Checkout(){
    return(
        <div className="checkout-contain">
            <h2>billing details</h2>
            <div className="checkout">
                <div className="form-container">
                    <form className='form'>
                        <label for=''>first name <span>*</span></label>
                        <input type='text'  required/>
                        <label for=''>town/city <span>*</span></label>
                        <input type='text'required />

                        <label for=''>phone number <span>*</span></label>
                        <input type='phone' required />

                        <label for=''>email address <span>*</span></label>
                        <input type='email'  required/>

                    </form>

                </div>

                <div className="info">
                    <div className="subtotal">
                        <span className="spanOne">subtotal</span>
                        <span>${`${localStorage.getItem("total")}`}</span>
                    </div>
                    <hr/>

                    <div className="shipping">
                        <span className="spanOne">shipping</span>
                        <span>free</span>
                    </div>
                    <hr/>

                    <div>
                        <span className="spanOne total ">total</span>
                        <span>${`${localStorage.getItem("total")}`}</span>
                    </div>
                    <button className='orange-btn'>order now</button>
                    

                </div>
            </div>

        </div>
    )

}
export default Checkout;