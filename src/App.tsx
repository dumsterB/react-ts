import {useProducts} from './hooks/producs'
import {Product} from './components/Product'
import { Loader } from './components/Loader'
import { Error } from './components/Error'
import { Modal } from './components/Modal';
import {CreateProducts} from './components/CreateProducts'

function App() {
    const {loading,error,products} = useProducts()
    return(
        <div className="container mx-auto max-w-2xl pt-5">
            <Modal title={'Create Products'}>
                <CreateProducts></CreateProducts>
            </Modal>
          {loading && <Loader></Loader> }
          {error && <Error error={error} />}
            {products.map((product,index) => <Product products={product} key={product.id} />)}
        </div>
    )
}

export default App;
