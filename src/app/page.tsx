"use client"

import { Provider } from "react-redux";
import { store } from "@/store";
import NavBar from "@/components/layouts/NavBar";
import HomePage from "./home/page";
import Login from "./auth/login/page";

export default function Home() {

  return (
    <main>
        <Login />
    </main>
  );
}
