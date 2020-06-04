import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
   

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
        
   
     
    // renderDishComments(dish) {
    //     if (dish != null){
    //         const dishComm = this.props.electedDish.comments.map((com) => {
    //             return (
    //                 <Card key={com.id}>
    //                 <CardBody>
    //                     <CardTitle>{com.name}</CardTitle>
    //                     <CardText>
    //                         <br>{com.id}</br>
    //                         <br>{com.rating}</br>
    //                         <br>{com.comment}</br>
    //                         <br>{com.author}</br>
    //                         <br>{com.date}</br>
    //                     </CardText>
    //                 </CardBody>
                
    //                 </Card>
    //                 );}
    //                 );
    //             return dishComm;

    //     }
           
                   
    //     else
    //         return(
    //             <div></div>
    //         );
    // }



    renderComments(comments) {
        if (comments == null) {
            return (<div></div>);
        }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        );
    }



    render() {
        const dish = this.props.electedDish
        if (dish == null) {
            return (<div></div>)
        }
        const commentItem = this.renderComments(dish.comments) 
        return (

            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.electedDish)}
                  </div>
                  
                    {commentItem}
                 
                </div>
            </div>
        );
    }
}

export default DishDetail;

