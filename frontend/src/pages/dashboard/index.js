import DashboardUser from "@/layouts/DashboardUser"
import MainLayout from "@/layouts/MainLayout"

const Dashboard = () => {
  return (
    <MainLayout title={"Dashboard"}>
      <DashboardUser title={"Dashboard"}>

        {/* Replace with your content */}
        <div className="p-4">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
        {/* /End replace */}
        
      </DashboardUser>
    </MainLayout>
  )
}

export default Dashboard