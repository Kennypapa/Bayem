import Navbar from "../components/navbar";
import Sidebar from '../components/sidebar';
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      {/*=========SIDEBAR=============*/}
      <div className=" w-[200px] h-[100vh] fixed top-0 left-0 bg-white pt-24 shadow-md z-10">

        <div class="mb-4 w-full">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center w-full" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="w-full" role="presentation">
              <button class="inline-block s_btn  hover:bg-[#d3d3d363] border-b w-full py-3 ease-in-out duration-100" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Dashboard</button>
            </li>
            <li class="w-full" role="presentation">
              <button class="inline-block  s_btn  hover:bg-[#d3d3d363] border-b w-full py-3 ease-in-out duration-100" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Roles</button>
            </li>
            <li class="w-full" role="presentation">
              <button class="inline-block  s_btn  hover:bg-[#d3d3d363] border-b w-full py-3 ease-in-out duration-100" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Create New Task</button>
            </li>
            <li class="w-full" role="presentation">
              <button class="inline-block  s_btn  hover:bg-[#d3d3d363] border-b w-full py-3 ease-in-out duration-100" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
            </li>
          </ul>
        </div>

      </div>

      <main>
        <div className="pt-24 ml-52">
          <div id="default-tab-content">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">Dashboard</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">Roles</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard;