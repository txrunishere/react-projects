import SearchBox from "./SearchBox";

const Navbar = ({ inputValues }) => {
  return (
    <div className="w-full px-[30px] py-[1.5rem] flex justify-between">
      <div className="flex gap-[20px]">
        <img
          className="w-20 cursor-pointer"
          src="https://multimovies.media/wp-content/uploads/2023/04/multimovies.jpg"
        />
        <div>
          <ul className="flex gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        </div>
      </div>
      <div>
        <SearchBox values={inputValues} />
      </div>
    </div>
  );
};

export default Navbar;
