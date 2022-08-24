import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

    const RenderDish = ({dish}) => {
        if(dish!=null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl +dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(<div></div>);
        }
    };

    const RenderComments = ({comments, postComment, dishId}) => {
        if(comments!=null) {
            const commentsList = comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <div>
                            <div>{comment.comment}</div>
                            <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"2-digit"})}</p>
                        </div>
                    </li>
                );
            });
            return(<div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsList}
                </ul>
                <CommentForm postComment={postComment} dishId={dishId}/>
            </div>);
        } else {
            return(<div></div>);
        }
        

    }

    const Dishdetail = (props) => {
        if(props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        } else if(props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        } else if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.comments} 
                            postComment={props.postComment} dishId={props.dish.id}/>
                    </div>
                </div>     
            );
        } else {
            return(<div></div>);
        }
    }

export default Dishdetail;