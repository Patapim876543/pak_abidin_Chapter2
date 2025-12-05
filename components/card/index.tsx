import Image from "next/image";

export default function Card(prop) {
  return (
    <div className="w-60 bg-white border rounded-2xl shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition shadow-white overflow-hidden
              transform transition duration-280 hover:scale-120">
      <Image
        alt={prop.name}
        width={150}
        height={150}
        className="rounded-xl"
        src={prop.imageSource}
      />
      <h3 className="mt-4 font-extrabold text-xl">{prop.name}</h3>
      <p className="mt-2 text-sm text-gray-500">{prop.children}</p>
      <button className="mt-4 bg-indigo-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
        Pilih
      </button>
    </div>
  );
}