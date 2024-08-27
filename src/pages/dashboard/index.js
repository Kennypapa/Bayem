
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-users text-white"></i>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  Total Workers
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  20
                </p>
              </div>
            </div>

            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-person text-white text-2xl"></i>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  Male
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>

            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-person text-white text-2xl"></i>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  Female
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  8
                </p>
              </div>
            </div>

            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-tractor text-white"></i>
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
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-screwdriver-wrench text-white" ></i>
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

            <div className=" w-full rounded-lg bg-[#f8f8f8] px-4 h-[130px] pt-3">
              <div className="w-[50px] h-[50px] mb-3 rounded-full bg-[#ff9c40] flex justify-center items-center">
                <i class="fa-solid fa-screwdriver-wrench text-white" ></i>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#7a7a7a] font-medium">
                  Available Tasks
                </p>
                <p className="text-[#7a7a7a] text-2xl font-semibold">
                  13
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Dashboard;
