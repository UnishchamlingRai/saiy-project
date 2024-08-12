"use client";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

const ChatInterface = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex h-screen w-full flex-1 flex-col rounded-md bg-gray-100 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center">
        <img
          src="/path/to/user-image.jpg" // replace with actual image path
          alt="User"
          className="mr-4 h-10 w-10 rounded-full"
        />
        <span className="text-lg font-semibold">Hasan Abdussalam Abdillah</span>
      </div>

      {/* Chat Messages */}
      <div className="mb-4 flex-1 overflow-y-auto bg-gray-200 p-4">
        <div className="flex flex-col space-y-2">
          <div className="max-w-xs self-start rounded-lg bg-gray-300 px-4 py-2 text-gray-700">
            Got a request for a custom order. Any specific details you need?
          </div>
          <div className="max-w-xs self-start rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
            Customer asking for a quote. Can you assist with pricing?
          </div>
          <div className="max-w-xs self-end rounded-lg bg-blue-600 px-4 py-2 text-white">
            Hasan Abdussalam Abdillah
          </div>
        </div>
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <input
          type="text"
          {...register("message")}
          placeholder="Type message"
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="ml-2 rounded-full bg-blue-600 p-2 text-white"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
