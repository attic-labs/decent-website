import {colors} from '../styles'

import Multiuser from '../svg/multiuser.svg'
import DynamicLoading from '../svg/dynamic-loading.svg'
import Search from '../svg/search.svg'

import Animation from './Animation'

export default () =>
  <section>
    <div className="row">
      <div className="feature">
        <div className="icon">
          <Animation name="sync" />
        </div>
        <h5>Multiparty sync</h5>
        <span>
          Correct, efficient, multiparty sync that scales to any number of nodes. Membership is
          fully dynamic.
        </span>
      </div>
      <div className="feature">
        <Multiuser height="60" />
        <h5>Multiuser</h5>
        <span>
          The first general solution for multiuser decentralized applications—aggregate data across
          users, build indices, etc.
        </span>
      </div>
    </div>
    <div className="row">
      <div className="feature">
        <DynamicLoading height="60" />
        <h5>Lazy loading</h5>
        <span>Data is dynamically loaded from peers as needed with intelligent local caching.</span>
      </div>
      <div className="feature">
        <Search height="60" />
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
        margin-bottom: 2em;
        flex-wrap: wrap;
        width: 100%;
      }
      .icon {
        height: 60px;
      }
      .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-weight: 200;
        flex-shrink: 1;
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
