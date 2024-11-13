import React  from "react";

const Question = () => {
  
  return (
    <>
      {/* <!-- question --> */}
      <section class="section">
        <div class="container">
          <div class="row row--relative">
            <div class="col-12">
              <div class="question">
                <h2 class="question__title">Any questions?</h2>
                <p class="question__text">
                  Our support team is always on call, and ready to help with all
                  your questions!
                </p>

                <div class="section__btns section__btns--mt">
                  <button
                    class="section__btn section__btn--light"
                    data-bs-target="#modal-ask"
                    type="button"
                    data-bs-toggle="modal"
                  >
                    Ask a question
                  </button>
                </div>

                {/* <!-- design elements --> */}
                <span class="block-icon block-icon--orange">
                  <i class="ti ti-info-circle"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>

            {/* <!-- animation background --> */}
            <div
              class="section__canvas section__canvas--second gradient-background"
              id="canvas2"
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- end question --> */}

      {/* <!-- ask modal --> */}
      <div
        class="modal modal--auto fade"
        id="modal-ask"
        tabindex="-1"
        aria-labelledby="modal-ask"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__content">
              <button
                class="modal__close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="ti ti-x"></i>
              </button>

              <h4 class="modal__title">Ask a question</h4>

              <p class="modal__text">
                Our support team is always on call, and ready to help with all
                your questions!
              </p>

              <form action="#" class="modal__form">
                <div class="form__group">
                  <input
                    name="name"
                    type="text"
                    class="form__input"
                    placeholder="Name"
                  />
                </div>

                <div class="form__group">
                  <input
                    name="mail"
                    type="text"
                    class="form__input"
                    placeholder="Email"
                  />
                </div>

                <div class="form__group">
                  <textarea
                    name="question"
                    class="form__textarea"
                    placeholder="Your question"
                  ></textarea>
                </div>

                <button class="form__btn" type="button">
                  Send
                </button>
              </form>

              {/* <!-- design elements --> */}
              <span class="screw screw--big-tl"></span>
              <span class="screw screw--big-bl"></span>
              <span class="screw screw--big-br"></span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end ask modal --> */}
    </>
  );
};
export default Question;
