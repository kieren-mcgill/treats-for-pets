
const SocialHeader =({shopItems})=> {
  const textToDisplay = shopItems.length === 0 ? "Loading..." : shopItems[1].attributes.title;

  return(
    <>
      <p>{textToDisplay}</p>
    </>
  )
}

export default SocialHeader;