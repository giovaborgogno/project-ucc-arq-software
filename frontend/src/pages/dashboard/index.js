import DashboardUserProfile from "@/components/dashboard/DashboardUser"
import DashboardUser from "@/layouts/DashboardUser"
import MainLayout from "@/layouts/MainLayout"

const Dashboard = () => {
  return (
    <MainLayout title={"Dashboard"} >
      <DashboardUser title={"User Information"} current={"/dashboard"}>

        {/* Replace with your content */}
          {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
        <DashboardUserProfile />
        {/* /End replace */}
        
      </DashboardUser>
    </MainLayout>
  )
}

export default Dashboard