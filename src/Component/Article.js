import React,{ useContext,  useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { BlogContent } from "./Data"


const Article = () => {
  const { articleTitle, articleCategory } = useParams();


  const { value1, value2, value3, value4, value5 } = useContext(BlogContent);
  const [kollywood] = value1;
  const [hollywood] = value2;
  const [technology] = value3;
  const [fitness] = value4;
  const [food] = value5;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
  <>
<div >

      <div >


{kollywood.map((article, index) =>article.Title === articleTitle && (
            
        <div key={index} >

        <div  className='artilce_box'>

                  <div className='article_Title'>{article.Title} </div>
                  
                  <div className='article_ImageAsset'>
                    <img  src={article.ImageAsset}  alt='Content' />
                  </div><hr/>

                  <div className='article_BlogContent'> {article.BlogContent}  </div><hr/>

          <div className='article_bottom'>

                  <div className='like'> 💖 </div>
                  
      
                  <div>{article.Likes} Likes</div> 
          </div> 

          <div  className='article_bottom_1'>
                
                  <div > WRITTEN BY --- Author Name </div>
      
                  <div> {article.PublishedDate}  </div>

          </div>   

               </div> 

               </div>  
            )
        )}

{hollywood.map((article, index) =>article.Title === articleTitle && (
            
        <div key={index} >

        <div  className='artilce_box'>

                  <div className='article_Title'>{article.Title} </div>
                  
                  <div className='article_ImageAsset'>
                    <img  src={article.ImageAsset}  alt='Content' />
                  </div><hr/>

                  <div className='article_BlogContent'> {article.BlogContent}  </div><hr/>

          <div className='article_bottom'>

                  <div className='like'> 💖 </div>
                  
      
                  <div>{article.Likes} Likes</div> 
          </div> 
          
          <div  className='article_bottom_1'>
                
                  <div > WRITTEN BY --- Author Name </div>
      
                  <div> {article.PublishedDate}  </div>

          </div>   

               </div> 

               </div>  
            )
        )}

{technology.map((article, index) =>article.Title === articleTitle && (
            
            <div key={index} >
    
            <div  className='artilce_box'>
    
                      <div className='article_Title'>{article.Title} </div>
                      
                      <div className='article_ImageAsset'>
                        <img  src={article.ImageAsset}  alt='Content' />
                      </div><hr/>
    
                      <div className='article_BlogContent'> {article.BlogContent}  </div><hr/>
    
              <div className='article_bottom'>
    
                      <div className='like'> 💖 </div>
                      
          
                      <div>{article.Likes} Likes</div> 
              </div> 
              
              <div  className='article_bottom_1'>
                    
                      <div > WRITTEN BY --- Author Name </div>
          
                      <div> {article.PublishedDate}  </div>
    
              </div>   
    
                   </div> 
    
                   </div>  
                )
            )}

{fitness.map((article, index) =>article.Title === articleTitle && (
            
            <div key={index} >
    
            <div  className='artilce_box'>
    
                      <div className='article_Title'>{article.Title} </div>
                      
                      <div className='article_ImageAsset'>
                        <img  src={article.ImageAsset}  alt='Content' />
                      </div><hr/>
    
                      <div className='article_BlogContent'> {article.BlogContent}  </div><hr/>
    
              <div className='article_bottom'>
    
                      <div className='like'> 💖 </div>
                      
          
                      <div>{article.Likes} Likes</div> 
              </div> 
              
              <div  className='article_bottom_1'>
                    
                      <div > WRITTEN BY --- Author Name </div>
          
                      <div> {article.PublishedDate}  </div>
    
              </div>   
    
                   </div> 
    
                   </div>  
                )
            )}

{food.map((article, index) =>article.Title === articleTitle && (
            
            <div key={index} >
    
            <div  className='artilce_box'>
    
                      <div className='article_Title'>{article.Title} </div>
                      
                      <div className='article_ImageAsset'>
                        <img  src={article.ImageAsset}  alt='Content' />
                      </div><hr/>
    
                      <div className='article_BlogContent'> {article.BlogContent}  </div><hr/>
    
              <div className='article_bottom'>
    
                      <div className='like'> 💖 </div>
                      
          
                      <div>{article.Likes} Likes</div> 
              </div> 
              
              <div  className='article_bottom_1'>
                    
                      <div > WRITTEN BY --- Author Name </div>
          
                      <div> {article.PublishedDate}  </div>
    
              </div>   
    
                   </div> 
    
                   </div>  
                )
            )}

      </div>




<div className='siren'>More From The Siren</div>
<div  className='more'>
        <div>

{ // eslint-disable-next-line
        kollywood.map((article, index) => {
              if (
                article.CategoryName === articleCategory &&
                index >= kollywood.length - 5 &&
                article.Title !== articleTitle
              ) {

              return (
                  <div key={index} className='list'>

                    <div className='list_img'>
                      <img src={article.ImageAsset}  alt='Content'  />
                    </div>

                    <NavLink className='list_title' to={`/article/${article.Title}/${article.CategoryName}`} >
                      {article.Title}
                    </NavLink>

                  
                  <div  className='list_bot'>

                      <div> Author Name </div>
                       
                      <div > {article.PublishedDate}   </div>
                                    
                  </div>

                  </div>
                );}})
              
}

{ // eslint-disable-next-line
        hollywood.map((article, index) => {
          if (
            article.CategoryName === articleCategory &&
            index >= kollywood.length - 5 &&
            article.Title !== articleTitle
          ) {

          return (
              <div key={index} className='list'>

                <div className='list_img'>
                  <img src={article.ImageAsset}  alt='Content'  />
                </div>

                <NavLink className='list_title' to={`/article/${article.Title}/${article.CategoryName}`} >
                  {article.Title}
                </NavLink>

              
              <div  className='list_bot'>

                  <div> Author Name </div>
                   
                  <div > {article.PublishedDate}   </div>
                                
              </div>

              </div>
            );}})
              
}

{ // eslint-disable-next-line
        technology.map((article, index) => {
          if (
            article.CategoryName === articleCategory &&
            index >= kollywood.length - 5 &&
            article.Title !== articleTitle
          ) {

          return (
              <div key={index} className='list'>

                <div className='list_img'>
                  <img src={article.ImageAsset}  alt='Content'  />
                </div>

                <NavLink className='list_title' to={`/article/${article.Title}/${article.CategoryName}`} >
                  {article.Title}
                </NavLink>

              
              <div  className='list_bot'>

                  <div> Author Name </div>
                   
                  <div > {article.PublishedDate}   </div>
                                
              </div>

              </div>
            );}})
              
}

{ // eslint-disable-next-line
        fitness.map((article, index) => {
          if (
            article.CategoryName === articleCategory &&
            index >= kollywood.length - 5 &&
            article.Title !== articleTitle
          ) {

          return (
              <div key={index} className='list'>

                <div className='list_img'>
                  <img src={article.ImageAsset}  alt='Content'  />
                </div>

                <NavLink className='list_title' to={`/article/${article.Title}/${article.CategoryName}`} >
                  {article.Title}
                </NavLink>

              
              <div  className='list_bot'>

                  <div> Author Name </div>
                   
                  <div > {article.PublishedDate}   </div>
                                
              </div>

              </div>
            );}})
}

{ // eslint-disable-next-line
        food.map((article, index) => {
          if (
            article.CategoryName === articleCategory &&
            index >= kollywood.length - 5 &&
            article.Title !== articleTitle
          ) {

          return (
              <div key={index} className='list'>

                <div className='list_img'>
                  <img src={article.ImageAsset}  alt='Content'  />
                </div>

                <NavLink className='list_title' to={`/article/${article.Title}/${article.CategoryName}`} >
                  {article.Title}
                </NavLink>

              
              <div  className='list_bot'>

                  <div> Author Name </div>
                   
                  <div > {article.PublishedDate}   </div>
                                
              </div>

              </div>
            );}})
              
}
       
</div>

</div>

</div>

</>
   );
  };
  
  export default Article;