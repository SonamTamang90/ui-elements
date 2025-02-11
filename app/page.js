"use client";

import Container from "@/components/shared/Container";
import Link from "next/link";

const elements = [
  {
    id: 1,
    name: "Cards",
    href: "/cards",
    status: "New",
    totalEl: "4",
  },
  {
    id: 2,
    name: "Tables",
    href: "/tables",
    status: "Coming Soon",
    totalEl: "3",
  },
  {
    id: 3,
    name: "Forms",
    href: "/forms",
    status: "Coming Soon",
    totalEl: "6",
  },
  {
    id: 4,
    name: "Dropdowns",
    href: "/dropdowns",
    status: "Coming Soon",
    totalEl: "4",
  },
  {
    id: 5,
    name: "Navbar",
    href: "/navbar",
    status: "Coming Soon",
    totalEl: "6",
  },
  {
    id: 6,
    name: "Footer",
    href: "/footer",
    status: "Coming Soon",
    totalEl: "2",
  },
  {
    id: 7,
    name: "Bento Grid",
    href: "/bento-grid",
    status: "Coming Soon",
    totalEl: "2",
  },

  {
    id: 8,
    name: "Testimonials",
    href: "/testimonials",
    status: "Coming Soon",
    totalEl: "8",
  },
];

const Hero = () => {
  return (
    <section className="py-11 lg:py-20">
      <div className="max-w-xs md:max-w-lg mx-auto text-center">
        <div className="w-max mx-auto bg-green-300/60 text-zinc-200 font-semibold py-0.5 px-4 rounded-full text-sm">
          <span>30+ UI elements</span>
        </div>
        <h1 className="font-bebas text-3xl md:text-5xl text-zinc-200 leading-normal font-extrabold my-3">
          Collections of beautiful UI elements for the web.
        </h1>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Free open source UI elements for your next projects build using{" "}
          <span className="font-semibold text-zinc-200">Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
};

const ComponentCard = ({ component }) => {
  const { name, href, status, totalEl } = component;
  return (
    <Link href={href} className="group relative">
      <div className="relative bg-dark-700 border border-dark-300 p-6 rounded-2xl transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md group-hover:shadow-zinc-100/5">
        <h3 className="font-bebas text-zinc-200 text-xl tracking-wider mb-2">
          {name}
        </h3>
        <p className="text-sm text-zinc-200">{totalEl} UI elements</p>
        {status === "New" && (
          <span className="inline-block absolute -top-2 right-0 bg-yellow-300/70 text-xs font-semibold py-0.5 px-3 rounded-full">
            {status}
          </span>
        )}
      </div>
    </Link>
  );
};

const Listing = () => {
  return (
    <section className="">
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {elements.map((component, index) => (
          <ComponentCard key={index} component={component} />
        ))}
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <Container>
        <Hero />
        <Listing />
      </Container>
    </>
  );
};

export default page;
