// Write your JS code here

import './index.css'

const GetBlogItem = props => {
  const {content2} = props
  const {title, description, publishedDate} = content2

  return (
    <li className="li">
      <div className="li2">
        <div className="titleAndDate">
          <p className="title">{title}</p>
          <p className="publishedDate">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </div>
      <hr className="hr" />
    </li>
  )
}

export default GetBlogItem
