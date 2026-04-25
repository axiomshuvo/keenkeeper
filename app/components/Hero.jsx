export default function Hero() {
  return (
    <>
      <div className="hero mt-20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-800">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-slate-500 ">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn btn-primary  bg-teal-800 ">
              + Add a Friend
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              <div className="stats flex flex-col items-center py-10 bg-base-100 rounded-lg shadow-md cursor-pointer ">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  10
                </h2>
                <p>Total Friends</p>
              </div>
              <div className="stats flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  3
                </h2>
                <p>On Track</p>
              </div>
              <div className="stats flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  6
                </h2>
                <p>Need Attention</p>
              </div>
              <div className="stats flex flex-col items-center py-10  bg-base-100 rounded-lg shadow-md cursor-pointer">
                <h2 className="text-teal-800 text-3xl font-semibold mb-2.5">
                  10
                </h2>
                <p>Interactions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
