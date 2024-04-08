// Write your JS code here
import './index.css'

import GetBlogItem from '../BlogItem'

const GetBlogsList = props => {
  const {content} = props

  return (
    <div className="blogsContainer">
      <ul className="ul">
        {content.map(eachItem => (
          <GetBlogItem content2={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default GetBlogsList
