"use client";

import ComponentPreview from "../shared/Code";
import { HiStar } from "react-icons/hi2";

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    reviews: "23 reviews",
    img: "https://zone-ui.vercel.app/assets/images/z-product/product-5.webp",
    rating: "4.8",
    description: "Explore the newest iPhone 15 with cutting-edge features",
    price: "$1499",
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    reviews: "23 reviews",
    img: "https://zone-ui.vercel.app/assets/images/z-product/product-5.webp",
    rating: "4.8",
    description: "Explore the newest iPhone 15 with cutting-edge features",
    price: "$1499",
  },
  {
    id: 3,
    name: "Apple iPhone 15",
    reviews: "23 reviews",
    img: "https://zone-ui.vercel.app/assets/images/z-product/product-5.webp",
    rating: "4.8",
    description: "Explore the newest iPhone 15 with cutting-edge features",
    price: "$1499",
  },
  {
    id: 4,
    name: "Apple iPhone 15",
    reviews: "23 reviews",
    img: "https://zone-ui.vercel.app/assets/images/z-product/product-5.webp",
    rating: "4.8",
    description: "Explore the newest iPhone 15 with cutting-edge features",
    price: "$1499",
  },
];

const Example = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div className="group relative bg-transparent border border-zinc-600 p-5 rounded-2xl transition-colors duration-300 hover:bg-zinc-200 cursor-pointer space-y-5">
          <img
            src={product.img}
            className="aspect-square bg-zinc-200 rounded-2xl"
          />

          <div className="text-zinc-200 group-hover:text-zinc-900 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <a href="#" className="text-xs font-semibold">
                (<span className="hover:underline">{product.reviews}</span>)
              </a>
            </div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <HiStar key={index} size={22} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-600">
              {product.description}
            </p>
            <p className="text-lg font-bold text-zinc-200 group-hover:text-zinc-900">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const htmlCode = `
     <div className="grid lg:grid-cols-4 gap-6">
      <div className="group relative bg-transparent border border-zinc-600 p-5 rounded-2xl transition-colors duration-300 hover:bg-zinc-200 cursor-pointer space-y-5">
        <img
          src="https://placehold.co/600x400"
          className="aspect-square bg-zinc-200 rounded-2xl"
        />
        <div className="text-zinc-200 group-hover:text-zinc-900 space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Apple iPhone 15</h3>
            <a href="#" className="text-xs font-semibold">
              (<span className="hover:underline">23 reviews</span>)
            </a>
          </div>
          <div className="flex items-center">
            <HiStar size={22} className="text-yellow-500" />
            <HiStar size={22} className="text-yellow-500" />
            <HiStar size={22} className="text-yellow-500" />
            <HiStar size={22} className="text-yellow-500" />
            <HiStar size={22} className="text-yellow-500" />
          </div>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-600">
            Explore the newest iPhone 15 with cutting-edge features
          </p>
          <p className="text-lg font-bold text-zinc-200 group-hover:text-zinc-900">
            $1499
          </p>
        </div>
      </div>
    </div>
`;

const reactCode = `
const products = [
    {
      id: 1,
      name: "Apple iPhone 15",
      reviews: "23 reviews",
      img: "https://zone-ui.vercel.app/assets/images/z-product/product-5.webp",
      rating: "4.8",
      description: "Explore the newest iPhone 15 with cutting-edge features",
      price: "$1499",
    },
  // Add more item ...
]

<div className="grid lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div className="group relative bg-transparent border border-zinc-600 p-5 rounded-2xl transition-colors duration-300 hover:bg-zinc-200 cursor-pointer space-y-5">
        <img
          src={product.img}
          className="aspect-square bg-zinc-200 rounded-2xl"
        />

        <div className="text-zinc-200 group-hover:text-zinc-900 space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <a href="#" className="text-xs font-semibold">
              (<span className="hover:underline">{product.reviews}</span>)
            </a>
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <HiStar key={index} size={22} className="text-yellow-500" />
            ))}
          </div>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-600">
            {product.description}
          </p>
          <p className="text-lg font-bold text-zinc-200 group-hover:text-zinc-900">
            {product.price}
          </p>
        </div>
      </div>
    ))}
</div>`;

const CardTwo = () => {
  return (
    <section className="">
      <ComponentPreview
        title="Product E-commerce Card"
        reactCode={reactCode}
        htmlCode={htmlCode}
      >
        <Example />
      </ComponentPreview>
    </section>
  );
};

export default CardTwo;
