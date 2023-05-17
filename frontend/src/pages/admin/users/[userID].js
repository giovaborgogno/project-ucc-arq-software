import UserDetail from "@/components/admin/UserDetail"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const DashboardUserDetail = () => {
  return (
      <DashboardAdmin title={"User Detail"} current={"/admin/users"}>

        {/* Replace with your content */}
          <UserDetail />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default DashboardUserDetail