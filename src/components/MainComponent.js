import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import {Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    
    return (
      <Component
        history={history}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }
  
  render(){
    const HomePage = () => {
        return (
            <Home dish={this.props.dishes.dishes.filter(dish=>dish.featured)[0]}
                  dishesLoading={this.props.dishes.isLoading}
                  dishesErrMess={this.props.dishes.errMess}
                  promotion={this.props.promotions.filter(promotion=>promotion.featured)[0]}
                  leader={this.props.leaders.filter(leader=>leader.featured)[0]} />
        );
    }

    const DishWithId = () => {
      const {dishId} = useParams();
        return (
          <Dishdetail dish={this.props.dishes.dishes.filter(dish=>dish.id === parseInt(dishId, 10))[0]} 
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}      
                comments={this.props.comments.filter(comment=>comment.dishId === parseInt(dishId, 10))}
                addComment={this.props.addComment}/>
        );
    }

    return (
      <div>
        <Header/>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/aboutus" element={<About leaders={this.props.leaders}/>} />
            <Route exact path="/menu" element={<Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" element={<DishWithId />} />
            <Route exact path="/contactus" element={<Contact/>} />
            <Route path="*" element={<HomePage/>} />
        </Routes>
        <Footer/>
      </div>
    );
  } 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
