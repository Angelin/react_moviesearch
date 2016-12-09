import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.showDetail = this.showDetail.bind(this);
	}
	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme)};
    }
    showDetail(data) {
    	console.log(data);
    }
	render() {
		const imageStyle = {
			height: 80,
			width: 60
		}
		const tableHeaderStyle = {
			backgroundColor: '#555'
		}
		const tableRowStyle = {
			backgroundColor: '#ccc'
		}
		const tableHeaders = {
			fontSize: 20,
			color: '#eee'
		}
		var th = this;
		var showMovie =  this.props.data.map(function (movie, i) {
			if(movie.Poster == 'N/A')
				movie.Poster = './src/assets/img/image-not-available.png';
			return (
				<TableRow key={i} style={tableRowStyle} onClick={th.showDetail} >
					<TableRowColumn><img src={movie.Poster} style={imageStyle}/></TableRowColumn>
					<TableRowColumn>{movie.Title}</TableRowColumn>
					<TableRowColumn>{movie.Year.substr(0,4)}</TableRowColumn>
					<TableRowColumn>{movie.Type}</TableRowColumn>
				</TableRow>);
		});
		return (
			<Table>
				<TableHeader>
					<TableRow style={tableHeaderStyle}>
						<TableHeaderColumn style={tableHeaders} >Poster</TableHeaderColumn>
				        <TableHeaderColumn style={tableHeaders}>Name</TableHeaderColumn>
				        <TableHeaderColumn style={tableHeaders}>Year</TableHeaderColumn>
				        <TableHeaderColumn style={tableHeaders}>Genre</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{showMovie}
				</TableBody>
			</Table>
		)
	}
}
MovieList.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
}

export default MovieList;