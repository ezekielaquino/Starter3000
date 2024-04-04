import dynamic from 'next/dynamic';

const CompositionComponent = dynamic(
  () => import('../components/Composition/Composition'),
  {ssr: false},
);

export default function Home() {
  return (
    <main>
      <CompositionComponent />
    </main>
  );
}
