
import Banner from '@/components/home/Banner'
import HotelDetail from '@/components/home/HotelDetail'
import HotelsList from '@/components/home/HotelsList'
import MainLayout from '@/layouts/MainLayout'
import { getHotels } from '@/lib/api/hotel'
import { useEffect, useState } from 'react'

export async function getServerSideProps(context) {
  const hotels = await getHotels()
  return {
    props: {
      hotels,
    },
  };
}

export default function Home() {

  const [hotels, setHotels] = useState(null)
  const get_hotels = async () => {
  const data = await getHotels()
  setHotels(data)
  }



  useEffect(()=>{
    console.log(hotels)
    
    get_hotels()
    },[])

  return (
    <>
      <MainLayout title={"Home"}>
        <Banner />
        {hotels != null && <HotelsList hotels={hotels}/>}

      </MainLayout>
    </>
  )
}
