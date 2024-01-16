import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../Store/Counter";
import { privacyAction } from "../Store/Privacy";
const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(
      counterAction.add({
        num: inputElement.current.value,
      })
    );
  };

  const handleSubstraction = () => {
    dispatch(
      counterAction.substract({
        num: inputElement.current.value,
      })
    );
  };

  const handleToggal = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-sm-3"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn  btn-warning btn-lg px-4"
          onClick={handleToggal}
        >
          Handle Toggal
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <input
          ref={inputElement}
          className="numberInput"
          type="text"
          placeholder="Enter number"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn  btn-danger btn-lg px-4"
          onClick={handleSubstraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
