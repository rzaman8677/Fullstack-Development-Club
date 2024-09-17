// pages/index.tsx
import React from "react";
import Head from "next/head";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Technologies from "./components/Technology/Technology";
import Projects from "./components/Projects/Projects";
import BoardMembers from "./components/BoardMembers/BoardMembers";
import Footer from "./components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Full Stack Development Club</title>
        <meta
          name="description"
          content="Join the Full Stack Development Club to learn and build full-stack applications using modern technologies like React, Next.js, and AWS."
        />
        <meta
          name="keywords"
          content="Full Stack, Development, Club, React, Next.js, AWS, Programming, Coding"
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Gallery />
        <Projects />
        <BoardMembers />
      </main>
      <Footer />
    </>
  );
};

export default Home;
