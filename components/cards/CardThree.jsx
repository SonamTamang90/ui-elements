"use client";
import ComponentPreview from "../shared/Code";

const teams = [
  {
    id: 1,
    title: "Sushi Chef",
    name: "Masharu Morimotio",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 2,
    title: "Sushi Chef",
    name: "Masharu Morimotio",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 3,
    title: "Sushi Chef",
    name: "Masharu Morimotio",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 4,
    title: "Sushi Chef",
    name: "Masharu Morimotio",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
];

const Example = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {teams.map((team) => (
        <div className="relative rounded-2xl h-[460px] overflow-hidden flex flex-col justify-end">
          <img
            src={team.img}
            className="absolute inset-x-0 top-0 size-full aspect-square object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
          />
          <div className="relative p-6">
            <span className="text-sm bg-gradient-to-r from-[#FFF1BE] from-28% via-[#EE87CB] via-70% to-[#B060FF] bg-clip-text text-transparent">
              {team.title}
            </span>
            <div className="text-zinc-200 space-y-2">
              <p className="text-lg font-semibold">{team.name}</p>
              <p className="">{team.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardThree = () => {
  return (
    <ComponentPreview title="Teams Card">
      <Example />
    </ComponentPreview>
  );
};

export default CardThree;
