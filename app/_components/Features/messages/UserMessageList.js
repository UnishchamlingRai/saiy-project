import Link from "next/link";
import { FaBell, FaSearch } from "react-icons/fa";

const UserMessageList = () => {
  const notifications = [
    {
      name: "Nurul Fauziyah",
      time: "Today, 09.30 AM",
      message: "Just had a customer inq...",
      count: 4,
      img: "/path/to/img.jpg", // replace with actual image path
    },
    {
      name: "Hasan Abdullah",
      time: "Yesterday, 10.30 AM",
      message: "Got a request for a cust...",
      count: 2,
      img: "/path/to/img.jpg", // replace with actual image path
    },
    {
      name: "Amir Abdul",
      time: "Yesterday, 10.30 AM",
      message: "Hey, can you help me with a cu...",
      img: "/path/to/img.jpg", // replace with actual image path
    },
    // Add more notifications as needed
  ];

  return (
    <div className="h-screen max-w-sm overflow-scroll rounded-md bg-white p-4">
      <div className="mb-4 flex flex-1 items-center justify-between">
        <Link
          href={"/messages/sendNotification"}
          key={"sendNotification"}
          prefetch={true}
          className="flex flex-1 items-center justify-center rounded-md bg-red-100 px-4 py-2 text-red-600"
        >
          <FaBell className="mr-2" />
          Send Notification
        </Link>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <button className="mx-1 flex-1 rounded-md bg-blue-100 py-2 text-blue-600">
          Member
        </button>
        <button className="mx-1 flex-1 rounded-md bg-blue-100 py-2 text-blue-600">
          Store
        </button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 px-4 py-2"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      <ul className="space-y-4">
        {notifications.map((notif, index) => (
          <li
            key={index}
            className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-300"
          >
            <img
              src={notif.img}
              alt={notif.name}
              className="mr-4 h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-semibold">{notif.name}</span>
                <span className="text-xs text-gray-400">{notif.time}</span>
              </div>
              <p className="truncate text-sm text-gray-600">{notif.message}</p>
            </div>
            {notif.count && (
              <div className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                {notif.count}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMessageList;
