"use client";

import { jsx } from "react/jsx-runtime";
import ComponentPreview from "../shared/Code";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const htmlCode = `<div className="bg-zinc-100 overflow-hidden rounded-2xl border border-zinc-300 shadow-md">
      <div className="min-w-full overflow-x-auto">
        <table className="w-full text-sm text-left divide-y divide-zinc-300">
          <thead className="min-w-full bg-zinc-200 h-11">
            <tr>
              <th className="py-3.5 pr-3 pl-4">Name</th>
              <th className="px-3 py-3.5">Title</th>
              <th className="px-3 py-3.5">Status</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-300">
              <tr>
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="size-11 shrink-0">
                      <img
                        alt="Lindsay Walton"
                        src="https://placehold.co/600x400"
                        className="size-11 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        Lindsay Walton
                      </div>
                      <div className="mt-1 text-gray-500">lindsay.walton@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                 Front-end Developer
                </td>
                <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Active
                  </span>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  Member
                </td>
              </tr>
              <!-- Add more ... -->
          </tbody>
        </table>
      </div>
    </div>
`;

const reactCode = `
const people = [
  name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  // Add more team...
];

<div className="bg-zinc-100 overflow-hidden rounded-2xl border border-zinc-300 shadow-md">
      <div className="min-w-full overflow-x-auto">
        <table className="w-full text-sm text-left divide-y divide-zinc-300">
          <thead className="min-w-full bg-zinc-200 h-11">
            <tr>
              <th className="py-3.5 pr-3 pl-4">Name</th>
              <th className="px-3 py-3.5">Title</th>
              <th className="px-3 py-3.5">Status</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-300">
            {people.map((person) => (
              <tr>
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="size-11 shrink-0">
                      <img
                        alt=""
                        src={person.image}
                        className="size-11 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {person.name}
                      </div>
                      <div className="mt-1 text-gray-500">{person.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.title}
                </td>
                <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Active
                  </span>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
`;

const Example = () => {
  return (
    <div className="bg-zinc-100 overflow-hidden rounded-2xl border border-zinc-300 shadow-md">
      <div className="min-w-full overflow-x-auto">
        <table className="w-full text-sm text-left divide-y divide-zinc-300">
          <thead className="min-w-full bg-zinc-200 h-11">
            <tr>
              <th className="py-3.5 pr-3 pl-4">Name</th>
              <th className="px-3 py-3.5">Title</th>
              <th className="px-3 py-3.5">Status</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-300">
            {people.map((person) => (
              <tr>
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="size-11 shrink-0">
                      <img
                        alt=""
                        src={person.image}
                        className="size-11 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {person.name}
                      </div>
                      <div className="mt-1 text-gray-500">{person.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.title}
                </td>
                <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Active
                  </span>
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableThree = () => {
  return (
    <ComponentPreview
      title="Table Three"
      reactCode={reactCode}
      htmlCode={htmlCode}
    >
      <Example />
    </ComponentPreview>
  );
};

export default TableThree;
