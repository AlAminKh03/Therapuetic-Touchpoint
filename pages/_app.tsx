import "../styles/globals.css";
import React, { useEffect, useState } from "react";
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
import Router, { useRouter } from "next/router";
import Lottie from "lottie-react";
import loader from "../public/data/Heart-2.json";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const queryClient = new QueryClient();
  const router = useRouter();

  return (
    <main
      className={`${inter.className} bg-gray-900 bg-fixed min-h-screen bg-center  bg-cover z-[4]`}
    >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          {loading && (
            <div className="flex items-center justify-center min-h-screen">
              <div className=" w-[200px] h-[200px]">
                <Lottie animationData={loader} loop={true} />
              </div>
            </div>
          )}
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </QueryClientProvider>
    </main>
  );
}
