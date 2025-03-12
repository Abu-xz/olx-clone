import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'


function Home() {



    return (
        <>
            <Navbar />
            <div className="p-3 flex justify-center">
                <div className="w-full max-w-7xl bg-cyan-50 p-5 rounded-md">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-semibold ml-5">More featured Item to purchase</h1>
                        <button className="underline font-bold hover:no-underline mr-5 cursor-pointer">View more</button>
                    </div>

                    <ProductList />
                </div>
            </div>

            <div className='flex justify-center flex-col p-5'>
                <div className="w-full max-w-7x p-5 rounded-md">

                    <h1 className='text-2xl font-semibold p-2 ml-5'>Fresh Recommendations</h1>

                    <ProductList />
                    <ProductList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
