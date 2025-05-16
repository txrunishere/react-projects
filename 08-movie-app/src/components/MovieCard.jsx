const MovieCard = ({ values }) => {
  const { searchMovies } = values;
  console.log(searchMovies.Search);
  return (
    <div>
      <div className="flex flex-wrap px-4 lg:px-10 ">
        {/* Movies */}
        {searchMovies.Search?.length > 0
          ? searchMovies.Search.map((item) => (
              <div key={item.imdbID} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img
                    className="rounded-lg w-full mb-2"
                    src={item.Poster ? item.Poster : "https://images.pexels.com/photos/32090197/pexels-photo-32090197/free-photo-of-minimalist-black-and-white-ace-of-spades-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt=""
                  />
                  <h2 className="text-xl text-white font-bold">
                    {item.Title}
                  </h2>
                  <div className="flex justify-between">
                  <h2 className="text-lg text-white mb-2">{item.Type}</h2>
                  <h2 className="text-lg text-white mb-2">{item.Year}</h2>
                  </div>
                </div>
              </div>
            ))
          : searchMovies.Error}
      </div>
    </div>
  );
};

export default MovieCard;

{
  /* <div key={item.imdbID} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img
                    className="rounded-lg w-full mb-2"
                    src="https://dummyimage.com/720x400"
                    alt=""
                  />
                  <h2 className="text-xl text-white font-bold">
                    This is title
                  </h2>
                  <h2 className="text-lg text-white mb-2">desc</h2>
                </div>
              </div> */
}
