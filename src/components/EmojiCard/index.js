import './index.css'

const EmojiCard = props => {
  const {emojiItem, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiItem
  const onClingemoji = () => {
    clickEmoji(id)
  }
  return (
    <li>
      <button type="button" className="each-emoji-cont" onClick={onClingemoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-size" />
      </button>
    </li>
  )
}
export default EmojiCard
