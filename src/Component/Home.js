import React, { useContext, useEffect, useState } from 'react'
import { BlogContent } from "./Data"
import { NavLink } from 'react-router-dom'




const Home = () => {
  const { value1, value2, value3, value4, value5 } = useContext(BlogContent)
  const [kollywood] = value1;
  const [hollywood] = value2;
  const [technology] = value3;
  const [fitness] = value4;
  const [food] = value5;
  const [btn, setbtn] = useState(false)

  // const[top,setTop]=useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [btn]);

  return (
    <>
      <div >
        <div className='Home_img_container'>


          {kollywood.map((item, index) =>

            index === 0 && <>
              <div className='Home_img_1' >
                <img src={item.ImageAsset} alt="alt" />
              </div>
              <div className="Category_B_H"><p >{item.CategoryName} /  </p>
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>
            </>)}


          {hollywood.map((item, index) =>

            index === 0 && <>
              <div className='Home_img_2' >
                <img src={item.ImageAsset} alt="alt" />
              </div>

              <div className="Category_B_H1"><p >{item.CategoryName} /  </p>
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>
            </>)}


          {technology.map((item, index) =>

            index === 0 && <>
              <div className='Home_img_3' >
                <img src={item.ImageAsset} alt="alt" />
              </div>

              <div className="Category_B_H2"><p >{item.CategoryName} /  </p>
                <p className="Publish_B">{item.PublishedDate}</p>
              </div>
            </>)}



          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <h1 className='Latest'>The Latest</h1>
          <hr className='Latest_hr' />




          <div className='latest_main'>

            {food.map((item, index) =>

              index === 0 && <>
                <div className='Latest_container' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}><div className="Title_BH"><p >{item.Title}</p></div></NavLink>
                <div className="Content_BH"><p>{item.BlogContent}</p></div>
                <div className="Category_BH"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>
              </>)}
            {fitness.map((item, index) =>

              index === 3 && <>
                <div className='Latest_container_1' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}><div className="Title_BH1"><p >{item.Title}</p></div></NavLink>

                <div className="Content_BH1"><p>{item.BlogContent}</p></div>
                <div className="Category_BH1"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>


              </>)}
            {technology.map((item, index) =>

              index === 1 && <>
                <div className='Latest_container_2' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Title_BH2"><p >{item.Title}</p></div></NavLink>
                <div className="Content_BH2"><p>{item.BlogContent}</p></div>
                <div className="Category_BH2"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>
              </>)}
          </div>



          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <h1 className='Latest_Articles'>Latest articles</h1>
          <hr className='Latest_hr' />


          {
            food.map((item, index) =>

              index === 1 && <>
                <div className='Latest_Articles_items_H' >
                  <img src={item.ImageAsset} alt="alt" />
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>   <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Content_B"><p>{item.BlogContent}</p></div>
                  <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                    <p className="Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>
              </>


            )}


          {
            fitness.map((item, index) =>

              index === 3 && <>
                <div className='Latest_Articles_items_H' >
                  <img src={item.ImageAsset} alt="alt" />
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>     <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Content_B"><p>{item.BlogContent}</p></div>
                  <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                    <p className="Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>
              </>


            )}

          {
            hollywood.map((item, index) =>

              index === 3 && <>
                <div className='Latest_Articles_items_H' >
                  <img src={item.ImageAsset} alt="alt" />
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>     <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Content_B"><p>{item.BlogContent}</p></div>
                  <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                    <p className="Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>
              </>


            )}
          <div >

            {
              technology.map((item, index) =>

                index === 4 && <>
                  <div className='Latest_Articles_items_H' >
                    <img src={item.ImageAsset} alt="alt" />
                    <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>    <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                    <div className="Content_B"><p>{item.BlogContent}</p></div>
                    <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                      <p className="Publish_B">{item.PublishedDate}</p>
                    </div>

                  </div>
                </>


              )}


            {
              kollywood.map((item, index) =>

                index === 3 && <>
                  <div className='Latest_Articles_items_H' >
                    <img src={item.ImageAsset} alt="alt" />
                    <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>      <div className="Title_B"><p >{item.Title}</p></div></NavLink>
                    <div className="Content_B"><p>{item.BlogContent}</p></div>
                    <div className="Category_B"><p >{item.CategoryName}</p> {`/ `}
                      <p className="Publish_B">{item.PublishedDate}</p>
                    </div>

                  </div>
                </>


              )}



          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}













          <div ></div>
          <div className='Add_H'>

            <img src="https://i.pinimg.com/originals/f7/13/e3/f713e3c3ee29a4bf5d708daef2c81881.png" alt="alt" />

          </div>
        </div>
        <div className='Top_posts_container_H'>
          <h1 className='Top_posts_H'>Top Posts</h1>
          <hr className='Top_posts_hr_H' />
          {
            kollywood.map((item, index) =>

              index === 1 && <>
                <div className='Top_0' >
                  <div className='Top_posts_img_H'>
                    <img src={item.ImageAsset} alt="alt" />
                  </div>
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>     <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
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
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>     <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
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
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>  <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
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
                  <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>     <div className="Top_Title_B"><p >{item.Title}</p></div></NavLink>
                  <div className="Top_Category_B">
                    <p >{item.CategoryName}</p> {`/ `}
                    <p className="Top_Publish_B">{item.PublishedDate}</p>
                  </div>

                </div>
              </>


            )}


          {
            food.map((item, index) =>

              index === 4 && <>
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

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='Latest_stories_container'>

          <h1 className='Latest_stories'>Latest Stories</h1>
          <hr className='Latest_stories_hr' />


          <div className='latest_main'>

            {technology.map((item, index) =>

              index === 0 && <>
                <div className='Latest_container' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>  <div className="Title_BL"><p >{item.Title}</p></div></NavLink>
                <div className="Content_BL"><p>{item.BlogContent}</p></div>
                <div className="Category_BL"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>
              </>)}
            {hollywood.map((item, index) =>

              index === 0 && <>
                <div className='Latest_container_1' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}>  <div className="Title_BL1"><p >{item.Title}</p></div></NavLink>

                <div className="Content_BL1"><p>{item.BlogContent}</p></div>
                <div className="Category_BL1"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>


              </>)}
            {kollywood.map((item, index) =>

              index === 1 && <>
                <div className='Latest_container_2L' >
                  <img src={item.ImageAsset} alt="alt" />
                </div>

                <NavLink to={`/article/${item.Title}/${item.CategoryName}`}> <div className="Title_BL2"><p >{item.Title}</p></div></NavLink>
                <div className="Content_BL2"><p>{item.BlogContent}</p></div>
                <div className="Category_BL2"><p >{item.CategoryName}</p> {`/ `}
                  <p className="Publish_BH">{item.PublishedDate}</p>
                </div>
              </>)}
          </div>






        </div>













      </div>
      <button className='bt' onClick={() => setbtn(!btn)}>⬆️ Top</button>

    </>
  )

}

export default Home