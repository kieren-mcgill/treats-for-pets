import Map from "./Map";


const FindUs = () => {
  return (
      <div id="findUs">
        <div style={{ height: "150px", width: "auto", color: "white" }}></div>
        <div className="w-100 h-100 bg-light d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5">
          <div className="display-el">
            <Map/>
          </div>
          <div className="display-el beige d-flex flex-column align-items-center justify-content-center"
                style={ { lineHeight: "2"} }>
            <h5 className="pb-3">WHERE TO FIND US</h5>
            <p>Treats for Pets / Pets in Need<br/>
              357-359 South Road<br/>
              Walkley<br/>
              Sheffield<br/>
              S6 3TD
            </p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center beige">
          <small className="p-3 text-secondary"> Created by
            <a className="text-decoration-none text-secondary fw-bold"
                          href="https://www.kierenmcgill.co.uk"> Kieren McGill </a>
            <span>{new Date().getFullYear().toString()}</span>
          </small>
        </div>
      </div>
  )
}

export default FindUs;

