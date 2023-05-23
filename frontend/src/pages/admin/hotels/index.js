import HotelsList from "@/components/admin/HotelsList"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const DashboardHotelsList = () => {
  return (
      <DashboardAdmin title={"Hotels List"} current={"/admin/hotels"}>

        {/* Replace with your content */}
          <HotelsList />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default DashboardHotelsList