import React from "react"
import PropTypes from "prop-types"

import Logo from "./logo.png"

export default class Topbar extends React.Component {

  static propTypes = {
    layoutActions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = { url: props.specSelectors.url(), selectedIndex: 0 }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ url: nextProps.specSelectors.url() })
  }

  openHomePage = (e) => {
    window.open("https://gavagai.io", "_blank")
    e.preventDefault()
  }

  getCurrentUrl = () => {
    return location.href.substr(location.href.indexOf("#"))
  }

  render() {
    let { getComponent } = this.props
    const Button = getComponent("Button")
    const Link = getComponent("Link")

    return (
      <div className="topbar">
        <div className="wrapper">
          <div className="topbar-wrapper">
            <Link href={ this.getCurrentUrl() }>
              <img height="50" src={ Logo } alt="Swagger UI"/>
            </Link>
            <div className="download-url-wrapper">
              <Button className="tell-me-more-button" onClick={ this.openHomePage }>Tell me more!</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Topbar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  getConfigs: PropTypes.func.isRequired
}
