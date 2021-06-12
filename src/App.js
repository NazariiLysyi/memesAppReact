import './App.css';
import 'fontsource-roboto';
import Nav from './Components/Nav/Nav';
import Page404 from './Components/Page404/Page404';
import Regular from './Components/Regular/Regular';
import Hot from './Components/Hot/Hot';
import Upload from './Components/Upload/Upload';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.wsb.pl/wroclaw/studia-i-szkolenia/studia-podyplomowe/kierunki/programista-front-end-z-angular">
        WSB. Nazar Lysyi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <div className='Routes'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/regular'/>
            </Route>
          <Route path='/regular'>
            <Regular />
          </Route>
          <Route path='/hot'>
            <Hot />
          </Route>
          <Route path='/upload'>
            <Upload />
          </Route>
            <Route path='*'>
              <Page404 />
          </Route>
          </Switch>
        </div>
      </BrowserRouter>
       {/* Footer */}
       <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          React Projekt Zaliczeniowy
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
