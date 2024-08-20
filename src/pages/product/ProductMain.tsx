import NavBar from '../../components/UI/navbar/NavBar'
import Footer from '../../components/UI/footer/Footer'
import SingleProduct from '../../components/SingleProduct'
import ReviewSection from '../../components/ReviewSection'

function ProductMain() {
  return (
    <main>
      <NavBar/>
      <SingleProduct/>
      <ReviewSection/>
      <Footer/>
    </main>
  )
}

export default ProductMain