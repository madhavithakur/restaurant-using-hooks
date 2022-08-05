import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  
  render(){
    const HomePage = () => {
        return (
            <Home dish={this.state.dishes.filter(dish=>dish.featured)[0]} 
                  promotion={this.state.promotions.filter(promotion=>promotion.featured)[0]}
                  leader={this.state.leaders.filter(leader=>leader.featured)[0]} />
        );
    }
    return (
      <div>
        <Header/>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
            <Route exact path="/contactus" element={<Contact/>} />
            <Route path="*" element={<HomePage/>} />
        </Routes>
        <Footer/>
      </div>
    );
  } 
}

export default Main;
