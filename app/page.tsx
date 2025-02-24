import PokemonCard from '@/components/card/pokemon-card';
import SearchBox from '@/components/input/search-box';

export default function Home() {
  return (
    <>
      <section id="hero" className="mt-5">
        <div className="text-white text-center">
          <h1 className="text-4xl fond-semibold">Welcome to Pokedex</h1>
          <p className="mt-4 text-md">Pokemon information garage</p>
        </div>
      </section>
      <section id="search-section">
        <SearchBox />
      </section>
      <main
        id="content"
        className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      >
        {Array(10)
          .fill(null)
          .map((it, idx) => (
            <PokemonCard key={`pokemon-card-${idx}`} />
          ))}
      </main>
    </>
  );
}
