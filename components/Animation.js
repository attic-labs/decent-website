import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Component} from 'react'
import getBodymovin from '../lib/bodymovin'

// Animations
import sync from '../animations/sync'

const animations = {sync}

export default class Animation extends Component {
  constructor(props) {
    super(props)
    const {name} = props
    if (!animations[name]) throw new Error(`Invalid animation name ${name}`)
  }
  async componentDidMount() {
    const container = ReactDOM.findDOMNode(this)
    const bodymovin = await getBodymovin()
    const {name, playing, loop} = this.props
    this._anim = bodymovin.loadAnimation({
      container,
      animationData: animations[name],
      renderer: 'svg',
      loop,
      autoplay: playing,
    })
  }
  componentWillUpdate(props) {
    const play = props.playing
    const {playing} = this.props
    if (playing !== play) {
      if (play) {
        this._anim.play()
      } else {
        this._anim.stop()
      }
    }
  }
  render() {
    return <div style={{width: '100%', height: '100%'}} />
  }
}

Animation.propTypes = {
  name: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  playing: PropTypes.bool,
}

Animation.defaultProps = {
  loop: false,
  playing: true,
}
