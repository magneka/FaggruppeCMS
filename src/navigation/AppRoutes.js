import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ArticleContainer } from '../containers/article/ArticleContainer'
import { FrontpageContainer } from '../containers/frontpaige/FrontpageContainer'


const AppRoutes = (props) => {
   
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={FrontpageContainer} />
                <Route exact path="/article/:id" component={ArticleContainer} />
            </Switch>
        </Fragment>  
    )
}

export default AppRoutes