import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import "react-day-picker/dist/style.css";
import AuthProvider from "../components/Contexts/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isSignUpPage = router.pathname === "/signup";
  const isDashBoard = router.pathname === "/dashboard";
  const queryClient = new QueryClient();

  return (
    <main
      className={`${inter.className}  bg-fixed min-h-screen bg-center  bg-cover z-[4]`}
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
          {/* {!isLoginPage || !isSignUpPage || (!isDashBoard && <Footer />)} */}
          <Footer />
        </AuthProvider>
      </QueryClientProvider>
    </main>
  );
}
