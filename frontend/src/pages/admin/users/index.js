import UsersList from "@/components/admin/UsersList"
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
    <DashboardAdmin title={"Users List"} current={"/admin/users"}>

      {/* Replace with your content */}
      <UsersList />
      {/* /End replace */}

    </DashboardAdmin>
  )
}

export default Dashboard