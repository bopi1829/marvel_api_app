/*
 * PersoMarvelPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import TablePersoMarvel from './TablePersoMarvel';
import CardPersoMarvel from './CardPersoMarvel';
import GridPersoMarvel from './GridPersoMarvel'

const myHeaders = new Headers ({
  'Content-Type': "application/json",
})

const init = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function BasicTextFields() {
  const classes = useStyles();
}

export function ContainedButtons() {
  const classes = useStyles();
}

class PersoMarvelPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      checked: false,
      persos: []
    };
  }
  
  handleChange = event => {
    console.log('handleChange : ', event.target.value)
    this.setState({searchName: event.target.value})
  }

  handleChecked = event => {
    console.log('handleChecked : ', event.target.checked)
    this.setState({checked: event.target.checked})
  }

  handleSearch = () => {
    this.componentDidMount(this.state.searchName)
  }

  componentDidMount = (name) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=5b2d1935cd352871d641a963e5a225f9
    `
    fetch(url, init)
    .then(response => response.json())
    .then(json => {
      const data = json;
      console.log("Data api : ", data.data.results)
      this.setState({persos: data.data.results})
    })
    .catch(error => console.log(error()))
    .catch(error => console.log(error()))
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Page de recherche de personnages Marvel</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <TextField
          label="Standard" 
          margin= "normal"
          value={this.state.searchName}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="secondary"
          style={{margin: '10px'}}
          onClick={this.handleSearch}
        >
          Recherche
        </Button>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChecked}
          inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {/*{this.state.persos[0] ? <CardPersoMarvel perso={this.state.persos[0]} /> : <div></div>}*/}
      <p></p>
      <GridPersoMarvel persos={this.state.persos} />
      <TablePersoMarvel  persos={this.state.persos}/>

      </div>
    );
  }  
}

export default PersoMarvelPage;
