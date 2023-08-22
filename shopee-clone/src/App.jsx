import './App.css'
import ProductDetailComponent from "./Components/ProductDetailComponent.jsx";
import BreadcrumbsComponent from "./Components/BreadcrumsComponent.jsx";
import NavBarComponent from "./Components/NavBarComponent.jsx";
import TopNavbarComponent from "./Components/TopNavbarComponent.jsx";
import RetailInfoComponent from "./Components/RetailInfoComponent.jsx";

const App = () => {
    const items = ['Sendo.vn', 'Đồ điện gia dụng', 'Nồi điện, nồi cơm điện', 'Nồi áp suất điện'];

    return (<div>
        <div>
            <TopNavbarComponent/>
            <NavBarComponent/>
        </div>

        <div className="max-w-7xl mx-auto pt-3 pb-0 px-8">
            <BreadcrumbsComponent items={items}/>
        </div>
        <div className="max-w-7xl mx-auto p-8">
            <ProductDetailComponent/>
            <RetailInfoComponent/>
        </div>

    </div>)
}
export default App
