"use client";
import { useRouter } from "next/navigation";
import BackButton from "@/components/shared/BackButton";
import Container from "@/components/shared/Container";
import CardOne from "@/components/cards/CardOne";
import Code from "@/components/shared/Code";

const Hero = () => {
  return (
    <section className="py-11">
      <div className="max-w-xs md:max-w-lg mx-auto text-center">
        <h1 className="font-bebas text-3xl md:text-5xl text-zinc-200 leading-normal font-extrabold my-3">
          Card UI Elements
        </h1>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Cards are containers that display content such as text, images,
          buttons, and lists.
        </p>
      </div>
    </section>
  );
};

const CardsPage = () => {
  return (
    <div className="">
      <Hero />
      <BackButton />
      <Container>
        <CardOne />
      </Container>
    </div>
  );
};

export default CardsPage;
