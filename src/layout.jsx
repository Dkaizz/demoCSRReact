import { Link } from "react-router-dom";

function RootLayout({ children }) {
  return (
    <div>
      <div className="bg-red-400 text-white flex items-center justify-between p-5">
        Header
        <Link to={"/"} className="underline">
          Back to Home
        </Link>
      </div>
      {children}
    </div>
  );
}

export default RootLayout;
