import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <div>This is homepage</div>
      <Link to="/product-list">Go to Product List</Link>
    </>
  );
};