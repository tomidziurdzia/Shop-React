import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    with: '1200px'
  }
}

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}> {/*Con este centramos todo el contenido*/}
        <div style={styles.container}> {/* Con este le damos un ancho de 1200 px */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout