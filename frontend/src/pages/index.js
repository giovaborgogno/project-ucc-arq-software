
import Banner from '@/components/home/Banner'
import HotelDetail from '@/components/home/HotelDetail'
import HotelsList from '@/components/home/HotelsList'
import MainLayout from '@/layouts/MainLayout'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <MainLayout title={"Home"}>
        <Banner />
        <HotelsList />

      </MainLayout>
    </>
  )
}
