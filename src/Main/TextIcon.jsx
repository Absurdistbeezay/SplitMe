import React from 'react';
import pure from 'recompose/pure';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
  root: {
    display: 'flex',
    color: Colors.grey500,
    fontSize: 21,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
    height: '65vh',
    textAlign: 'center',
  },
  icon: {
    width: '35%',
    maxWidth: 150,
    maxHeight: 150,
    marginBottom: 30,
    display: 'block',
  },
};

class TextIcon extends React.Component {
  render() {
    const {
      text,
      icon,
    } = this.props;

    return (
      <div style={styles.root}>
        <img src={icon} style={styles.icon} />
        {text}
      </div>
    );
  }
}

TextIcon.propTypes = {
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default pure(TextIcon);
