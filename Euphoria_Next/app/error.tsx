"use client";

export default function Error(req:any) {
  console.log(req);
  
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          There was problem
        </p>
        <p className="mt-4 text-gray-500">
          {req.error.message}
        </p>
        <a
          type="button"
          onClick={req.reset}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer select-none"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}