import './App.css'
import ProductDetailComponent from "./Components/MainComponents/ProductDetailComponent.jsx";
import BreadcrumbsComponent from "./Components/HeaderComponents/BreadcrumsComponent.jsx";
import NavBarComponent from "./Components/HeaderComponents/NavBarComponent.jsx";
import TopNavbarComponent from "./Components/HeaderComponents/TopNavbarComponent.jsx";
import RetailInfoComponent from "./Components/MainComponents/RetailInfoComponent.jsx";
import {useState} from "react";
import DescriptionComponent from "./Components/MainComponents/DescriptionComponent.jsx";
import ReviewComponent from "./Components/MainComponents/ReviewComponent.jsx";
import QuestioningComponent from "./Components/MainComponents/QuestioningComponent.jsx";
import RelatedProductsComponents from "./Components/MainComponents/RelatedProductsComponents.jsx";

const App = () => {
    const items = ['Sendo.vn', 'Đồ điện gia dụng', 'Nồi điện, nồi cơm điện', 'Nồi áp suất điện'];
    const [cartCount, setCartCount] = useState(0);
    return (<div>
        <header>
            <div>
                <TopNavbarComponent/>
                <NavBarComponent cartCount={cartCount}/>
            </div>

            <div className="max-w-7xl mx-auto pt-3 pb-0 px-8">
                <BreadcrumbsComponent items={items}/>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto p-8">
                <ProductDetailComponent setCartCount={setCartCount}/>
                <div className="flex lg:flex-row gap-6 rounded-xl">
                    <div style={{maxHeight: '800px', maxWidth: '600px'}}>
                        <RetailInfoComponent style={{flex: 1}}/>
                    </div>
                    <div className="overflow-y-scroll  hide-scrollbar" style={{maxHeight: '580px'}}>
                        <DescriptionComponent style={{flex: 5}}/>
                        <ReviewComponent style={{flex: 5}}/>
                        <QuestioningComponent style={{flex: 5}}/>
                    </div>
                </div>
                <RelatedProductsComponents/>
            </div>
        </main>
        <footer>
        </footer>
    </div>)
}
export default App
