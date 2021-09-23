import React from 'react';
import axios from 'axios';
import Nav from './Nav';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Alert
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    state = {
        items: [],
        keywords: '',
        valid: false
    }

    componentDidMount() {
        this.getResponse();
    }

    getResponse(){
        axios.get('http://api.mediastack.com/v1/news', {
        params: {
            access_key: '44f9bb544eb6426466a61a8011162ed8',
            sources: 'en',
            keywords: this.state.keywords,
            limit: 18,
            sort: 'published_desc'
        }
        })
        .then(res => {
        this.setState({
            items: res.data.data
        });
        });
    }

    search(words){
        const validate = words.length>=3;
        this.setState({
            keywords: words,
            valid: validate
        })
        if(this.state.valid){
            this.getResponse();
        }
    }

    render(){
        let alert;
        if(!this.state.valid){
            alert = (
                <Alert variant="warning">
                    {/* TIPS: You can search any news by typing 3 letters word or more! */}
                </Alert>
            );
        }
        return(
            <Container fluid className="p-0 bg-light">
                <Nav 
                searchEnabled= {true}
                search = {this.search}/>
                {alert}
                <Container className="pt-4">
                <Row>
                    { this.state.items.map(item => (
                    <Col xs="12" md="4" className="px-2 py-3">
                    <Card className="p-2">
                        <Row>
                            <Col xs="12" md="5"
                            style={{minHeight: '25vh'}}
                            >
                                <Card.Img variant="top" src={item.image}
                                className="w-100 h-100" style={{objectFit: 'cover'}}/>
                                </Col>
                                <Col xs="12" md="7">
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>#{item.category}</Card.Text>
                                    <Link
                                    to={{ 
                                    pathname: "/detail",
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    author: item.author,
                                    date: item.published_at,
                                    url: item.url
                                    }}
                                    >
                                    <div className="d-grid">
                                        <Button variant="dark">
                                            Read more
                                        </Button>
                                        </div>   
                                    </Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                        ))
                    }
                </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;