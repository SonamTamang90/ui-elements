"use client";

import BackButton from "@/components/shared/BackButton";
import Container from "@/components/shared/Container";
import Code from "@/components/shared/Code";
import CardTwo from "@/components/cards/CardTwo";
import CardThree from "@/components/cards/CardThree";
import CardFour from "@/components/cards/CardFour";
import FormOne from "@/components/forms/FormOne";

const Hero = () => {
  return (
    <section className="py-11">
      <div className="max-w-xs md:max-w-lg mx-auto text-center">
        <h1 className="font-bebas text-3xl md:text-5xl text-zinc-200 leading-normal font-extrabold my-3">
          Forms UI Elements
        </h1>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Forms collect user input through fields like text boxes, dropdowns and
          buttons.
        </p>
      </div>
    </section>
  );
};

const FormsPage = () => {
  return (
    <div className="">
      <Hero />
      <BackButton />
      <Container>
        <div className="space-y-11 pb-11">
          <FormOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>
      </Container>
    </div>
  );
};

export default FormsPage;
