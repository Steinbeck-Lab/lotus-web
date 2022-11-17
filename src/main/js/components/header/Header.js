import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderNavBar from "./HeaderNavBar";
import CheminfIcon from "../../../resources/images/cheminf_logo.png";
import CoconutIcon from "../../../resources/images/lotus_logo.png";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

const React = require("react");


export default class Header extends React.Component {
    render() {
        return (
            <Container fluid id="header" className="fixed-top border-bottom">
                <Container>
                    <Row>
                        <Col sm={4} className="align-content-center">
                            <Link to="/"><Image id="headerIcon" alt="LOTUS Database Logo" className="img-fluid" src={CoconutIcon}/></Link>
                        </Col>
                        <Col sm={8} className="align-self-end">
                            <HeaderSearchBar/>
                            <HeaderNavBar/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}