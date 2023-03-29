import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "components/Hero";
import Tech from "@/components/Tech";
import HighQuality from "@/components/HighQuality";
import TheBest from "@/components/TheBest";
import PopularCourses from "@/components/PopularCourses";
import Comments from "@/components/Comments";
import Community from "@/components/Community";
import FAQ from "@/components/Faq";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Tech />
        <div className="bg-[#F8F9FC]">
          <HighQuality />
          <TheBest />
          <PopularCourses />
          <Comments />
        </div>
        <Community />
        <FAQ />
      </Layout>
    </>
  );
}
