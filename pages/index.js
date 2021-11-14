import Head from "next/head";
import Header from "../components/header";
import Main from "../components/main-section/main";
import SwiperComp from "../components/SwiperComp";

export default function Home() {
  return (
    <div className="home_section section_header">
      <h1 className="text-3xl mb-4 text-center border-b py-1">Stories</h1>
      <div>
        <SwiperComp />
      </div>
    </div>
  );
}
