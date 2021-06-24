import React from 'react';

import SearchBar from './SearchBar';
import MovieListe from './MovieListe';



class App extends React.Component {

state ={

    movies : [ 

        
         ],
         searchQuery:""

}
deleteMovie =(movie) =>{
 const newMovieliste = this.state.movies.filter(
     m=>m.id !==movie.id
 );

this.setState(state =>({
    movies:newMovieliste
}))


}
searchMovie = (event) =>{
//console.log(event.target.value)
this.setState({searchQuery:event.target.value})

}
    render (){

       /* let filterMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.indexOf(this.state.searchQuery) !== -1
            }
        )*/
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />

                    </div>
                </div>
                <MovieListe
                movies={this.state.movies}
                deleteMovieProp={this.deleteMovie} />
            </div>
        )

    }




   

}
export default App;