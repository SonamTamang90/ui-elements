import ComponentPreview from "../shared/Code";

const Example = () => {
  return (
    <div className="bg-zinc-100 p-6 rounded-2xl">
      <div className="grid grid-cols-2">
        <form className="">
          <div className="mb-6">
            <h3 className="text-lg text-zinc-900 font-semibold">
              Create account
            </h3>
            <p className="text-sm text-zinc-600">
              Join our 100% free creative network
            </p>
          </div>
          <div className="space-y-3">
            <button className="flex items-center gap-2 w-full border border-zinc-200 px-6 py-2 rounded-lg">
              <img src="/google.svg" alt="Google logo" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>
            <button className="flex items-center gap-2 w-full text-zinc-200 bg-zinc-900 border border-zinc-900 px-6 py-2 rounded-lg">
              <img src="/x_dark.svg" alt="Google logo" className="w-4 h-4" />
              <span>Sign up with X</span>
            </button>
          </div>
          <div class="relative py-4">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-zinc-100 px-2 uppercase text-sm text-gray-500">
                Or
              </span>
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Name
            </label>
            <div class="mt-1">
              <input
                type="name"
                name="name"
                id="name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button className="font-semibold flex items-center justify-center w-full text-zinc-200 bg-zinc-900 border border-zinc-900 px-6 py-2 rounded-lg">
            <span>Sign up</span>
          </button>
        </form>
      </div>
    </div>
  );
};

const FormOne = () => {
  return (
    <ComponentPreview title="Sign up Form">
      <Example />
    </ComponentPreview>
  );
};

export default FormOne;
