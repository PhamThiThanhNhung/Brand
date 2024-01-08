import logo from './logo.svg';
import './App.css';
import Item from './component/Item/Item.jsx';
import Header from './component/Header/Header.jsx';
import Sidebar from './component/Sidebar/Sidebar.jsx';
import Content from './component/Content/Content.jsx';
import Product from './component/Product/Product.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Content/>
      <Product/>
      <Item/>
    </div>
  );
}

export default App;
