import React from 'react';
import {
    Button,
    Navbar,
    Form,
    FormControl,
    Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    state = {
        keywords: ''
    }

    onKeywordsChange(event){
        this.setState({
            keywords: event.target.value
        });
        console.log(this.state.keywords);
    }

    handleSearch(){
        this.props.search(this.state.keywords);
    }

    render(){
        let searchbar;
        if(this.props.searchEnabled){
            searchbar = (
                <div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form
                        className="d-flex"
                    >
                        <FormControl
                            type="search"
                            placeholder="Search News"
                            aria-label="Search"
                            value={this.state.keywords}
                            onChange={(event) => {this.onKeywordsChange(event)}}
                        />
                        <div
                            className="mx-1"
                        />
                        
                    </Form>
                    <Button variant="primary" className="pl-2" type="submit"
                        onClick={()=>{
                            this.handleSearch();
                        }}>Search</Button>
                </Navbar.Collapse>
                </div>
            );
        }
        return(
            <Container fluid className="p-0">
                <Navbar bg="dark" expand="lg" variant="dark" className="p-4">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Link
                            to={{ 
                            pathname: "/"
                            }}>
                            <div className="display-6 text-white">
                           News App
                            </div>
                        </Link>
                    </Navbar.Brand>
                    {searchbar}
                </Container>
                </Navbar>
            </Container>
        );
    }
}

export default Nav;