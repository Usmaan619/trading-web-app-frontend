import React from "react";

// Common
import Header from "../../common/header";
import Heading from "../../common/heading/heading";
import Footer from "../../common/footer";
const Profile = () => {
  const ProfileCard = [
    {
      value: "$12 031",
      name: "Balance",
      color: "stats__dodger--orange",
    },
    {
      value: "$114 103",
      name: "Deposit amount",
      color: "stats__dodger--green",
    },
    {
      value: "$89 812",
      name: "Total paid",
      color: "stats__dodger--blue",
    },
  ];
  const Table = [
    {
      name: "Today's registrations",
      number: "1",
    },
    {
      name: "Today's clicks",
      number: "9",
    },
    {
      name: "Total registrations",
      number: "21",
    },
    {
      name: "Total clicks",
      number: "503",
    },
    {
      name: "Total referrals",
      number: "12",
      color: "yellow",
    },
  ];
  const InvestCard = [
    {
      icon: "deposit__icon--orange",
      title: "Maximum",
      li1: "0.35",
      li2: "07.10.2023 12:22:44 PM",
      li3: "10 days",
      li4: "$2000",
      color: "progressbar--orange",
      width: "75%",
      percentage: "75%",
      profit: "$192",
    },
    {
      icon: "deposit__icon--green",
      title: "Standard",
      li1: "0.31",
      li2: "01.10.2023 12:21:30 PM",
      li3: "14 days",
      li4: "$800",
      color: "progressbar--green",
      width: " 69%",
      percentage: "69%",
      profit: "$67",
    },
    {
      icon: "deposit__icon--blue",
      title: "Lite",
      li1: "0.24",
      li2: "02.10.2023 12:18:27 PM",
      li3: "20 days",
      li4: "$300",
      color: "progressbar--blue",
      width: " 33%",
      percentage: "33%",
      profit: "$49",
    },
  ];
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* <!-- head --> */}
      <div class="section section--head">
        <div class="container">
          <div class="row">
            {/* <!-- title --> */}
            <div class="col-12">
              <Heading title="My profile " />
            </div>
            {/* <!-- end title --> */}
          </div>
        </div>
      </div>
      {/* <!-- end head --> */}
      {/* <!-- profile --> */}
      <div class="section">
        <div class="container">
          <div class="row">
            {/* <!-- tabs nav --> */}
            <div class="col-12 col-lg-3">
              <div class="section__tabs-profile">
                <ul
                  class="nav nav-tabs section__tabs section__tabs--big section__tabs--profile"
                  id="section__tabs"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-1"
                      type="button"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Dashboard
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab-2"
                      type="button"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Investing
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab-3"
                      type="button"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      Deposit
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab-4"
                      type="button"
                      role="tab"
                      aria-controls="tab-4"
                      aria-selected="false"
                    >
                      Withdraw
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab-5"
                      type="button"
                      role="tab"
                      aria-controls="tab-5"
                      aria-selected="false"
                    >
                      Settings
                    </button>
                  </li>
                </ul>

                {/* <!-- design elements --> */}
                <span class="screw screw--big-br screw--tablet"></span>
                <span class="screw screw--big-bl screw--tablet"></span>
                <span class="screw screw--big-tr screw--tablet"></span>
                <span class="screw screw--big-tl screw--tablet"></span>
              </div>
            </div>
            {/* <!-- end tabs nav --> */}

            {/* <!-- tabs content --> */}
            <div class="col-12 col-lg-9">
              <div class="tab-content">
                {/* <!-- dashboard --> */}
                <div
                  class="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div class="row">
                    {ProfileCard.map((link, index) => (
                      <div class="col-12 col-md-4">
                        {/* <!-- stats --> */}
                        <div class="stats">
                          <span class="stats__value">{link.value}</span>
                          <p class="stats__name">{link.name}</p>

                          {/* <!-- design elements --> */}
                          <span
                            class={`stats__dodger stats__dodger--left  ${link.color}`}
                          ></span>
                          <span
                            class={`stats__dodger stats__dodger--right  ${link.color}`}
                          ></span>
                        </div>
                        {/* <!-- end stats --> */}
                      </div>
                    ))}
                    ;
                    <div class="col-12">
                      {/* <!-- profile --> */}
                      <div class="profile">
                        <div class="row">
                          <div class="col-12">
                            <h3 class="profile__title profile__title--mt">
                              Invest in an arbitration pool
                            </h3>
                          </div>

                          <div class="col-12 col-xl-4">
                            <div class="form__group">
                              <label for="tariff0" class="form__label">
                                Tariff plan
                              </label>
                              <select
                                name="tariff0"
                                id="tariff0"
                                class="form__select"
                              >
                                <option value="0">Maximum</option>
                                <option value="1">Standard</option>
                                <option value="2">Lite</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-12 col-xl-4">
                            <div class="form__group">
                              <label for="period0" class="form__label">
                                Period
                              </label>
                              <select
                                name="period0"
                                id="period0"
                                class="form__select"
                              >
                                <option value="0">2 months</option>
                                <option value="1">6 months</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-12 col-xl-4">
                            <div class="form__group">
                              <label for="amount01" class="form__label">
                                Enter amount
                              </label>
                              <input
                                id="amount01"
                                type="text"
                                name="amount01"
                                class="apool__input"
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <button
                              class="form__btn form__btn--small"
                              data-bs-target="#modal-apool"
                              type="button"
                              data-bs-toggle="modal"
                            >
                              Invest
                            </button>
                          </div>
                        </div>

                        {/* <!-- design elements --> */}
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                        <span class="screw screw--lines-tl"></span>
                      </div>
                      {/* <!-- end profile --> */}
                    </div>
                    <div class="col-12">
                      {/* <!-- referral --> */}
                      <div class="invest invest--big">
                        <h2 class="invest__title">Referral link</h2>

                        <div class="invest__group">
                          <input
                            id="partnerlink"
                            type="text"
                            name="partnerlink"
                            class="form__input"
                            value="https://partnerlink.centure"
                          />
                        </div>

                        <p class="invest__text">
                          Your referral bonus is 1%. Open a deposit of $1000 or
                          more to increase your referral bonus to 3%.
                        </p>

                        <table class="invest__table">
                          <thead>
                            <tr>
                              <th>Action</th>
                              <th>Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Table.map((link, index) => (
                              <tr>
                                <td class={link.color}>{link.name}</td>
                                <td>{link.number}</td>
                              </tr>
                            ))}
                            ;
                          </tbody>
                        </table>

                        {/* <!-- design elements --> */}
                        <span class="block-icon block-icon--yellow">
                          <i class="ti ti-user-plus"></i>
                        </span>
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                      </div>
                      {/* <!-- end referral --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end dashboard --> */}

                {/* <!-- investing --> */}
                <div class="tab-pane fade" id="tab-2" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      {/* <!-- profile --> */}
                      <div class="profile">
                        {/* <!-- tabs nav --> */}
                        <ul
                          class="nav nav-tabs section__tabs section__tabs--left"
                          id="section__profile-tabs1"
                          role="tablist"
                        >
                          <li class="nav-item" role="presentation">
                            <button
                              class="active"
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f1"
                              type="button"
                              role="tab"
                              aria-controls="tab-f1"
                              aria-selected="true"
                            >
                              Active
                            </button>
                          </li>

                          <li class="nav-item" role="presentation">
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f2"
                              type="button"
                              role="tab"
                              aria-controls="tab-f2"
                              aria-selected="false"
                            >
                              Closed
                            </button>
                          </li>

                          <li class="nav-item" role="presentation">
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f3"
                              type="button"
                              role="tab"
                              aria-controls="tab-f3"
                              aria-selected="false"
                            >
                              New deposit
                            </button>
                          </li>
                        </ul>
                        {/* <!-- end tabs nav --> */}

                        {/* <!-- tabs content --> */}
                        <div class="tab-content">
                          {/* <!-- active --> */}
                          <div
                            class="tab-pane fade show active"
                            id="tab-f1"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                {/* <!-- deposit --> */}
                                {InvestCard.map((link, index) => (
                                  <div class="deposit">
                                    <div class="deposit__name">
                                      <span
                                        class={`deposit__icon ${link.icon}`}
                                      >
                                        <i class="ti ti-database-dollar"></i>
                                      </span>
                                      <h3 class="deposit__title">
                                        {link.title}
                                      </h3>
                                    </div>

                                    <ul class="deposit__list">
                                      <li>
                                        Daily profit (%): <b>{link.li1}</b>
                                      </li>
                                      <li>
                                        Was opened: <b>{link.li2}</b>
                                      </li>
                                      <li>
                                        Remaining: <b>{link.li3}</b>
                                      </li>
                                      <li>
                                        Deposit: <b>{link.li4}</b>
                                      </li>
                                    </ul>

                                    <div class={`progressbar  ${link.color}`}>
                                      <h3 class="progressbar__title">
                                        Accrued (%):
                                      </h3>
                                      <div
                                        class="progress"
                                        role="progressbar"
                                        aria-label="Animated striped"
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      >
                                        <div
                                          class="progress-bar progress-bar-striped progress-bar-animated"
                                          style={{ width: link.width }}
                                        >
                                          <span>{link.percentage}</span>
                                        </div>
                                      </div>
                                      <div class="progressbar__values">
                                        <span class="progressbar__value progressbar__value--left">
                                          0%
                                        </span>
                                        <span class="progressbar__value progressbar__value--right">
                                          100%
                                        </span>
                                      </div>
                                    </div>

                                    <div class="deposit__profit">
                                      <span>Profit</span>
                                      <p>{link.profit}</p>
                                    </div>
                                  </div>
                                ))}
                                ;{/* <!-- end deposit --> */}
                              </div>
                            </div>
                          </div>
                          {/* <!-- active --> */}

                          {/* <!-- closed --> */}
                          <div
                            class="tab-pane fade"
                            id="tab-f2"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                {/* <!-- info --> */}
                                <div class="profile__info">
                                  <p>
                                    <i class="ti ti-info-circle"></i> No closed
                                    deposits detected
                                  </p>
                                </div>
                                {/* <!-- end info --> */}
                              </div>
                            </div>
                          </div>
                          {/* <!-- end closed --> */}

                          {/* <!-- new --> */}
                          <div
                            class="tab-pane fade"
                            id="tab-f3"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">
                                  Invest in an arbitration pool
                                </h3>
                              </div>

                              <div class="col-12 col-xl-4">
                                <div class="form__group">
                                  <label for="tariff" class="form__label">
                                    Tariff plan
                                  </label>
                                  <select
                                    name="tariff"
                                    id="tariff"
                                    class="form__select"
                                  >
                                    <option value="0">Maximum</option>
                                    <option value="1">Standard</option>
                                    <option value="2">Lite</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-12 col-xl-4">
                                <div class="form__group">
                                  <label for="period" class="form__label">
                                    Period
                                  </label>
                                  <select
                                    name="period"
                                    id="period"
                                    class="form__select"
                                  >
                                    <option value="0">2 months</option>
                                    <option value="1">6 months</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-12 col-xl-4">
                                <div class="form__group">
                                  <label for="amount" class="form__label">
                                    Enter amount
                                  </label>
                                  <input
                                    id="amount"
                                    type="text"
                                    name="amount"
                                    class="apool__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  data-bs-target="#modal-apool"
                                  type="button"
                                  data-bs-toggle="modal"
                                >
                                  Invest
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end new --> */}
                        </div>
                        {/* <!-- end tabs content --> */}

                        {/* <!-- design elements --> */}
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                        <span class="screw screw--lines-tl"></span>
                      </div>
                      {/* <!-- end profile --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end investing --> */}

                {/* <!-- deposit --> */}
                <div class="tab-pane fade" id="tab-3" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      {/* <!-- profile --> */}
                      <div class="profile">
                        {/* <!-- tabs nav --> */}
                        <ul
                          class="nav nav-tabs section__tabs section__tabs--left"
                          id="section__profile-tabs2"
                          role="tablist"
                        >
                          <li class="nav-item" role="presentation">
                            <button
                              class="active"
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f4"
                              type="button"
                              role="tab"
                              aria-controls="tab-f4"
                              aria-selected="true"
                            >
                              Crypto
                            </button>
                          </li>

                          <li class="nav-item" role="presentation">
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f5"
                              type="button"
                              role="tab"
                              aria-controls="tab-f5"
                              aria-selected="false"
                            >
                              ePay
                            </button>
                          </li>
                        </ul>
                        {/* <!-- end tabs nav --> */}

                        {/* <!-- tabs content --> */}
                        <div class="tab-content">
                          {/* <!-- crypto --> */}
                          <div
                            class="tab-pane fade show active"
                            id="tab-f4"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">
                                  Make a deposit in cryptocurrency
                                </h3>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="crypto" class="form__label">
                                    Crypto
                                  </label>
                                  <select
                                    name="crypto"
                                    id="crypto"
                                    class="form__select"
                                  >
                                    <option value="0">Bitcoin</option>
                                    <option value="1">Ethereum</option>
                                    <option value="2">Litecoin</option>
                                    <option value="3">Solana</option>
                                    <option value="4">Dogecoin</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="amount2" class="form__label">
                                    Enter amount
                                  </label>
                                  <input
                                    id="amount2"
                                    type="text"
                                    name="amount2"
                                    class="apool__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  data-bs-target="#modal-deposit1"
                                  type="button"
                                  data-bs-toggle="modal"
                                >
                                  Deposite
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- crypto --> */}

                          {/* <!-- epay --> */}
                          <div
                            class="tab-pane fade"
                            id="tab-f5"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">Make a deposit</h3>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="method0" class="form__label">
                                    Payment method
                                  </label>
                                  <select
                                    name="method0"
                                    id="method0"
                                    class="form__select"
                                  >
                                    <option value="0">Visa</option>
                                    <option value="1">Mastercard</option>
                                    <option value="2">Paypal</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="amount3" class="form__label">
                                    Enter amount
                                  </label>
                                  <input
                                    id="amount3"
                                    type="text"
                                    name="amount3"
                                    class="apool__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  data-bs-target="#modal-deposit2"
                                  type="button"
                                  data-bs-toggle="modal"
                                >
                                  Deposite
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end epay --> */}
                        </div>
                        {/* <!-- end tabs content --> */}

                        {/* <!-- design elements --> */}
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                        <span class="screw screw--lines-tl"></span>
                      </div>
                      {/* <!-- end profile --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end deposit --> */}

                {/* <!-- withdraw --> */}
                <div class="tab-pane fade" id="tab-4" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      {/* <!-- profile --> */}
                      <div class="profile">
                        <div class="row">
                          <div class="col-12">
                            <h3 class="profile__title profile__title--mt">
                              Withdraw
                            </h3>
                          </div>

                          <div class="col-12 col-xl-6">
                            <div class="form__group">
                              <label for="method1" class="form__label">
                                Payment method
                              </label>
                              <select
                                name="method1"
                                id="method1"
                                class="form__select"
                              >
                                <option value="0">Bitcoin</option>
                                <option value="1">Ethereum</option>
                                <option value="2">Visa</option>
                                <option value="3">Mastercard</option>
                                <option value="4">Paypal</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-12 col-xl-6">
                            <div class="form__group">
                              <label for="amount4" class="form__label">
                                Enter amount
                              </label>
                              <input
                                id="amount4"
                                type="text"
                                name="amount4"
                                class="apool__input"
                              />
                            </div>
                          </div>

                          <div class="col-12 col-xl-12">
                            <div class="form__group">
                              <label for="wallet0" class="form__label">
                                Wallet
                              </label>
                              <input
                                name="wallet0"
                                id="wallet0"
                                class="form__input"
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <button
                              class="form__btn form__btn--small"
                              data-bs-target="#modal-withdraw"
                              type="button"
                              data-bs-toggle="modal"
                            >
                              Next
                            </button>
                          </div>
                        </div>

                        {/* <!-- design elements --> */}
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                        <span class="screw screw--lines-tl"></span>
                      </div>
                      {/* <!-- end profile --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end withdraw --> */}

                {/* <!-- settings --> */}
                <div class="tab-pane fade" id="tab-5" role="tabpanel">
                  <div class="row">
                    <div class="col-12">
                      {/* <!-- profile --> */}
                      <div class="profile">
                        {/* <!-- tabs nav --> */}
                        <ul
                          class="nav nav-tabs section__tabs section__tabs--left"
                          id="section__profile-tabs3"
                          role="tablist"
                        >
                          <li class="nav-item" role="presentation">
                            <button
                              class="active"
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f6"
                              type="button"
                              role="tab"
                              aria-controls="tab-f6"
                              aria-selected="true"
                            >
                              Profile
                            </button>
                          </li>

                          <li class="nav-item" role="presentation">
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f7"
                              type="button"
                              role="tab"
                              aria-controls="tab-f7"
                              aria-selected="false"
                            >
                              Wallets
                            </button>
                          </li>

                          <li class="nav-item" role="presentation">
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#tab-f8"
                              type="button"
                              role="tab"
                              aria-controls="tab-f8"
                              aria-selected="false"
                            >
                              Password
                            </button>
                          </li>
                        </ul>
                        {/* <!-- end tabs nav --> */}

                        {/* <!-- tabs content --> */}
                        <div class="tab-content">
                          {/* <!-- profile --> */}
                          <div
                            class="tab-pane fade show active"
                            id="tab-f6"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">
                                  Personal information
                                </h3>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="name1" class="form__label">
                                    Name
                                  </label>
                                  <input
                                    id="name1"
                                    type="text"
                                    name="name1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="email1" class="form__label">
                                    Email
                                  </label>
                                  <input
                                    id="email1"
                                    type="text"
                                    name="email1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="phone1" class="form__label">
                                    Phone
                                  </label>
                                  <input
                                    id="phone1"
                                    type="text"
                                    name="phone1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="telegram1" class="form__label">
                                    Telegram
                                  </label>
                                  <input
                                    id="telegram1"
                                    type="text"
                                    name="telegram1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  type="button"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- profile --> */}

                          {/* <!-- wallets --> */}
                          <div
                            class="tab-pane fade"
                            id="tab-f7"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">Your wallets</h3>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="bitcoin1" class="form__label">
                                    Bitcoin
                                  </label>
                                  <input
                                    id="bitcoin1"
                                    type="text"
                                    name="bitcoin1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="ethereum1" class="form__label">
                                    Ethereum
                                  </label>
                                  <input
                                    id="ethereum1"
                                    type="text"
                                    name="ethereum1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="vm1" class="form__label">
                                    Visa/Mastercard
                                  </label>
                                  <input
                                    id="vm1"
                                    type="text"
                                    name="vm1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="paypal1" class="form__label">
                                    Paypal
                                  </label>
                                  <input
                                    id="paypal1"
                                    type="text"
                                    name="paypal1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  type="button"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end wallets --> */}

                          {/* <!-- password --> */}
                          <div
                            class="tab-pane fade"
                            id="tab-f8"
                            role="tabpanel"
                          >
                            <div class="row">
                              <div class="col-12">
                                <h3 class="profile__title">Change password</h3>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="op1" class="form__label">
                                    Old password
                                  </label>
                                  <input
                                    id="op1"
                                    type="password"
                                    name="op1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="np1" class="form__label">
                                    New password
                                  </label>
                                  <input
                                    id="np1"
                                    type="password"
                                    name="np1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12 col-xl-6">
                                <div class="form__group">
                                  <label for="cnp1" class="form__label">
                                    Confirm new password
                                  </label>
                                  <input
                                    id="cnp1"
                                    type="password"
                                    name="cnp1"
                                    class="form__input"
                                  />
                                </div>
                              </div>

                              <div class="col-12">
                                <button
                                  class="form__btn form__btn--small"
                                  type="button"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end password --> */}
                        </div>
                        {/* <!-- end tabs content --> */}

                        {/* <!-- design elements --> */}
                        <span class="screw screw--lines-bl"></span>
                        <span class="screw screw--lines-br"></span>
                        <span class="screw screw--lines-tr"></span>
                        <span class="screw screw--lines-tl"></span>
                      </div>
                      {/* <!-- end profile --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end settings --> */}
              </div>
            </div>
            {/* <!-- end tabs content --> */}
          </div>
        </div>
      </div>
      {/* <!-- end profile --> */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Profile;
