import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterValue } = useSelector((store) => store.counter);
  return (
    <>
      <div>
        <p className="lead mb-4">current value is: {counterValue}</p>
      </div>
    </>
  );
};

export default DisplayCounter;
