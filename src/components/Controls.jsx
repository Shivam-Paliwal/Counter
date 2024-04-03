import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{
    const dispatch=useDispatch();
    const inputElement=useRef()

    const handelIncrement=()=>{
        dispatch({type: "INCREMENT"});
    }
    const handelDcrenent=()=>{
        dispatch({type: "DECREMENT"});
    }
    const handelAdd=()=>{
        dispatch({type: "ADDITION", payload: {
            num: inputElement.current.value,
        }});
    }
    const handelSubtract=()=>{
        dispatch({type: "SUBTRACTION", payload: {
            num: inputElement.current.value,
        }});
        inputElement.current.value="";
    }
    const handlePrivacyToggle = () => {
        dispatch({ type: "PRIVACY_TOGGLE" });
      };
    return(<>
        
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary" onClick={handelIncrement}>+1</button>

            <button type="button" className="btn btn-success" onClick={handelDcrenent}>-1</button>
        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row">
            <input type="text" placeholder="Entr a number" ref={inputElement}></input>

            <button type="button" className="btn btn-warning " onClick={handelAdd}>ADD</button>

            <button type="button" className="btn btn-danger " onClick={handelSubtract}>SUBTRACT</button>

            <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>

        </div>
        </>
    )
}
export default Controls;