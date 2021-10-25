import Header from '../components/header'
import Main from '../components/main'

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(/fundocenadev.png)`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      filter: `brightness(.7)`
      }}>
      <Header/>
      <Main/>
    </div>
  )
}
