import HotelDetail from "@/components/admin/HotelDetail"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const DashboardHotelsDetail = () => {
  return (
      <DashboardAdmin title={"Hotels Detail"} current={"/admin/hotels"}>

        {/* Replace with your content */}
          <HotelDetail />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default DashboardHotelsDetail