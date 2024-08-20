type Rating = {
  rating: number;
};
const StarRating = ({ rating }: Rating) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

type ReviewCardType = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const ReviewCard = ({ name, rating, comment, date }: ReviewCardType) => {
  return (
    <div className="mb-6 rounded-xl border border-gray-300 p-2 sm:w-[610px] ">
      <div className="flex items-center mb-2">
        <StarRating rating={rating} />
        <span className="ml-2 font-semibold">{name}</span>
        <span className="ml-2 bg-green-500 rounded-full w-2 h-2"></span>
      </div>
      <p className="text-gray-700 mb-2">{comment}</p>
      <p className="text-sm text-gray-500">Posted on {date}</p>
    </div>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      name: "Samantha D.",
      rating: 5,
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 14, 2023",
    },
    {
      name: "Alex M.",
      rating: 4,
      comment:
        "This t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
    },
    {
      name: "Ethan R.",
      rating: 4,
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
    },
    {
      rating: 5,
      name: "Morgan S.",
      comment:
        "Excellent customer service and fast shipping! I am very happy with my purchase from Shop.co.",
      date: "August 16, 2023",
    },
    {
      rating: 4,
      name: "Taylor W.",
      comment:
        "I love the variety of styles available. The website is easy to navigate, and the prices are reasonable.",
      date: "August 16, 2023",
    },
    {
      rating: 2,
      name: "Jordan R.",
      comment:
        "I had some issues with my order. The customer service was helpful, but it took a while to get everything sorted out.",
      date: "August 16, 2023",
    },
    {
      rating: 5,
      name: "Casey B.",
      comment:
        "Shop.co exceeded my expectations. The clothes are stylish and high-quality. I will definitely be shopping here again.",
      date: "August 16, 2023",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 sm:max-w-full">
      <div className=" mb-6  ">
        <div className="space-x-4 sm:space-x-0 sm:flex sm:justify-around">
          <button className="font-semibold hover:border-b-2 border-black">
            Product Details
          </button>
          <button className="font-semibold hover:border-b-2 border-black">
            Rating & Reviews
          </button>
          <button className="font-semibold hover:border-b-2 border-black">
            FAQs
          </button>
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="flex justify-around items-center mb-6">
          <button className="font-semibold">All Reviews (451)</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Write a Review
          </button>
        </div>
        <div className="flex flex-col justify-center sm:flex-wrap sm:flex-row gap-x-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 sm:max-w-max sm:px-3">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
