"use client";
import { HiOutlineClock, HiStar } from "react-icons/hi2";
import ComponentPreview from "../shared/Code";

const destinations = [
  {
    id: 1,
    name: "Punakha Dzong Monastry",
    location: "Punakha, Bhutan",
    img: "https://images.unsplash.com/photo-1608236475016-1dcc7a260326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$299",
    booking: "3 days 2 nights",
    rating: "4.8",
  },
  {
    id: 2,
    name: "Burj Al Arab Jumeirah",
    location: "Dubai, United Arab Emirates",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$399",
    booking: "2 days 1 nights",
    rating: "4.5",
  },
  {
    id: 3,
    name: "Schaffhausen Village",
    location: "Grimentz, Switzerland",
    img: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$499",
    booking: "4 days 3 nights",
    rating: "4.2",
  },
  {
    id: 4,
    name: "Bedugul Water Temple ",
    location: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$499",
    booking: "5 days 4 nights",
    rating: "4.5",
  },
];

const Exmaple = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="relative rounded-2xl overflow-hidden bg-zinc-200 flex flex-col group cursor-pointer"
        >
          <img
            src={destination.img}
            alt={destination.name}
            className="size-full aspect-square object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
          />
          {/* Card details goes here */}
          <div className="text-zinc-900 p-5 border border-zinc-300">
            <p className="text-sm text-zinc-600">{destination.location}</p>
            <h3 className="text-base font-semibold transition-all duration-300 group-hover:underline">
              {destination.name}
            </h3>
            <hr className="border-0.5 border-dashed border-zinc-400/40 -mx-5 my-5" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600 flex items-center gap-1">
                <HiOutlineClock size={22} />
                <span>{destination.booking}</span>
              </p>
              <p className="text-lg">{destination.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 absolute top-2 left-2 bg-zinc-900 py-1 px-2 rounded-md">
            <HiStar size={18} className="text-yellow-600" />
            <p className="text-sm text-zinc-200 font-semibold">
              {destination.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const htmlCode = `<div className="grid lg:grid-cols-4 gap-6">
      <div className="relative rounded-2xl overflow-hidden bg-zinc-200 flex flex-col group cursor-pointer">
        <img
          src="..."
          alt="Punakha Dzong"
          className="size-full aspect-square object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
        />
        {/* Card details goes here */}
        <div className="text-zinc-900 p-5 border border-zinc-300">
          <p className="text-sm text-zinc-600">Punakha, Bhutan</p>
          <h3 className="text-base font-semibold transition-all duration-300 group-hover:underline">
            Punakha Dzong Monastry
          </h3>
          <hr className="border-0.5 border-dashed border-zinc-400/40 -mx-5 my-5" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 flex items-center gap-1">
              <HiOutlineClock size={22} />
              <span>{destination.booking}</span>
            </p>
            <p className="text-lg">$499</p>
          </div>
        </div>

        <div className="flex items-center gap-1 absolute top-2 left-2 bg-zinc-900 py-1 px-2 rounded-md">
          <HiStar size={18} className="text-yellow-600" />
          <p className="text-sm text-zinc-200 font-semibold">4.5</p>
        </div>
      </div>
    </div>`;

const reactCode = `
const destinations = [
  {
    id: 1,
    name: "Punakha Dzong Monastry",
    location: "Punakha, Bhutan",
    img: "https://images.unsplash.com/photo-1608236475016-1dcc7a260326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$299",
    booking: "3 days 2 nights",
    rating: "4.8",
  },

  // Add more items...
]

<div className="grid lg:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="relative rounded-2xl overflow-hidden bg-zinc-200 flex flex-col group cursor-pointer"
        >
          <img
            src={destination.img}
            alt={destination.name}
            className="size-full aspect-square object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
          />
          {/* Card details goes here */}
          <div className="text-zinc-900 p-5 border border-zinc-300">
            <p className="text-sm text-zinc-600">{destination.location}</p>
            <h3 className="text-base font-semibold transition-all duration-300 group-hover:underline">
              {destination.name}
            </h3>
            <hr className="border-0.5 border-dashed border-zinc-400/40 -mx-5 my-5" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600 flex items-center gap-1">
                <HiOutlineClock size={22} />
                <span>{destination.booking}</span>
              </p>
              <p className="text-lg">{destination.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 absolute top-2 left-2 bg-zinc-900 py-1 px-2 rounded-md">
            <HiStar size={18} className="text-yellow-600" />
            <p className="text-sm text-zinc-200 font-semibold">
              {destination.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
`;

const CardOne = () => {
  return (
    <section>
      <ComponentPreview
        title="Destination Travel Card"
        htmlCode={htmlCode}
        reactCode={reactCode}
      >
        <Exmaple />
      </ComponentPreview>
    </section>
  );
};

export default CardOne;
