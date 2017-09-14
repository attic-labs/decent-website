import {colors} from '../styles'

const styles = orange => {
  return orange
    ? {
        backgroundColor: colors.ORANGE,
        border: 'none',
      }
    : {
        backgroundColor: 'transparent',
        border: '1px solid white',
      }
}

export default ({orange, children}) =>
  <button style={styles(orange)}>
    {children}
    <style jsx>{`
      button {
        font-weight: 100;
        padding: 1.2em 4em;
        border-radius: 2px;
        color: white;
        white-space: nowrap;
        font-size: 14px;
      }
    `}</style>
  </button>
