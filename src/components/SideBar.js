import React from 'react';
import image from '../assets/images/logo.svg';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import Users from './Users';
import Products from './Products';

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion colorfondo" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Logo"/>
                    </div>
                </a>


                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Turing Tech</span></Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Secciones</div>
                
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Buscar un producto</span>
                    </Link>
                </li>
                
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Usuarios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios Totales</span>
                    </Link>
                </li>

                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Productos">
                    <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route path="/Usuarios">
                    <Users />
                </Route>
                <Route path="/Productos">
                    <Products />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;