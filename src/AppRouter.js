import React, {Component} from "react";
import {Route} from "react-router-dom";
import {AnimatedSwitch} from "react-router-transition";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Home from "./pages/Home";

class AppRouterWithoutRouter extends Component
{
    static propTypes = {
        location: PropTypes.object.isRequired,
        onRouteChangeEvents: PropTypes.arrayOf(PropTypes.func),
    };

    static ROUTES = {
        HOME: "HOME",
        GALLERY: "GALLERY",
        ABOUT: "ABOUT",
    };

    static ROUTES_DATA = {
        GALLERY: {
            path: "/gallery",
            component: Gallery
        },
        ABOUT: {
            path: "/about",
            component: About
        },
        HOME: {
            path: "/",
            component: Home
        }
    };

    static getRouteFromThisRouterPointOfView(location)
    {
        let returnedValue;

        Object.keys(this.ROUTES_DATA).forEach((routeKey) =>
        {
            if (typeof(returnedValue) === "undefined"
                && location.pathname.indexOf(this.ROUTES_DATA[routeKey].path) === 0)
            {
                returnedValue = routeKey;
            }
        });

        return returnedValue;
    }

    onRouteChangeEvents;

    constructor({onRouteChangeEvents = []}) {
        super();
        this.onRouteChangeEvents = onRouteChangeEvents;
    }

    // A special wrapper for <Route> that knows how to
    // handle "sub"-routes by passing them in a `routes`
    // prop to the component it renders.
    RouteWithSubRoutes(route)
    {
        return (
            <Route
                path={route.path}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );
    }

    componentDidUpdate(prevProps)
    {
        if (this.constructor.getRouteFromThisRouterPointOfView(this.props.location)
            !== this.constructor.getRouteFromThisRouterPointOfView(prevProps.location))
        {
            this.onRouteChanged(this.props.location);
        }
    }

    onRouteChanged()
    {
        this.onRouteChangeEvents.forEach((event) => {
            event(this.constructor.getRouteFromThisRouterPointOfView(this.props.location));
        });
    }

    render() {
        return (
            <div id="content">
                <AnimatedSwitch
                    atEnter={{
                        opacity: 0,
                        marginLeft: -100,
                    }}
                    atLeave={{
                        opacity: 0,
                        marginLeft: 0,
                    }}
                    atActive={{
                        opacity: 1,
                        marginLeft: 0,
                    }}
                    className="switch-wrapper"
                >
                    {/* A <Switch> looks through its children <Route>s and
                     renders the first one that matches the current URL. */}
                    {Object.values(this.constructor.ROUTES_DATA).map((route, i) => (
                        <this.RouteWithSubRoutes key={i} {...route} />
                    ))}
                </AnimatedSwitch>
            </div>
        );
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const AppRouter = withRouter(AppRouterWithoutRouter);

export default AppRouter;