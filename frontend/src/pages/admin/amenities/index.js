import AddAmenity from "@/components/admin/AddAmenity"
import AmenitiesList from "@/components/admin/AmenitiesList"
import DashboardAdmin from "@/layouts/DashboardAdmin"
import { UserContext } from "@/layouts/LayoutContext"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter()

  useEffect(() => {

    if (user === null || user.role !== "admin")
      router.push("/auth/login")
  }, [])
  return (
    <DashboardAdmin title={"Amenities List"} current={"/admin/amenities"}>

      {/* Replace with your content */}
      <AddAmenity />
      <AmenitiesList />
      {/* /End replace */}

    </DashboardAdmin>
  )
}

export default Dashboard