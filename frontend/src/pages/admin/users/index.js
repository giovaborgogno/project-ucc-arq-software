import UsersList from "@/components/admin/UsersList"
import DashboardAdmin from "@/layouts/DashboardAdmin"

const Dashboard = () => {
  return (
      <DashboardAdmin title={"Users List"} current={"/admin/users"}>

        {/* Replace with your content */}
          <UsersList />
        {/* /End replace */}
        
      </DashboardAdmin>
  )
}

export default Dashboard