import Link from 'next/link'
import Button from './Button'

export default props =>
  <Link href={{pathname: '/doc', query: {src: 'doc/decent/about.md'}}} as={`/docs/decent/about`}>
    <a>
      <Button {...props} />
    </a>
  </Link>
