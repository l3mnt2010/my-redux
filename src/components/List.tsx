const List = () => {
  return (
    <div className="w-5/6 mx-auto py-5">
      <h1 className="w-full text-left text-5xl mb-10">PROJECT1 - TODOLIST</h1>
      <div className="flex w-screen">
        <div className="w-1/2 flex gap-5">
          <div className=" border-2 border-gray-300 flex h-10 rounded-lg shadow-xl">
            <input
              placeholder="Search item name..."
              className="w-60 rounded-l-lg pl-5"
            />
            <button className=" bg-cyan-400 text-white font-bold w-32 rounded-r-lg">
              Clear
            </button>
          </div>
          <div className="border-2 flex gap-5 pl-3 shadow-lg h-10 rounded-lg boder-2 border-gray-400">
            <input type="radio" placeholder="Sort by" />
            <button className="bg-green-400 rounded-lg p-1 text-white">
              NAME-DESVC
            </button>
          </div>
        </div>
        <div className="block w-1/3">
          <button className="w-full bg-cyan-400 text-white h-10 mb-5 rounded-lg">
            Add Item
          </button>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Itemname"
              className="h-10 rounded-lg border-2 pl-5 border-gray-200 w-2/3"
            />
            <input type="checkbox" value="hihi" />
            <button className="bg-blue-500 rounded-lg p-2 h-10 text-white font-bold cursor-pointer">
              Submit
            </button>
            <button className="border-2 border-black p-2 h-10 rounded-lg font-bold cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
