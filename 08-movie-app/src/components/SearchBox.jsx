const SearchBox = ({ values }) => {
  const { inputValue, setInputValue, fetchMovies } = values;

  return (
    <div className="flex items-center justify-center">
      <input
        className="outline-none border border-neutral-600 rounded-bl-xl rounded-tl-xl px-[7px] w-[180px]"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Movie Name"
      />
      <button
        onClick={fetchMovies}
        className="bg-emerald-600 py-[1px] hover:bg-emerald-700 px-[5px] rounded-tr-xl rounded-br-xl"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
