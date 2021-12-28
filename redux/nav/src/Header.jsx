import React from "react";

import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div class="flex-grow">Awesome Header</div>
      <div>
        {count}

        <button
          onClick={clear}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};
