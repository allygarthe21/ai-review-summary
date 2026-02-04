import { Star } from "lucide-react";

const neonColors = [
  "fill-pink-500 text-pink-500 drop-shadow-[0_0_6px_#ec4899]",
  "fill-cyan-400 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]",
  "fill-purple-500 text-purple-500 drop-shadow-[0_0_6px_#a855f7]",
  "fill-lime-400 text-lime-400 drop-shadow-[0_0_6px_#a3e635]",
  "fill-orange-400 text-orange-400 drop-shadow-[0_0_6px_#fb923c]",
];

const emptyColor = "fill-gray-700 text-gray-700";

export function FiveStarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? neonColors[i] : emptyColor
          }`}
        />
      ))}
    </div>
  );
}
