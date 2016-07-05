
var Movie = React.createClass({
    getInitialState: function(){
        return {
                edition: false 
            }
    },
    edit: function(){
        this.setState({edition: true});
    },
    save: function(){
        //debugger;
        var nuevoNombre = this.refs.nuevoNombre.getDOMNode().value
        var nuevaPic = this.refs.nuevaPic.getDOMNode().value
        this.props.onChange(nuevoNombre, nuevaPic, this.props.index);
        this.setState({edition: false});
    },
    cancel: function(){
        this.setState({edition: false})
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    editView: function(){
        return ( 
            <div className="movie">
            <input ref="nuevoNombre" type="text" className="form-control margin-edit1" placeholder="Nuevo nombre..." defaultValue={this.props.nombre}/>
            <input ref="nuevaPic" type="text" className="form-control margin-edit2" placeholder="Nuevo nombre..." defaultValue={this.props.pic}/>
                <div>
                    <div className="glyphicon glyphicon-ok-circle blue" onClick={this.save} />
                    <div className="glyphicon glyphicon-remove-circle red" onClick={this.cancel} />
                </div>
            </div>
            );
    },
    normalView: function(){
        return (
            <div className="movie">
                <h3 className="bg-success">{this.props.nombre}</h3>
                <img className="thumbnail" src={this.props.pic} />
                <div>
                    <div className="glyphicon glyphicon-pencil blue" onClick={this.edit} />
                    <div className="glyphicon glyphicon-trash red" onClick={this.remove} />
                </div>
            </div>
            );
    },
    render: function() {
        console.log(this.state.edition);
        if (this.state.edition) {
            return this.editView();
        } else {
            return this.normalView();
        }
    }
});

var MovieList = React.createClass({
    getInitialState: function() {
        return {
            movies: [
                {name: 'Terminator 2', pic: 'https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg'},
                {name: 'KarateKid', pic: 'http://wac.450f.edgecastcdn.net/80450F/screencrush.com/442/files/2013/07/Karate-Kid.jpg'},
                {name: 'The Back to the future', pic: 'https://images-na.ssl-images-amazon.com/images/I/81lNEmtMo9L._SL256_.png'},
                {name: 'Warcraft', pic: 'https://nouwcdn.com/6/1000000/980000/977071/pics/20165181856215550_sbig.jpg'}
            ]
        };
    },

    add: function(movie) {
       //debugger;
       var nuevaMovie= this.refs.nuevaMovie.getDOMNode().value;
       var nuevaPic= this.refs.nuevaPic.getDOMNode().value;
        if (nuevaMovie == "")
        {
            nuevaMovie = "New movie";
        }
        if(nuevaPic == "")
        {
                nuevaPic = "https://pbs.twimg.com/profile_images/700092818174431232/fQCnNXZc.png";        
        }
        var obj = {name: nuevaMovie, pic: nuevaPic};
        var arr = this.state.movies;
        arr.push(obj);
        this.setState({movies: arr});
        this.refs.nuevaMovie.value = "";
        this.refs.nuevaPic.value = "";
    },
    update: function(nuevoNombre, nuevaPic, i) {
        //debugger;
        var arr = this.state.movies;
        arr[i] = {name: nuevoNombre, pic: nuevaPic};
        this.setState({movies:arr});
    },
    remove: function(i){
        var arr = this.state.movies;
        arr.splice(i, 1);
        this.setState({movies: arr});
    },
    showMovies: function(movie, i) {
       //debugger;
        return (
                <Movie key={i}
                    index={i}
                    nombre={movie['name']}
                    pic={movie['pic']}
                    onChange={this.update}
                    onRemove={this.remove}>
                    {i+1}
                </Movie>
            );
    },
    render: function() {
        return(
            <div>
                <header>
                    <h1 className="title header">Movies ReactJS <img className="icono" src="react.png" /> </h1> 
                    
                </header>
                <div className="input-style">
                    <h1>Movies</h1>
                    
                    <i>Total Movies: {this.state.movies.length}</i>
                    
                    <input ref="nuevaMovie" type="text" className="form-control" placeholder="Add title" />
                    <input ref="nuevaPic" type="text" className="form-control" placeholder="Add url pic" />
                    <button className="btn btn-default btn-success" onClick={this.add}>Add Movie</button>
                </div>

                <div className="center">
                {this.state.movies.map(this.showMovies)}
                </div>
            </div>
    
            )
    }
});


React.render(<MovieList/>, document.getElementById('container')
);