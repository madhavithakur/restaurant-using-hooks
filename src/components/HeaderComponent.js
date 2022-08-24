import React, {Component, PureComponent} from "react";
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
    //    this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav = () => {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin = (event) => {
        this.toggleModal();
        alert("UserName: " + this.userName.value + " Password " + this.password.value
        + " Remember me: " + this.remember.checked);
        event.preventDefault();
    }
    render() {
        return(
            <>
                <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41" 
                            alt="Ristorante Con Fusion"/>
                    </NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Navbar className="jumbotron">
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">UserName</Label>
                                <Input type="text" id="userName" name="userName" 
                                innerRef={(input)=>this.userName=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                innerRef={(input)=>this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input)=>this.remember=input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;