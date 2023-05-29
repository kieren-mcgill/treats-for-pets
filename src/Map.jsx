

const Map = () => {
  return(
    <>
      <iframe
        width="450"
        height="250"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${"AIzaSyBqRogKM4SVkqDPAga_D_gJTn0CrUYp2yw"}&q=Treats+for+Pets,South+Road,Sheffield`}
        allowFullScreen>
      </iframe>
    </>
  )
}

export default Map