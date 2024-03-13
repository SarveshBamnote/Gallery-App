import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, changeDisplayImg, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail

  const onSelect = () => {
    changeDisplayImg(id)
  }

  const selectedThumbnail = isSelected ? 'selected-thumbnail' : ''

  return (
    <li className="thumbnail-list-container">
      <button className="thumbnail-btn" onClick={onSelect} type="button">
        <img
          className={`thumbnail ${selectedThumbnail}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
