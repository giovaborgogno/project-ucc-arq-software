import DashboardUserProfile from "@/components/dashboard/DashboardUser"
import DashboardUser from "@/layouts/DashboardUser"
import { UserContext } from "@/layouts/LayoutContext"
import MainLayout from "@/layouts/MainLayout"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);  
  const router = useRouter()

  useEffect(()=>{

    if(user === null)
    router.push("/auth/login")
  },[])

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