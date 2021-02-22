import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/nponline.scss"

import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas);


import Header from "../components/header/Header"
import Index from "../components/Index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Documentation from "../components/Documentation";
import Container from "react-bootstrap/Container";
import Download from "../components/Download";
import CompoundBrowser from "../components/compoundbrowser/CompoundBrowser";
import NotFound from "../components/NotFound";
import SearchResult from "../components/SearchResult";
import ChemSearchResult from "../components/ChemSearchResult";
import StructureSearch from "../components/StructureSearch";
import AdvancedSearch from "../components/AdvancedSearch";
import NaturalProductCompoundCard from "../components/compoundcard/NaturalProductCompoundCard";
import Footer from "../components/footer/Footer";

const React = require("react");
const ReactDOM = require("react-dom");

if (process.env.NODE_ENV !== "production") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React);
}


class MainPage extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <React.Fragment>
            <Header />
            <Container fluid className="content" id="contentContainer">
            <Switch>
            <Route exact path="/" component={Index}/>
        <Route path="/documentation" component={Documentation}/>
        <Route path="/browser*" component={CompoundBrowser}/>
        <Route path="/compound/:identifier(inchi|inchikey|lotus_id|id)/:identifierValue" component={NaturalProductCompoundCard}/>
        <Route path="/download" component={Download}/>
        <Route path="/search/advanced" component={AdvancedSearch}/>
        <Route path="/search/simple/:q" component={SearchResult}/>
        <Route path="/search/chemclass/:q" component={ChemSearchResult}/>
        <Route path="/search/structure" component={StructureSearch}/>
        <Route component={NotFound}/>
        </Switch>
        </Container>
                <Footer/>
        </React.Fragment>
        </BrowserRouter>
    );
    }
}

ReactDOM.render(
<MainPage />,
    document.getElementById("viewport")
);
