import AuthorizationArea from "../Authorization/AuthorizationArea/AuthorizationArea";
import MainPage from "../StudentArea/MainPage/MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import PageNotFound from "../Errors/PageNotFound/PageNotFound";
import WeatherRoot from "../Content/WeatherRoot/WeatherRoot";

function Routes(params  ) {


  return (

      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={
              () => {
                return <Redirect to="/weather/Index" />
              }
            } />
          <Route path="/weather/:type" exact component={WeatherRoot} />
       
          {/* <Route component={PageNotFound} /> */}

        </Switch>


      </Router>

  );
}

export default Routes;
