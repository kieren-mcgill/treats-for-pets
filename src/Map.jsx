

const Map = () => {
  return(
    <>
      <iframe
        className="display-el"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Treats+for+Pets,South+Road,Sheffield`}
        allowFullScreen>
      </iframe>
    </>
  )
}

export default Map