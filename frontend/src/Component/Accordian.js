import react from "react";
const Accordian = () => {
  return (
    <>
      <div className="container mb-5 mt-3">
        <h1
          className=" text-center"
          style={{ fontSize: "3rem", fontWeight: "900" }}
        >
          <b>Frequently asked questions</b>
        </h1>
        <div className="accordion  mt-4" id="accordionExample">
          <div className="accordion-item bg-none">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h3>What is Netflix?</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>
                  Netflix is ​​a streaming service that lets you enjoy a wide
                  variety of award-winning TV shows, movies, anime,
                  documentaries on thousands of internet-connected devices.
                  <br></br>
                  <br /> You can watch as much as you want, whenever you want,
                  without any ads – all for a very low monthly fee. There's
                  always something new to discover, and new TV shows and movies
                  are added every week!
                </h3>
              </div>
            </div>
          </div>
          <div className="accordion-item  mt-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h3>How much does Netflix cost?</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>
                  Watch Netflix on your smartphone, tablet, smart TV, laptop, or
                  streaming device for a fixed monthly fee. Plans range from
                  ₹149 to ₹649 per month. No extra costs or contracts.
                </h3>
              </div>
            </div>
          </div>
          <div className="accordion-item  mt-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h3>Where can I see it?</h3>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>
                  Watch anywhere, anytime. To start watching instantly, sign in
                  with your Netflix account by visiting netflix.com on the web.
                  You can sign in from any Internet-connected device that offers
                  the Netflix app, such as your personal computer or smart TV,
                  smartphone, tablet, streaming media player and game console.
                </h3>
              </div>
            </div>
          </div>
          <div className="accordion-item  mt-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <h3>What can I see on Netflix?</h3>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>
                  Netflix's huge library includes feature films, documentaries,
                  TV shows, anime, award-winning Netflix Originals, and more.
                  Watch as much as you want, anytime you want.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accordian;
