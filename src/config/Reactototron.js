import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

if ( process.env.NODE_ENV === 'development'){
  const tron = Reactotron.configure({host: '192.168.15.5'})
  .use(reactotronRedux())
  .connect()
  console.tron = tron
  tron.clear()
}