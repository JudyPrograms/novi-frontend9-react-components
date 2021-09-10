import React from 'react'
import './App.css'
import Button from "./components/Button"
import Product from "./components/Product"
import Tile from "./components/Tile"
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brandImg from './assets/brand.png'
import storyImg from './assets/our_story.png'

const brandPar1 = <p key="brand-p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus beatae dignissimos error fugiat libero non quis quisquam unde voluptas.</p>

const brandPar2 = <p key="brand-p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus beatae dignissimos error fugiat libero non quis quisquam unde voluptas.</p>

const storyPar1 = <p key="story-p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium asperiores autem commodi cum doloribus et eum expedita in iusto labore laudantium odio quam quasi ratione sit soluta, sunt ut!</p>

function App() {
    return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Button text="to the collection"/>
              <Button text="shop all bags"/>
              <Button text="pre-orders" disabled="disabled"/>
          </nav>
          <main>
              <Product label="Best Seller" image={bag1} bagName="The Handy Bag" price="€400,-"/>
              <Product label="Best Seller" image={bag2} bagName="The Stylish Bag" price="€250,-"/>
              <Product label="New Collection" image={bag3} bagName="The Simple Bag" price="€300,-"/>
              <Product label="New Collection" image={bag4} bagName="The Trendy Bag" price="€150,-"/>
          </main>
          <footer>
              <Tile type="text" title="Brand" paragraphs={[brandPar1, brandPar2]}/>
              <Tile type="img" image={brandImg}/>
              <Tile type="img" image={storyImg}/>
              <Tile type="text" title="Story" paragraphs={storyPar1}/>
          </footer>
      </>
  )
}

export default App



