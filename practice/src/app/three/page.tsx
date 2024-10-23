import dynamic from "next/dynamic";
import { NextPage } from "next";

// CSR에서만 렌더링되도록 설정
const ThreeScene = dynamic(() => import("../../components/chart/line"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <h1>Three.js with Next.js and TypeScript</h1>
      <ThreeScene />
    </div>
  );
};

export default Home;
