import './App.css'
import ProductDetailComponent from "./Components/ProductDetailComponent.jsx";
import BreadcrumbsComponent from "./Components/BreadcrumsComponent.jsx";
import NavBarComponent from "./Components/NavBarComponent.jsx";
import TopNavbarComponent from "./Components/TopNavbarComponent.jsx";
import RetailInfoComponent from "./Components/RetailInfoComponent.jsx";
import {useState} from "react";
import DescriptionComponent from "./Components/DescriptionComponent.jsx";

const App = () => {
    const items = ['Sendo.vn', 'Đồ điện gia dụng', 'Nồi điện, nồi cơm điện', 'Nồi áp suất điện'];
    const [cartCount, setCartCount] = useState(0);
    return (<div>
        <div>
            <TopNavbarComponent/>
            <NavBarComponent cartCount={cartCount}/>
        </div>

        <div className="max-w-7xl mx-auto pt-3 pb-0 px-8">
            <BreadcrumbsComponent items={items}/>
        </div>
        <div className="max-w-7xl mx-auto p-8">
            <ProductDetailComponent setCartCount={setCartCount}/>
            <div className="flex lg:flex-row gap-6 rounded-xl">
                <RetailInfoComponent style={{flex: 1}}/>
                <DescriptionComponent style={{flex: 5}}/>
            </div>

        </div>

    </div>)
}
export default App
