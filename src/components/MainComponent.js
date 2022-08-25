import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import React, { Component, useContext, useEffect } from 'react';
import {Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { connect, shallowEqual, useSelector } from 'react-redux';
import About from './AboutComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedBack } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { StoreContext } from '../App';


// export const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const history = useNavigate();
    
//     return (
//       <Component
//         history={history}
//         {...props}
//         />
//     );
//   };
  
//   return Wrapper;
// };

export const store = ConfigureStore();

const Main = (props) => {
  const [finalState, dispatch] = useContext(StoreContext);

  const {dishes, comments, promotions, leaders} = store.getState();

  // const mapDispatchToProps = (dispatch) => ({
  //   postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  //   fetchDishes: () => {dispatch(fetchDishes())},
  //   resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))},
  //   fetchComments: () => {dispatch(fetchComments())},
  //   fetchPromos: () => {dispatch(fetchPromos())},
  //   fetchLeaders: () => {dispatch(fetchLeaders())},
  //   postFeedback: (feedback) => {dispatch(postFeedBack(feedback))}
  // });

  useEffect(()=>{
    store.dispatch(fetchDishes());
    store.dispatch(fetchComments());
    store.dispatch(fetchPromos());
    store.dispatch(fetchLeaders());
  },[]);
  
  const HomePage = () => {
    if(finalState.dishes && finalState.promotions && finalState.leaders){
      return (
          <Home dish={finalState.dishes.dishes.filter(dish=>dish.featured)[0]}
          dishesLoading={finalState.dishes.isLoading}
          dishesErrMess={finalState.dishes.errMess}
          promotion={finalState.promotions.promotions.filter(promotion=>promotion.featured)[0]}
          promosLoading={finalState.promotions.isLoading}
          promosErrMess={finalState.promotions.errMess}
          leader={finalState.leaders.leaders.filter(leader=>leader.featured)[0]}
          leadersLoading={finalState.leaders.isLoading}
          leadersErrMess={finalState.leaders.errMess} />
      )
    } else {
          return <div></div>
    };
  }

  const DishWithId = () => {
    const {dishId} = useParams();
      return (
        <Dishdetail dish={finalState.dishes.dishes.filter(dish=>dish.id === parseInt(dishId, 10))[0]} 
              isLoading={finalState.dishes.isLoading}
              errMess={finalState.dishes.errMess}      
              comments={finalState.comments.comments.filter(comment=>comment.dishId === parseInt(dishId, 10))}
              postComment={(dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))}/>
      );
  }

    return (
      <div>
        <Header/>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/aboutus" element={<About leaders={finalState.leaders}/>} />
            <Route exact path="/menu" element={<Menu dishes={finalState.dishes} />} />
            <Route path="/menu/:dishId" element={<DishWithId />} />
            <Route exact path="/contactus" element={<Contact postFeedback={(feedback) => {dispatch(postFeedBack(feedback))}} resetFeedbackForm={()=>{dispatch(actions.reset('feedback'))}}/>} />
            <Route path="*" element={<HomePage/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }

export default Main;
//withRouter(connect(mapfinalStateToProps, mapDispatchToProps)(Main));
