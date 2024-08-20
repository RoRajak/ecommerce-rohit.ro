import Survey from "../../components/SueveyComp"
import ProductList from "../../components/ProductList"
import TopSelling from "../../components/TopSelling"
import Banner from "../../components/UI/banner/Banner"
import Brand from "../../components/UI/brand/Brand"
import Footer from "../../components/UI/footer/Footer"
import Hero from "../../components/UI/Hero/Hero"
import NavBar from "../../components/UI/navbar/NavBar"


function Home() {
  return (
    <main>
        <Banner/>
        <NavBar/>
        <Hero/>
        <Brand/>
        <ProductList/>
        <TopSelling/>
        <Survey/>
        <Footer/>
    </main>
  )
}

export default Home