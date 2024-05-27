import './App.css'
import { ProductCardFC } from './components/ProductCardFC'
import { ProductCardCC } from './components/ProductCardCC'

function App(props) {

    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    const { type } = props
    const Component = type == 'CC' ? ProductCardFC: ProductCardFC

    return (
      <div className="container">
      <div className="background-element">

      </div>
      <div className="highlight-window">
      <div className='highlight-overlay'></div>

      </div>
      <div className="window">
        <Component item = { item } />
      </div>

      </div>
  )
}

export default App
