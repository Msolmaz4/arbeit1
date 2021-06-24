import React from 'react';

class Movieliste extends React.Component {
    render() {




        return (

            <div className="row">

                {this.props.movies.map((movie) =>
                    <div className="col-lg-4"key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-Flex justify-content-betwen align-items-center">
                                    <button type="buton" onClick={(event) => this.props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">delete</button>
                                    <h2><span className="badge badge-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}






            </div>
        )
    }
}
export default Movieliste;