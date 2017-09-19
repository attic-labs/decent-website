import Link from 'next/link'
import Button from './Button'

export default props =>
  <Link href={{pathname: '/doc', query: {src: 'README.md'}}} as={`/docs`}>
    <a>
      <Button {...props} />
    </a>
  </Link>
