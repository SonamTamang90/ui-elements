"use client";
import BackButton from "@/components/shared/BackButton";
import Container from "@/components/shared/Container";
import TableOne from "@/components/tables/TableOne";

const Hero = () => {
  return (
    <section className="py-11">
      <div className="max-w-xs md:max-w-lg mx-auto text-center">
        <h1 className="font-bebas text-3xl md:text-5xl text-zinc-200 leading-normal font-extrabold my-3">
          Tables UI Elements
        </h1>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Tables organize data in rows and columns to display structured
          information.
        </p>
      </div>
    </section>
  );
};

const TablesPage = () => {
  return (
    <div className="">
      <Hero />
      <BackButton />
      <Container>
        <div className="space-y-11 pb-11">
          <TableOne />
        </div>
      </Container>
    </div>
  );
};

export default TablesPage;
