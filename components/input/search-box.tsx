export default function SearchBox() {
  return (
    <div className="flex m-2 p-2 px-4 mt-5">
      <input
        type="search"
        className="bg-slate-700 min-w-full rounded-md p-3 text-white text-xl placeholder:text-white placeholder:text-xl"
        name="search"
        id="search"
        placeholder="pikachu..."
      />
    </div>
  );
}
