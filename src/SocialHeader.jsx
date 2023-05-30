
const SocialHeader =({shopItems})=> {
  const textToDisplay = shopItems.length === 0 ? "Loading..." : shopItems[0].attributes.title;

  return(
    <>
      <p>{textToDisplay}</p>
    </>
  )
}

export default SocialHeader;