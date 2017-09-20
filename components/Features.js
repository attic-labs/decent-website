import ReactDOM from 'react-dom'
import {Component} from 'react'
import {colors} from '../styles'
import Animation from './Animation'

export default class Features extends Component {
  constructor(props) {
    super(props)
    this.state = {visibleIcons: [false, false, false, false]}
  }
  updateAnimations() {
    const scrollPos = this.props.top + document.documentElement.clientHeight
    const {visibleIcons} = this.state
    const d = ReactDOM.findDOMNode(this)
    const icons = d.querySelectorAll('.icon')
    icons.forEach((i, idx) => {
      const r = i.getBoundingClientRect()
      visibleIcons[idx] = scrollPos > r.top + 400
    })
    if (String(visibleIcons) !== String(this.state.visibleIcons)) {
      this.setState({visibleIcons})
    }
  }
  componentDidMount() {
    this.animInterval = setInterval(() => this.updateAnimations(), 200)
  }
  componentWillUnmount() {
    clearInterval(this.animInterval)
  }
  render() {
    const {visibleIcons} = this.state
    return (
      <section>
        <div className="row">
          <div className="feature">
            <div className="icon">
              <Animation name="sync" playing={visibleIcons[0]} />
            </div>
            <h5>Multiparty sync</h5>
            <span>
              Correct, efficient, multiparty sync that scales to any number of nodes. Membership is
              fully dynamic.
            </span>
          </div>
          <div className="feature">
            <div className="icon">
              <Animation name="users" playing={visibleIcons[1]} />
            </div>
            <h5>Multiuser</h5>
            <span>
              The first general solution for multiuser decentralized applications—aggregate data
              across users, build indices, etc.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="feature">
            <div className="icon">
              <Animation name="lazy-load" playing={visibleIcons[2]} />
            </div>
            <h5>Lazy loading</h5>
            <span>
              Data is dynamically loaded from peers as needed with intelligent local caching.
            </span>
          </div>
          <div className="feature">
            <div className="icon">
              <Animation name="search" playing={visibleIcons[3]} />
            </div>
            <h5>Search</h5>
            <span>Efficiently search large datasets, even across the network.</span>
          </div>
        </div>
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .row {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            width: 100%;
          }
          .icon {
            height: 60px;
            width: 60px;
          }
          .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-weight: 200;
            flex-shrink: 1;
            margin-bottom: 2em;
          }
          .feature h5 {
            font-size: 1.2em;
            font-weight: 400;
            color: ${colors.ORANGE};
            margin: 0.5em 0;
          }
          .feature span {
            font-size: .8em;
            width: 250px;
          }
        `}</style>
      </section>
    )
  }
}
