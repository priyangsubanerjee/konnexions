import '@/styles/globals.css'
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (<div className="flex flex-col min-h-screen">
    <div className="flex-shrink-0 flex-grow-0"><NavBar /></div>
    <div className="flex-grow"><Component {...pageProps} /></div>
    <Footer />
  </div>)
}
