import './App.css';
import {AppBar, Container, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AlbumOverview} from "./components/AlbumOverview";
import AlbumDetail from "./components/AlbumDetail";
import CreateAlbum from './components/CreateAlbum';

const useStyles = makeStyles(theme =>({
    toolbar: theme.mixins.toolbar
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h6">
                        <Link href="/" color="inherit">Album Api</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.toolbar}/>
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route path={"/"} exact>
                                <AlbumOverview/>
                            </Route>
                            <Route path="/new">
                                <CreateAlbum />
                            </Route>
                            <Route path="/:albumId">
                                <AlbumDetail />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
