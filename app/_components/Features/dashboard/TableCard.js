// components/TableCard.js
import Image from "next/image";
import Link from "next/link";

export default function TableCard({ title, data, link }) {
  return (
    <div className="p-4 bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold">{title}</h2>
        <Link href={link}>
          {/* <a className="text-blue-500 text-sm">See All &gt;</a> */}
          <span className="text-blue-500 text-sm">See All &gt;</span>
        </Link>
      </div>
      <table className="w-full text-left border border-gray-200 ">
        <thead className=" bg-gray-200 text-sm rounded-full">
          <tr>
            <th className="p-2 ">Country</th>
            <th className="p-2">Registered Items</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 flex items-center">{item.country}</td>
              <td className="py-2">{item.item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
