import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from "./DishdetailComponent";
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import React, { useContext, useEffect } from 'react';
import {Routes, Route, useParams, useNavigate} from 'react-router-dom';
import About from './AboutComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedBack, addDishes, dishesFailed, addComments, addLeaders, leadersFailed, addPromos, promosFailed, dishesLoading, leadersLoading, promosLoading, commentsFailed, addComment } from '../store/ActionCreators';
import { actions } from 'react-redux-form';
import { StoreContext } from '../store';


const Main = () => {
  const [state, dispatch] = useContext(StoreContext);
  const {dishes, comments, promotions, leaders} = state;

  useEffect(()=>{
    const loadContent = () => {
      fetchDishes()
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error)));
      
      fetchPromos()
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => dispatch(promosFailed(error)));

      fetchLeaders()
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error)));

      fetchComments()
        .then(comments => dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error)));

    };
    loadContent();    
  },[]);

  useEffect(()=>{
    const loadComments = () => {
      fetchComments()
      .then(comments => dispatch(addComments(comments)))
      .catch(error=>dispatch(commentsFailed(error)));
    };
    loadComments();
  }, [comments]);
  
  const HomePage = () => {
      return (
          <Home dish={dishes.dishes.filter(dish=>dish.featured)[0]}
          dishesLoading={dishes.isLoading}
          dishesErrMess={dishes.errMess}
          promotion={promotions.promotions.filter(promotion=>promotion.featured)[0]}
          promosLoading={promotions.isLoading}
          promosErrMess={promotions.errMess}
          leader={leaders.leaders.filter(leader=>leader.featured)[0]}
          leadersLoading={leaders.isLoading}
          leadersErrMess={leaders.errMess} />
      )
   }

  const DishWithId = () => {
    const {dishId} = useParams();
      return (
        <Dishdetail dish={dishes.dishes.filter(dish=>dish.id === parseInt(dishId, 10))[0]} 
              isLoading={dishes.isLoading}
              errMess={dishes.errMess}      
              comments={comments.comments.filter(comment=>comment.dishId === parseInt(dishId, 10))}
              postComment={(dishId, rating, author, comment) => dispatch(addComment(postComment(dishId, rating, author, comment)))}/>
      );
  }

    return (
      <div>
        <Header/>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/aboutus" element={<About leaders={leaders}/>} />
            <Route exact path="/menu" element={<Menu dishes={dishes} />} />
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
