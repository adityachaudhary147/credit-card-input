
import { useState } from 'react';
import './CardInput.css';
function isNumber(char) {
    return /^\d$/.test(char);
  }
export const CardInput=()=>{
    
    const [state,setState]=useState({cardNumber:""});

    function operateCardInput(e){

        // e.preventDefault();
        
        const val=e.target.value;
        const len=val.length;

        
        if(isNumber(val[len-1])==true && (len== 4 || len==9 || len== 14))
        {
            setState({cardNumber:val+'-'});
        }
        else{    
            if(isNumber(val[len-1])==true)
            {
                setState({cardNumber:val});
              

                return;
            }
            else{
                if(len==5 || len==10 || len==15)
                {
                    setState({cardNumber:val});
                return;
                }
                setState({cardNumber:val.slice(0,-1)})
                
                return;
            }
        }
      
    }
    function captureDelete(e)
    {
        
       
        const curr=state.cardNumber.length;
        
       
        if(curr ===5 || curr === 10|| curr ===15 )
            {
                console.log(curr);
                if(e.keyCode==8)
                {
                    // e.preventDefault();
                setState((val)=>{
                    return {cardNumber:val.cardNumber.slice(0,-1)}
                });
            }
        }
        return;
    }

    const last4digit=[3,4,5,6];
    return (
        <div>

            <div className="card-box">
                <h1> Enter Credit Card Number</h1>

                <div className="container-input">

                    <div>
                    {/*  */}
                        <input type='string' maxLength='14' className="card-input-box" value={state.cardNumber} placeholder='XXXX-XXXX-XXXX-' onChange={(e)=>{operateCardInput(e)}} onKeyDown={(e)=>{captureDelete(e)}} ></input>
                    </div>
                    <div className="last-fout-digit">
                        <div>{last4digit.map(val=>{return <span className='card-digits'>{val}</span>})}</div>
                    </div>

                </div>

            </div>
        </div>
    )
}