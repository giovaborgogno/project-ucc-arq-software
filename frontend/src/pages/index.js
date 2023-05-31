
import Banner from '@/components/home/Banner'
import HotelDetail from '@/components/home/HotelDetail'
import HotelsList from '@/components/home/HotelsList'
import MainLayout from '@/layouts/MainLayout'
import { getHotels } from '@/lib/api/hotel'

export async function getServerSideProps(context) {
  const hotels = await getHotels()
  return {
    props: {
      hotels,
    },
  };
}

export default function Home({hotels}) {
  return (
    <>
      <MainLayout title={"Home"}>
        <Banner />
        <HotelsList hotels={hotels}/>

      </MainLayout>
    </>
  )
}
