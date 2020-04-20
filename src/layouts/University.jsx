import React from 'react'
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import {
  Header,
  Footer,
  Sidebar,
  ChatSidebar,
  Stylebar,
  PrivateRoute,
} from 'components'

import dashboardRoutes from 'routes/university.jsx'
import {
  topbarStyle,
  menuStyle,
  menuType,
  topbarType,
  navWidth,
  chatWidth,
  chatType,
} from 'variables/settings/university.jsx'

//var ps;

class UniversityLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuColor: menuStyle,
      topbarColor: topbarStyle,
      menuType: menuType,
      topbarType: topbarType,
    }
    this.menuSettings = this.menuSettings.bind(this)
    this.topbarSettings = this.topbarSettings.bind(this)
  }

  menuSettings(val1, val2) {
    this.setState({
      menuColor: val1,
      menuType: val2,
    })
  }
  topbarSettings(val1, val2) {
    this.setState({
      topbarColor: val1,
      topbarType: val2,
    })
  }

  componentDidMount() {
    /*if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
  }
  componentWillUnmount() {
    /*if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      this.refs.mainPanel.scrollTop = 0
      document.scrollingElement.scrollTop = 0
    }
  }
  render() {
    return (
      <div
        className="wrapper"
        ref="themeWrapper"
        data-menu={this.state.menuColor}
        data-topbar={this.state.topbarColor}
        data-menutype={this.state.menuType}
        data-topbartype={this.state.topbarType}
      >
        <Header {...this.props} navtype={navWidth} admintype={'university'} />
        <Sidebar
          className="step-1"
          {...this.props}
          routes={dashboardRoutes}
          admintype={'university'}
        />
        <div className="main-panel" ref="mainPanel">
          <Switch>
            {/* {dashboardRoutes.map((prop, key) => {
              console.log(this.props.location.pathname);
              if (this.props.location.pathname === prop.path) {
                console.log(
                  "-------------------\nCuajouna\n",
                  prop.path,
                  "\n-----------------\n",
                  this.props.location.pathname,
                  "\n-----------------\n"
                );
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              }
              console.log("Piala mostro");
              //Adding a redirect component
              //   return "";
              return (
                <Redirect
                  from={this.props.location.pathname}
                  to="/university/dashboard"
                  key={key}
                />
              );
            })} */}
            {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <PrivateRoute
                      exact
                      path={prop2.path}
                      key={key2}
                      component={prop2.component}
                    />
                  )
                })
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />
              return (
                <PrivateRoute
                  exact
                  path={prop.path}
                  key={key}
                  component={prop.component}
                />
              )
            })}
          </Switch>
          <Footer fluid />
        </div>
        <ChatSidebar
          {...this.props}
          routes={dashboardRoutes}
          chatwidth={chatWidth}
          chattype={chatType}
        />
        <Stylebar
          menuSettings={this.menuSettings}
          topbarSettings={this.topbarSettings}
        />
      </div>
    )
  }
}

export default UniversityLayout
