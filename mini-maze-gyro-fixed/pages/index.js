import Head from 'next/head';
import dynamic from 'next/dynamic';

const MazeCanvas = dynamic(() => import('../components/MazeCanvas'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maze Gyro Game</title>
      </Head>
      <main>
        <h1>Maze Gyro Game</h1>
        <MazeCanvas />
      </main>
    </div>
  );
}