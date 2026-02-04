import { Product } from "@/lib/types";
import { Review } from "./review";
import { Separator } from "./ui/separator";

export function Reviews({ product }: { product: Product }) {
  const sortedReviews = [...product.reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      <div className="space-y-6">
        {sortedReviews.map((review, index) => (
          <div key={index}>
            <Review review={review} />
            {index < sortedReviews.length - 1 && (
              <Separator className="mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
