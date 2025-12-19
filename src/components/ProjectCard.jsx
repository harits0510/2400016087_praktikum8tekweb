export default function ProjectCard({ img, title, desc, link }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={img}
        alt={title}
        className="w-full h-48 md:h-56 object-cover"
      />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{desc}</p>
        </div>

        <a
          href={link || "#"}
          className="mt-4 block w-full text-center bg-gray-900 text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Lihat
        </a>
      </div>
    </article>
  );
}