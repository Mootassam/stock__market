import React, { useState } from "react";
import "./stock.css";
import Number from "../../shared/Number";
function Stock(props) {
  const [show, setShow] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [showheader, setShowHeader] = useState(false);
  const [showpl, setshowPl] = useState(false);
  const [showProfile, setshowProfile] = useState(false);
  const [showmq, setShowmq] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // CONST FOR THE TIME
  const [time, setTime] = useState("09:09");
  const [limit, setLimit] = useState<any>(12);

  // CONST FOR THE HEADER
  const [headerInvested, setHeaderInvested] = useState("200");
  const [headerCurrent, setCurrent] = useState("200");
  const [bigpercent, setbigpercent] = useState("+380.00");
  const [smallpercent, setSmallPercent] = useState("+0.15");
  const [profile, setProfile] = useState("MQ4533");
  const [array, setArray] = useState([
    {
      name: "",
      qtevalue: "",
      avgvalue: "",
      percent: "",
      valueinvested: "",
      valueltp: "",
      valueltppercent: "",
      valuebankpercent: "",
    },
  ]);

  //CONST FOR THE FOOTER
  const [first, setFirst] = useState("+2,708.81");
  const [second, setSecond] = useState("+1.13");

  // CONST FOR THE TIME
  const timeshow = () => {
    setShow(true);
    setshowPl(false);
    setShowTime(true);
    setShowHeader(false);
    setshowProfile(false);
    setShowmq(false);
    setShowContent(false);
  };

  // CONST FOR THE FORM HEADER
  const EditHeader = () => {
    setShow(true);
    setshowPl(false);
    setShowHeader(true);
    setShowTime(false);
    setshowProfile(false);
    setShowmq(false);
    setShowContent(false);
  };

  const showp = () => {
    setShow(true);
    setshowProfile(true);
    setshowPl(false);
    setShowHeader(false);
    setShowTime(false);
    setShowmq(false);
    setShowContent(false);
  };

  const editPorfile = () => {
    setShow(true);
    setshowProfile(true);
    setshowPl(false);
    setShowHeader(false);
    setShowTime(false);
    setShowmq(false);
  };

  const showmqp = () => {
    setShow(true);
    setshowProfile(false);
    setshowPl(false);
    setShowHeader(false);
    setShowTime(false);
    setShowmq(true);
    setShowContent(false);
  };

  const showContents = () => {
    setShow(true);
    setShowContent(true);
    setshowProfile(false);
    setshowPl(false);
    setShowHeader(false);
    setShowTime(false);
    setShowmq(false);
  };

  const addFields = () => {
    setArray([
      ...array,
      {
        name: "",
        qtevalue: "",
        avgvalue: "",
        valueinvested: "",
        valueltp: "",
        valueltppercent: "",
        valuebankpercent: "",
        percent: "",
      },
    ]);
  };

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }

    if (limit >= 40) {
      background = "#68B16C";
    }

    return background;
  };

  const removeFields = (index) => {
    let formDelete = [...array];
    console.log(formDelete);

    formDelete.splice(index, 1);
    setArray(formDelete);
  };

  const handleChange = (event, i) => {
    let formN = [...array];
    formN[i] = { ...formN[i], [event.target.name]: event.target.value };
    setArray(formN);
  };

  return (
    <div className="app__stock">
      {show && (
        <>
          <div className="Edit__items">
            {showContent && (
              <div className="form__list">
                <div className="add" onClick={addFields}>
                  <span> + </span>
                </div>
                {array.map((item, index) => (
                  <div className="form__content">
                    <div className="form__left">
                      <div className="form__">
                        <div className="form__top">
                          <div className="formtop__left">
                            <div className="qty">
                              <label htmlFor="">QTY</label>
                              <input
                                type="text"
                                placeholder="QTY"
                                className="samll__input"
                                name="qtevalue"
                                onChange={(e) => {
                                  handleChange(e, index);
                                }}
                              />
                            </div>
                            <div className="qty">
                              <label htmlFor="">Avg</label>
                              <input
                                type="text"
                                placeholder="Avg"
                                className="samll__input"
                                name="avgvalue"
                                onChange={(e) => {
                                  handleChange(e, index);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form__second">
                          <div>
                            <input
                              type="text"
                              placeholder="Bank Name"
                              className="samll__input"
                              name="name"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              className="samll__input"
                              name="valuebankpercent"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form__third">
                          <div>
                            <input
                              type="text"
                              className="samll__input"
                              name="valueinvested"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              className="samll__input"
                              name="valueltp"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                            <input
                              type="text"
                              className="samll__input"
                              name="valueltppercent"
                              onChange={(e) => {
                                handleChange(e, index);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form__right">
                      <button
                        className="delete"
                        onClick={() => removeFields(index)}
                      >
                        Delete
                      </button>
                      <span className="index__delete">{index}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {showheader && (
              <div className="edit__header">
                <div className="current__items">
                  <div className="single__item">
                    <label htmlFor="">Invested</label>
                    <input
                      type="text"
                      placeholder="Invested"
                      onChange={(e) => setHeaderInvested(e.target.value)}
                    />
                  </div>
                  <div className="single__item">
                    <label htmlFor="">Current</label>
                    <input
                      type="text"
                      placeholder="Current"
                      onChange={(e) => setCurrent(e.target.value)}
                    />
                  </div>
                </div>

                <div className="Second__items">
                  <div>P&L</div>
                  <div className="input__list">
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => setbigpercent(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) => setSmallPercent(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {showmq && (
              <div className="showtime">
                <div className="stock__">
                  <label htmlFor="">Account Name</label>
                  <input
                    type="text"
                    placeholder="Account Name"
                    onChange={(e) => setProfile(e.target.value)}
                  />
                </div>
              </div>
            )}

            {showtime && (
              <>
                <div className="showtime">
                  <div className="stock__">
                    <label htmlFor="">Time</label>
                    <input
                      type="text"
                      placeholder="Time"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>

                  <div className="stock__">
                    <label htmlFor="">Battery</label>
                    <input
                      type="range"
                      min="12"
                      max="100"
                      onChange={(e) => setLimit(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {showProfile && (
              <div className="showitem">
                <div>Day's P&L</div>
                <div className="">
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => setFirst(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => setSecond(e.target.value)}
                  />
                </div>
              </div>
            )}
            {}
            <div className="edit__form">
              <div className="edit__cancel" onClick={() => setShow(false)}>
                Cancel
              </div>
              <div className="edit__submit" onClick={() => setShow(false)}>
                Ok
              </div>
            </div>
          </div>
        </>
      )}
      <div className="stock__headerphone">
        <div className="headerphone__left" onClick={() => timeshow()}>
          <span className="stock__time">{time}</span>
        </div>
        <div className="headerphone__right">
          <div className="header__signal">
            <div className="signal__1"></div>
            <div className="signal__2"></div>
            <div className="signal__3"></div>
            <div className="signal__4"></div>
          </div>
          <div className="signal__5G">
            <span>5G</span>
          </div>
          <div className="full__batttery">
            <div className="battery__stock">
              <div
                className="level__limit"
                style={{ width: `${limit}%`, background: CheckstatusBattery() }}
              ></div>
              <span className="level__number">{limit}</span>
            </div>
            <div className="bar__"></div>
          </div>
        </div>
      </div>
      <div className="header__subheader">
        <span className="subheader__portfolio">Portfolio</span>
      </div>

      <div className="header__tab">
        <div className="header__holding">
          <span className="text__tab __bleu"> Holdings</span>
          <div className="small__text holding__circle">{array.length}</div>
        </div>
        <div className="header__positions">
          <span className=" inactive__header __grey">Position</span>
        </div>
      </div>

      {/* styling the cadre */}
      <div className="header__cadre" onClick={() => EditHeader()}>
        <div className="before__ligne">
          <div className="before__left">
            <span className="before__title">Invested</span>
            <span className="before__amount">{headerInvested}</span>
          </div>
          <div className="before__right">
            <span className="before__title">Current</span>
            <span className="before__amount">{headerCurrent}</span>
          </div>
        </div>
        <div className="ligne"></div>
        <div className="after__ligne">
          <div>
            <span className="after__title">P&L</span>
          </div>
          <div className="ligne__right">
            <div>
              <span
                className={`cadre__amoutn ${
                  Number.verifyNumber(bigpercent) ? "color__red" : ""
                }`}
              >
                {bigpercent}
              </span>
            </div>
            <div>
              <span
                className={`circle  ${
                  Number.verifyNumber(smallpercent) ? "red__" : ""
                } `}
              >
                {smallpercent}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* styling the sub__menue  */}

      <div className="sub__menue">
        <div className="sub__menue__left">
          <div>
            <img src="/Krungthai/search.png" alt="" style={{ width: 14 }} />
          </div>
          <div>
            <img src="/Krungthai/filters.png" alt="" style={{ width: 15 }} />
          </div>
          <div>
            <img
              src="/Krungthai/lock.png"
              alt=""
              style={{ width: 13, height: 15 }}
            />
          </div>
        </div>
        <div className="sub__menue__right">
          <div className="items__menue">
            <img src="Krungthai/users.png" style={{ width: 16 }} />
            <span className="menue__text">Family</span>
          </div>
          <div className="items__menue">
            <img src="Krungthai/circle.png" style={{ width: 16 }} />
            <span className="menue__text">Analytics</span>
          </div>
        </div>
      </div>

      {/* styling the content  */}
      <div className="stock__content">
        {array.map((item, index) => (
          <div className="subm__menue__content" onClick={() => showContents()}>
            <div className="content__top">
              <div className="content__top__left">
                <div className="indice qty">Qty. {item.qtevalue}</div>
                <div className="small__circle"></div>
                <div className="indice">Avg. {item.avgvalue}</div>
              </div>
              <div
                className={`content__top__right green ${
                  Number.verifyNumber(
                    Number.CalculePercent(item.avgvalue, item.valueltp)
                  )
                    ? "color__red"
                    : ""
                }`}
              >
                {Number.CalculePercent(item.avgvalue, item.valueltp)}%
              </div>
            </div>
            <div className="content__center">
              <span className="center__left bankname">{item.name}</span>
              <span
                className={`conter__right gras__green ${
                  Number.verifyNumber(item.valuebankpercent) ? "color__red" : ""
                }`}
              >
                {item.valuebankpercent}
              </span>
            </div>
            <div className="content__footer">
              <span className="invested__amount">
                Invested {item.valueinvested}
              </span>
              <div>
                <span className="ltp">LTP {item.valueltp}</span>{" "}
                <span
                  className={`percentage ${
                    Number.verifyNumber(item.valueltppercent)
                      ? "color__red"
                      : ""
                  } `}
                >
                  ({item.valueltppercent}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* styling the header__menue  */}

      <div className="stock__bottom">
        <div className="bottom__pl" onClick={() => showp()}>
          <div className="pl__left">
            <span className="dayspl">Day's P&L</span>
          </div>
          <div className="pl__right">
            <span
              className={`bigNumber ${
                Number.verifyNumber(first) ? "color__red" : ""
              } `}
            >
              {first}
            </span>
            <span
              className={`smallNumber ${
                Number.verifyNumber(second) ? "color__red" : ""
              }`}
            >
              {second} %
            </span>
          </div>
        </div>

        <div className="bottom__menue">
          <div className="menue__">
            <img src="/Stock/1.png" alt="" style={{ width: 17, height: 21 }} />
            <label htmlFor="" className="menue__title">
              Watchlist
            </label>
          </div>
          <div className="menue__">
            <img src="/Stock/2.png" alt="" style={{ width: 18, height: 22 }} />
            <label htmlFor="" className="menue__title">
              Orders
            </label>
          </div>
          <div className="menue__">
            <img src="/Stock/3.png" alt="" style={{ width: 24, height: 21 }} />
            <label htmlFor="" className="menue__title">
              Portfolio
            </label>
          </div>
          <div className="menue__">
            <img src="/Stock/4.png" alt="" style={{ width: 21 }} />
            <label htmlFor="" className="menue__title">
              Tools
            </label>
          </div>
          <div className="menue__">
            <img src="/Stock/5.png" alt="" style={{ width: 21, height: 22 }} />
            <label
              htmlFor=""
              className="menue__title"
              onClick={() => showmqp()}
            >
              {profile}
            </label>
          </div>
        </div>
        <div className="border__bottom"></div>
      </div>
    </div>
  );
}

export default Stock;
