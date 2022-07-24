import { useNavigate } from "react-router-dom";

export const Thankyou = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 4000);
  return (
    <>
      <center>
        <img
          src="https://th.bing.com/th/id/OIP.5t9fwdg9viS7-LqmHtHdvAAAAA?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt=""
        />
      </center>
      <h2> Your order has been placed..........</h2>
    </>
  );
};
