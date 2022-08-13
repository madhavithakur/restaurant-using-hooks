import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderCard = ({item, isLoading, errMess}) => {
    if(isLoading) {
        return(
            <Loading/>
        );
    } else if(errMess) {
        return(
            <h4>{errMess}</h4>
        );
    } else {
        return(
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation?<CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

const Home = ({dish, promotion, leader, 
            dishesLoading, dishesErrMess,
            promosLoading, promosErrMess,
            leadersLoading, leadersErrMess}) => {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} 
                        isLoading={dishesLoading}
                        errMess={dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion}
                        isLoading={promosLoading}
                        errMess={promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader}
                        isLoading={leadersLoading}
                        errMess={leadersErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;