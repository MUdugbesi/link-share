"use client"

import { Provider } from "react-redux";
import { store } from "@/store";
import NavBar from "@/components/layouts/NavBar";
import HomePage from "./Home/page";

export default function Home() {

  return (
    <main>
      <Provider store={store}>
        <NavBar />
        <HomePage />
      </Provider>

    </main>
  );
}
