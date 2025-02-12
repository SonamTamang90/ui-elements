"use client";

import ComponentPreview from "../shared/Code";

const teams = [
  {
    id: 1,
    name: "Kristin Watson",
    role: "VP, Human Resources",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 2,
    role: "VP, User Experience",
    name: "Leonard krasner",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 3,
    name: "Christopher Campbell",
    role: "Pricipal Designer",
    img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
  {
    id: 4,
    name: "Emily Selman",
    role: "Senior Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "World’s 50 best chefs list 2019",
  },
];

const Example = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {teams.map((team) => (
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 text-center text-zinc-200 p-8 space-y-6">
          <div className="size-48 overflow-hidden rounded-full mx-auto">
            <img
              src={team.img}
              alt={team.name}
              className="size-full object-cover"
            />
          </div>
          <h3>
            <span className="block font-semibold tracking-tight">
              {team.name}
            </span>
            <span className="block text-sm text-zinc-400">{team.role}</span>
          </h3>

          <ul className="flex items-center justify-center gap-x-6">
            <li>
              <a href="#">
                <span className="sr-only">X</span>
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="text-zinc-400 hover:text-zinc-200">
                <span class="sr-only">LinkedIn</span>
                <svg
                  class="size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const CardFour = () => {
  return (
    <ComponentPreview title="Teams Card Two">
      <Example />
    </ComponentPreview>
  );
};

export default CardFour;
