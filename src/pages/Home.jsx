import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-5">
      <p className="text-xl">
        <a
          href={"https://demo-nextjs13.vercel.app/post"}
          className="hover:underline"
        >
          Tech Blog Posts
        </a>
        <br />
        <Link to={"/postcsr"} className="hover:underline">
          Tech Blog Posts With CSR
        </Link>
        <br />
      </p>
    </div>
  );
}

export default Home;
