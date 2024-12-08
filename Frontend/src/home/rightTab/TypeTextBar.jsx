import { IoIosSend } from "react-icons/io";


function TypeTextBar() {
  return (
    <div className="flex  items-center h-[12vh]">
      <div className="w-[80%] mx-8">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
      </div>
      <IoIosSend className="text-5xl p-2"/>
    </div>
  );
}

export default TypeTextBar;
