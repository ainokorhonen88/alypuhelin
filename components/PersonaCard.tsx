import Link from "next/link";

interface PersonaCardProps {
  emoji: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  tag?: string;
}

export default function PersonaCard({
  emoji,
  title,
  description,
  href,
  external,
  highlight,
  tag,
}: PersonaCardProps) {
  const card = (
    <div
      className={`relative group rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 ${
        highlight
          ? "bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg"
          : "bg-white border border-gray-200 hover:border-primary-300"
      }`}
    >
      {tag && (
        <span
          className={`absolute -top-2.5 right-4 text-xs font-bold px-3 py-1 rounded-full ${
            highlight ? "bg-yellow-400 text-gray-900" : "bg-primary-100 text-primary-700"
          }`}
        >
          {tag}
        </span>
      )}
      <div className="text-4xl mb-4">{emoji}</div>
      <h3
        className={`text-xl font-bold mb-2 ${highlight ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h3>
      <p className={`text-sm ${highlight ? "text-white/90" : "text-gray-600"}`}>
        {description}
      </p>
      <div
        className={`mt-4 text-sm font-semibold flex items-center gap-1 ${
          highlight ? "text-white/90" : "text-primary-600"
        }`}
      >
        {external ? "Käy sivustolla ↗" : "Lue lisää →"}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener">
        {card}
      </a>
    );
  }

  return <Link href={href}>{card}</Link>;
}
