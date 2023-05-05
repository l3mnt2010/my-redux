const titles = ["id", "Name", "Level", "Action"];
interface MyEvent {
  target: HTMLElement;
  type: string;
  bubbles: boolean;
  cancelable: boolean;
}

const ListItem = () => {
  const setItem = (event: MyEvent) => {
    event.target;
  };
  return (
    <div className="w-5/6 h-auto mx-auto rounded-lg">
      <h1 className="w-full h-10 text-left pl-5 py-2 text-green-600 bg-green-200 rounded-t-lg">
        Listitem
      </h1>
      <table className="w-full">
        <tr>
          {titles.map((itm) => (
            <th className="w-1/4 content-center text-center ">{itm}</th>
          ))}
        </tr>
        <tr></tr>
      </table>
    </div>
  );
};

export default ListItem;
