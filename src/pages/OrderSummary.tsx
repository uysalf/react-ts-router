import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order confirmed!</div>
      <button
        onClick={() => {
          return navigate(-1);
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          return window.open("http://twitter.com");
        }}
      >
        Twitter
      </button>
    </>
  );
};

export default OrderSummary;
