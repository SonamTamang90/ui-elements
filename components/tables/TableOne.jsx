import ComponentPreview from "../shared/Code";

const Example = () => {
  return (
    <div className="flow-root overflow-hidden border border-dark-300 rounded-2xl">
      <table className="w-full text-left">
        <thead className="bg-dark-900 border-b border-dark-300">
          <tr>
            <th class="relative isolate py-3.5 px-6 text-left text-sm font-semibold text-zinc-200">
              Name
            </th>
            <th class="hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-200 sm:table-cell">
              Title
            </th>
            <th class="hidden px-3 py-3.5 text-left text-sm font-semibold text-zinc-200 md:table-cell">
              Email
            </th>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-zinc-200">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-dark-300 border-b">
            <td class="relative py-4 px-6 text-sm font-medium text-zinc-200 ">
              Kezang Dorji
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
              CTO
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
              kezang.dorji@example.com
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">Member</td>
          </tr>
          <tr className="border-dark-300 border-b">
            <td class="relative py-4 px-6 text-sm font-medium text-zinc-200">
              Jigme Loday
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
              Team Manager
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
              jigme.loday@example.com
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">Member</td>
          </tr>
          <tr className="border-dark-300 border-b">
            <td class="relative py-4 px-6 text-sm font-medium text-zinc-200">
              Leela Bista
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
              Business Analyst
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
              leela.bista@example.com
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">Member</td>
          </tr>
          <tr>
            <td class="relative py-4 px-6 text-sm font-medium text-zinc-200">
              Sonam Tamang
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
              Full Stack Developer
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
              sonam.tamang@example.com
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">Member</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TableOne = () => {
  return (
    <ComponentPreview title="Table One">
      <Example />
    </ComponentPreview>
  );
};

export default TableOne;
