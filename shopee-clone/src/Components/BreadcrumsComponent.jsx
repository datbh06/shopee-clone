import PropTypes from "prop-types";
import '../css/BreadcrumsStyle.css'

const BreadcrumbsComponent = ({items}) => (<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        {items.map((item, index) => (<li key={index} className="breadcrumb-item">
            {(<a href="#">{item}</a>)}
        </li>))}
    </ol>
</nav>);

BreadcrumbsComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default BreadcrumbsComponent;
