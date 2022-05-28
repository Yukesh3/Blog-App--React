import React, { useContext, useState } from 'react'
import Content from './content'
import { BlogContent } from "./Data"
import { Link, NavLink } from 'react-router-dom'


const Kollywood = () => {
  const { value1 } = useContext(BlogContent)
  const [kollywood] = value1

  const [showMore, setMore] = useState(false);

  return (

    <>
      <Content />

      {
        kollywood.map((item, index) =>

          index === 0 && <>
            <div className='Latest_Articles_items_1' >
              <img src={item.ImageAsset} alt="alt" />
              <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>  <div className="Title_B"><p >{item.Title}</p></div></NavLink>
              <div className="Content_B"><p>{item.BlogContent}</p></div>
              <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>

            </div>
          </>


        )}


      {
        kollywood.map((item, index) =>

          index === 1 && <>
            <div className='Latest_Articles_items_1' >
              <img src={item.ImageAsset} alt="alt" />
              <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Title_B"><p >{item.Title}</p></div></NavLink>
              <div className="Content_B"><p>{item.BlogContent}</p></div>
              <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>

            </div>
          </>


        )}

      {
        kollywood.map((item, index) =>

          index === 2 && <>
            <div className='Latest_Articles_items_1' >
              <img src={item.ImageAsset} alt="alt" />
              <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Title_B"><p >{item.Title}</p></div></NavLink>
              <div className="Content_B"><p>{item.BlogContent}</p></div>
              <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>

            </div>
          </>


        )}

      {showMore ?
        <div >
          {
            kollywood.map((item, index) =>

              index === 3 && <>
                <div className='Latest_Articles_items_1' >
                  <img src={item.ImageAsset} alt="alt" />
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}><div className="Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Content_B"><p>{item.BlogContent}</p></div>
                  <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                    <p className="Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>
              </>


            )}


          {
            kollywood.map((item, index) =>

              index === 4 && <>
                <div className='Latest_Articles_items_1' >
                  <img src={item.ImageAsset} alt="alt" />
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Content_B"><p>{item.BlogContent}</p></div>
                  <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                    <p className="Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>



              </>


            )}

        </div> : null}





      <button onClick={() => setMore(!showMore)} id="n" >{showMore ? "⬆️ Show Less" : "⬇️ Show More"} </button>

      <Link to="/"><button style={{ border: "none", backgroundColor: "white", color: "rebeccapurple" }}> 🏠 Home </button></Link>









    </>



  )
}

export default Kollywood