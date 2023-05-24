import HotelDetail from "@/components/admin/HotelDetail"
import DashboardAdmin from "@/layouts/DashboardAdmin"

import { UserContext } from "@/layouts/LayoutContext"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

const DashboardHotelsDetail = () => {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter()

  useEffect(() => {

    if (user === null || user.role !== "admin")
      router.push("/auth/login")
  }, [])
  return (
    <DashboardAdmin title={"Hotels Detail"} current={"/admin/hotels"}>

      {/* Replace with your content */}
      <HotelDetail />
      {/* /End replace */}

    </DashboardAdmin>
  )
}

export default DashboardHotelsDetail