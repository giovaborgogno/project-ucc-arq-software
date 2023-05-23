import CreateHotel from "@/components/admin/CreateHotel"
import HotelsList from "@/components/admin/HotelsList"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const DashboardHotelsCreate = () => {
  return (
      <DashboardAdmin title={"Create Hotel"} current={"/admin/hotels/create"}>

        {/* Replace with your content */}
          <CreateHotel />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default DashboardHotelsCreate