import "../styles/globals.css";
import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-slate-100'>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
