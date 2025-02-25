import { jsx } from "react/jsx-runtime";
import ComponentPreview from "../shared/Code";

const people = [
  {
    name: "Williams Garcia",
    title: "CTO",
    email: "williams.garcia@example.com",
    role: "Admin",
  },
  {
    name: "Lindsey Travez",
    title: "Business Manager",
    email: "lindsey.travez@example.com",
    role: "Member",
  },
  {
    name: "John Walton",
    title: "Senior Front-end Developer",
    email: "John.walton@example.com",
    role: "Member",
  },
  {
    name: "James Williams",
    title: "Front-end Developer",
    email: "james.willams@example.com",
    role: "Member",
  },
];

const htmlCode = `<div className="bg-zinc-100 overflow-hidden rounded-2xl border border-zinc-300 shadow-md">
      <div className="min-w-full overflow-x-auto">
        <table className="w-full text-sm text-left divide-y divide-zinc-300">
          <thead className="min-w-full bg-zinc-200 h-11">
            <tr>
              <th className="py-3.5 pr-3 pl-4">Name</th>
              <th className="px-3 py-3.5">Title</th>
              <th className="px-3 py-3.5">Email</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody>
              <tr className="even:bg-zinc-200/40">
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  William Garcia
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  CTO
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  williams.garcia@example.com
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  Admin
                </td>
              </tr>
              <!-- Add More people... -->
          </tbody>
        </table>
      </div>
    </div>
`;

const reactCode = `
const people = [
  {
    name: "Williams Garcia",
    title: "CTO",
    email: "williams.garcia@example.com",
    role: "Admin",
  },
  // Add more team...
];
<div className="bg-zinc-100 overflow-hidden rounded-2xl border border-zinc-300 shadow-md">
      <div className="min-w-full overflow-x-auto">
        <table className="w-full text-sm text-left divide-y divide-zinc-300">
          <thead className="min-w-full bg-zinc-200 h-11">
            <tr>
              <th className="py-3.5 pr-3 pl-4">Name</th>
              <th className="px-3 py-3.5">Title</th>
              <th className="px-3 py-3.5">Email</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr className="even:bg-zinc-200/40">
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  {person.name}
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.title}
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.email}
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
              <th className="px-3 py-3.5">Email</th>
              <th className="px-3 py-3.5">Role</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr className="even:bg-zinc-200/40">
                <td className="py-4 pr-3 pl-4 text-zinc-900 font-semibold whitespace-nowrap">
                  {person.name}
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.title}
                </td>
                <td className="px-3 py-4 text-zinc-600 whitespace-nowrap">
                  {person.email}
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

const TableTwo = () => {
  return (
    <ComponentPreview
      title="Table Two"
      reactCode={reactCode}
      htmlCode={htmlCode}
    >
      <Example />
    </ComponentPreview>
  );
};

export default TableTwo;
