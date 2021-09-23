import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from './Nav';

class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.location.title,
            desc: props.location.description,
            image: props.location.image,
            category: props.location.category,
            author: props.location.author,
            date: props.location.date,
            url: props.location.url,
        }
        console.log(this.state);
    }

    render(){
        let author;
        if(this.state.author){
            author = (
                this.state.author
            )
        } else {
            author = (
                'Unknown author'
            )
        }
        return(
            <Container fluid 
            className="p-0 bg-light"
            style={{minHeight: '100vh'}}
            >
                <Nav/> 
                <Container className="p-3 bg-white mt-4">
                    <Row>
                        <Col xs="12" md="6">
                            <img
                                src={this.state.image}
                                alt={this.state.title}
                                style={{
                                    width: '100%',
                                    height: '65vh',
                                    objectFit: 'cover'
                                }}
                             />
                        </Col>
                        <Col xs="12" md="6" className="p-4">
                        <p class="h4">{author}</p>
                        <h1 className="display-4 mb-2">{this.state.title}</h1>
                        <p className="lead mt-4">
                            {this.state.desc}
                        </p>
                        <a className="btn btn-primary" href={this.state.url} role="button">Source</a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Detail;