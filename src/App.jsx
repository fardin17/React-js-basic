import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex gap-2 px-4 py-3 bg-gray-200">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">Product List</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/signup">Sign Up</Link>
    </div>
  );
}

export default App;
