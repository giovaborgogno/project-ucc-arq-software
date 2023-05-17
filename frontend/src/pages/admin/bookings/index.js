import DashboardBookings from "@/components/admin/DashboardBookings"
import UsersList from "@/components/admin/UsersList"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const DashboardAdminBookings = () => {
  return (
      <DashboardAdmin title={"Bookings"} current={"/admin/bookings"}>

        {/* Replace with your content */}
          <DashboardBookings />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default DashboardAdminBookings