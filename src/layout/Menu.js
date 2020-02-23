import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AppRouter from "../AppRouter";

class MenuWithoutRouter extends Component
{
    static propTypes = {
        location: PropTypes.object.isRequired,
        Parent: PropTypes.object.isRequired,
    };

    // pages' names come from AppRouter.ROUTES
    static PAGES_DATA = {
        HOME: {
            path: () => { return this.getPagePath(AppRouter.ROUTES.HOME)},
            icon: "home",
            text: "Home",
        },
        GALLERY: {
            path: () => { return this.getPagePath(AppRouter.ROUTES.GALLERY)},
            icon: "briefcase",
            text: "Galerie",
        },
        ABOUT: {
            path: () => { return this.getPagePath(AppRouter.ROUTES.ABOUT)},
            icon: "pencil",
            text: "À propos",
        },
    };

    static getPagePath(pageId) {
        return AppRouter.ROUTES_DATA[pageId].path;
    }

    Parent;

    constructor(props) {
        super(props);
        this.Parent = props.Parent;
        this.state = {currentPage: AppRouter.getRouteFromThisRouterPointOfView(this.props.location)};
        this.Parent.registerRouterEvent(this.onRouteChange)
    }

    onRouteChange = (appRouterRoute) => {
        this.setState({currentPage: appRouterRoute});
    };

    render() {
        return (
            <div>
                <nav id="navigation" className="style-1">
                    <div className="left-corner"></div>
                    <div className="right-corner"></div>
                    <ul className="menu" id="responsive">
                        {Object.keys(this.constructor.PAGES_DATA).map((pageKey, index) => {
                            const page = this.constructor.PAGES_DATA[pageKey];
                            const liId = this.state.currentPage === pageKey ? "current" : null;
                            return (
                                <li key={index}>
                                    <Link to={page.path()} id={liId}><i className={`halflings white ${page.icon}`}></i> {page.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="clearfix"></div>
            </div>
        );
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const Menu = withRouter(MenuWithoutRouter);

export default Menu;