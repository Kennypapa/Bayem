
const Dashboard = () => {

  return (

    <div className="e_pages">
      <div className="bg-white rounded-lg pb-4 px-3 pt-3">
        <div>
          <p className="text-2xl font-medium">
            Hello, admin.
          </p>
          <p className="text-sm font-normal">
            Welcome to your dashboard.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-3 w-full gap-6 max-w-[1300px] mt-8">

            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#60994c]">

              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  No. of Roles
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>
            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#60994c]">

              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  No. of Workers
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>
            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#60994c]">

              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  No. of Roles
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>
            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#60994c]">
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  No. of Farm Machines
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>
            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#60994c]">

              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  No. of Farm Tools
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>

            </div>

          </div>

          <div className="w-full flex mt-4">
            <div className=" w-full border mr-3">

            </div>
            <div className=" rounded-md min-w-[300px] h-[300px] bg-[#f8f8f8]">
              <p className="uppercase font-semibold text-center pt-3">Upcoming Tasks</p>
              <div className="mt-3">
                <ul className=" list-disc pl-7">
                  <li>
                    Tractor fixing
                  </li>
                  <li>
                    Garden cutting
                  </li>
                  <li>
                    Poultry Cleaning
                  </li>
                  <li>
                    Potatoe plantation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;