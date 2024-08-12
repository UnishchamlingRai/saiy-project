// components/UserProfile.js
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* <Image
          src="/mnt/data/Frame 427321099.png" // Adjust the path as needed
          alt="User profile"
          width={50}
          height={50}
          className="rounded-full"
        /> */}
      <div>
        <h2 className="text-lg font-semibold">Hasan Abdussalam Abdillah</h2>
        <p className="text-gray-600">Default User</p>
      </div>
    </div>
  );
};

export default Profile;
