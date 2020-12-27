import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import MovieType from '../../types/MovieType';

interface MoviePageProperties {
    match: {
        params: {
            mId: number;
        }
    }
}

interface MoviePageState {
    movie?: MovieType;
}

export default class MoviePage extends React.Component<MoviePageProperties> {
    state: MoviePageState;
    
    constructor(props: Readonly<MoviePageProperties>) {
        super(props);

        this.state = { };
    }

    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon = { faListAlt }></FontAwesomeIcon>
                            { this.state.movie?.name}
                        </Card.Title>
                        <Card.Text>
                            Here, we will have our movies
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    componentWillMount() {
        this.getMovieData();
    }

    componentWillReceiveProps(newProperties: MoviePageProperties) {
        if(newProperties.match.params.mId === this.props.match.params.mId) {
            return;
        }
        
        this.getMovieData();
    }

    private getMovieData() {
        setTimeout(() => {
            const data: MovieType = {
                name: 'Movie' + this.props.match.params.mId,
                movieId: this.props.match.params.mId
            };

            this.setState({
                movie: data,
            })

        }, 750);
    }
}