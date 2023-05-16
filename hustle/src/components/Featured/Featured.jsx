import React from 'react'
import { Feature, FeaturedContainer, Post, FeaturedRightTitle, FeaturedContainerRight, FeaturedContainerLeft, FeaturedRightTop, FeaturedLeftTop, FeaturedRightImg, FeaturedRightMiddle,  } from "./Featured.elements"
import post1 from "../../assets/post1.png"
import post2 from "../../assets/post2.png"
import post3 from "../../assets/post3.png"
import post4 from "../../assets/post4.png"
import post5 from "../../assets/post5.png"
import post6 from "../../assets/post6.png"
const Featured = () => {
  return (
    <Feature>
    <FeaturedContainer> 
        <FeaturedContainerLeft>
            <FeaturedLeftTop>Featured Stories</FeaturedLeftTop> 
            <Post>
            <FeaturedRightImg src={post1}/>
            <FeaturedRightTitle>Why Salvador Dalí is the most faked artist in the world</FeaturedRightTitle>
            <FeaturedRightMiddle>
            Dalí’s legacy was thrown into disarray by an American myth: that art is an investment.</FeaturedRightMiddle>
</Post>
            <Post>
            <FeaturedRightImg src={post1}/>
            <FeaturedRightTitle>Why Salvador Dalí is the most faked artist in the world</FeaturedRightTitle>
            <FeaturedRightMiddle>
            Dalí’s legacy was thrown into disarray by an American myth: that art is an investment.</FeaturedRightMiddle>
</Post>
      
        </FeaturedContainerLeft> 
        <FeaturedContainerRight> 
            <FeaturedRightTop>Daily Headlines</FeaturedRightTop> 
            <Post>
            <FeaturedRightImg src={post2}/>
            <FeaturedRightTitle>Sherlocking, explained</FeaturedRightTitle>
            <FeaturedRightMiddle>
When it comes to Apple, Sherlocking is a nail-biter for app developers.</FeaturedRightMiddle>
</Post>
            <Post>
            <FeaturedRightImg src={post3}/>
            <FeaturedRightTitle>With more pressing concerns at hand, olive oil drama stirs on LinkedIn
</FeaturedRightTitle>
            <FeaturedRightMiddle>
            Climate change has hurt olive production, stranding olive oil customers at a costly pit-y party.</FeaturedRightMiddle>
</Post>
            <Post>
            <FeaturedRightImg src={post4}/>
            <FeaturedRightTitle>Vice Media goes broke as the news continues to break
</FeaturedRightTitle>
            <FeaturedRightMiddle>
            It’s been a hard year for outlets that once sat at digital media’s cool kids table.</FeaturedRightMiddle>
</Post>
            <Post>
            <FeaturedRightImg src={post5}/>
            <FeaturedRightTitle>The air ambulance industry is looking up
</FeaturedRightTitle>
            <FeaturedRightMiddle>
            Improving tech and an aging population paint a rosy picture for airlift providers.</FeaturedRightMiddle>
</Post>
            <Post>
            <FeaturedRightImg src={post6}/>
            <FeaturedRightTitle>Reminder: Winning the lottery only works if, y’know, you actually claim the money
</FeaturedRightTitle>
            <FeaturedRightMiddle>
            Why $2B in lottery prizes goes unclaimed in the US every year — and what happens next.</FeaturedRightMiddle>
</Post>
            
        </FeaturedContainerRight>  
    </FeaturedContainer>  
    </Feature>
  )
}

export default Featured