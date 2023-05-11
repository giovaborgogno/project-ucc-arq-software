
import MainLayout from '@/layouts/MainLayout'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <MainLayout title={"Home"}>
        <p className="text-3xl font-bold ">
          Usen este link para ver mas componentes: 
          <Link href={"https://tailwindui.com/components"} className='underline text-red-500'> https://tailwindui.com/components</Link>
        </p>
      </MainLayout>
    </>
  )
}
