import React, { useContext } from 'react'
import { BlogContent } from "./Data"
import { NavLink } from 'react-router-dom'


const Content = () => {
  const { value1, value2, value3, value4, value5 } = useContext(BlogContent)
  const [kollywood] = value1;
  const [hollywood] = value2;
  const [technology] = value3;
  const [fitness] = value4;
  const [food] = value5;

  return (
    <>
      <div className='Top_posts_container_1'>
        <h1 className='Top_posts_1'>Top Posts</h1>
        <hr className='Top_posts_hr_1' />
        {
          kollywood.map((item, index) =>

            index === 1 && <>
              <div className='Top_0' >
                <div className='Top_posts_img_1'>
                  <img src={item.ImageAsset} alt="alt" />
                </div>
                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                <div className="Top_Category_B">
                  <p >{item.CategoryName}</p> {`/ `}
                  <p className="Top_Publish_B">{item.PublishedDate}</p>
                </div>

              </div>
            </>


          )}
        {
          technology.map((item, index) =>

            index === 0 && <>
              <div className='Top_1'>
                <div className='Top_posts_img_1'>
                  <img src={item.ImageAsset} alt="alt" />
                </div>
                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                <div className="Top_Category_B">
                  <p >{item.CategoryName}</p> {`/ `}
                  <p className="Top_Publish_B">{item.PublishedDate}</p>
                </div>

              </div>
            </>


          )}
        {
          hollywood.map((item, index) =>

            index === 2 && <>
              <div className='Top_1'>
                <div className='Top_posts_img_1'>
                  <img src={item.ImageAsset} alt="alt" />
                </div>
                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                <div className="Top_Category_B">
                  <p >{item.CategoryName}</p> {`/ `}
                  <p className="Top_Publish_B">{item.PublishedDate}</p>
                </div>

              </div>
            </>


          )}

        {
          fitness.map((item, index) =>

            index === 2 && <>
              <div className='Top_1'>
                <div className='Top_posts_img_1'>
                  <img src={item.ImageAsset} alt="alt" />
                </div>
                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                <div className="Top_Category_B">
                  <p >{item.CategoryName}</p> {`/ `}
                  <p className="Top_Publish_B">{item.PublishedDate}</p>
                </div>

              </div>
            </>


          )}


        {
          food.map((item, index) =>

            index === 3 && <>
              <div className='Top_1' >
                <div className='Top_posts_img_1'>
                  <img src={item.ImageAsset} alt="alt" />
                </div>
                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>  <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                <div className="Top_Category_B">
                  <p >{item.CategoryName}</p> {`/ `}
                  <p className="Top_Publish_B">{item.PublishedDate}</p>
                </div>

              </div>
            </>


          )}



      </div>
      <div className='Add_1'>

        <img src="https://i.pinimg.com/originals/f7/13/e3/f713e3c3ee29a4bf5d708daef2c81881.png" alt="alt" />

      </div>
    </>
  )
}

export default Content