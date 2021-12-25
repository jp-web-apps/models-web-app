import "../styles/globals.css";
import { Header } from "../components";
import { AuthProvider } from "../hooks";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
