import { useState } from "react";
import "./CardInput.css";
function isNumber(char) {
  return /^\d$/.test(char);
}
function operateval(val) {
  const rawText = [...val.split("-").join("")];
  const creditCard = [];
  rawText.forEach((t, i) => {
    if (i % 4 === 0) {
      if (i != 0) creditCard.push("-");
    }
    creditCard.push(t);
  });
  return creditCard.join("");
}


export const CardInput = () => {
  const [state, setState] = useState({ cardNumber: "" });

  function operateCardInput(e) {
    var val = e.target.value;
    var len = val.length;
    var we = operateval(val);
    var val = we;
    if (isNumber(val[len - 1]) == true) {
      setState({ cardNumber: val });
    } else {
      if (len == 5 || len == 10 || len == 15) {
        setState({ cardNumber: val });
        
      } else {
        setState({ cardNumber: val.slice(0, -1) });
      }
    }
    return;
  }

  const last4digit = ["-", 3, 4, 5, 6];
  return (
    <div>
      <div className="card-box">
        <h1> Verify Your Credit Card Number</h1>

        <div className="container-input">
          <div>
            {/*  */}
            <input
              type="string"
              maxLength="14"
              className="card-input-box"
              value={state.cardNumber}
              placeholder="XXXX-XXXX-XXXX"
              onChange={(e) => {
                operateCardInput(e);
              }}
            ></input>
          </div>
          <div className="last-fout-digit">
            <div>
              {last4digit.map((val) => {
                return <span className="card-digits">{val}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
