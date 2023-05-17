import DashboardBookings from "@/components/dashboard/DashboardBookings"
import DashboardUser from "@/layouts/DashboardUser"
import MainLayout from "@/layouts/MainLayout"

const DashboardBookingsPage = () => {
  return (
    <MainLayout title={"Dashboard"}>
      <DashboardUser title={"Bookings List"} current={"/dashboard/bookings"}>

        {/* Replace with your content */}
          {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
        <DashboardBookings />
        {/* /End replace */}
        
      </DashboardUser>
    </MainLayout>
  )
}

export default DashboardBookingsPage