import React from "react";
import "./Krungthai.css";
function Krungthai(porps) {
  return (
    <div className="app__krungthai">
      <div className="krungthai__header">
        <div className="krungthai__left">
          <div className="cirlce__green">
            <img src="/check.svg" alt="show the the cirlce green" />
          </div>

          <div className="left__right">
            <div className="right__textgreen"> โอนเงินสำเร็จ</div>
            <div className="right__textgreenbottom">
              <div> รหัสอ้างอิง</div>
              <div className="textgreennumber"> Ae5Se82d8fffb4398</div>
            </div>
          </div>
        </div>
        <div className="krungthai__right"></div>
      </div>

      <div className="krungthai__sender">
        <div className="Krungthai__circle">
          <div className="cirecle__blue">
            <img src="/Krungthai/logo.png" style={{ width: 40, height: 40 }} />
          </div>
          <div>
            <img
              src="/Krungthai/vector.png"
              alt=""
              style={{ width: "20.81px" }}
            />
          </div>
        </div>

        <div className="Krungthai__right">
          <div className="krungthai__text">นายจุฑาวุธ วิจิตรพันธุ์</div>
          <div className="krungthai__smalltext"> กรุงไทย</div>
          <div className="krungthai__codereceiver"> XXX-X-XX484-0</div>
        </div>
      </div>

      <div className="krungthai__receiver">
        <div className="receive__circle">
          <div className="receive__circle">
            <img src="/Krungthai/image.png" style={{ width: 37, height: 37 }} />
          </div>
        </div>

        <div className="Krungthai__right">
          <div className="krungthai__text">นาย วรุตม์ แก้วประเสริฐ</div>
          <div className="krungthai__smalltext"> กรุงศรี</div>
          <div className="krungthai__codereceiver">XXX-X-XX452-3</div>
        </div>
      </div>

      <div className="krungthai__bottom">
        <div className="bottom__1">
          <div className="1__left">
            <span className="bottom__text">จำนวนเงิน</span>
          </div>
          <div className="__right2">
            <span className="right2__amount">{porps.amount}</span>
            <label className="unit">บาท</label>
          </div>
        </div>
        <div className="bottom__2">
          <div className="1__left">
            <span className="bottom__text">ค่าธรรมเนียม</span>
          </div>
          <div className="__right2">
            <span className="right2__amounts">0.00</span>
            <label className="unit">บาท</label>
          </div>
        </div>
        <div className="bottom__3">
          <div className="1__left">
            <span className="bottom__text">วันที่ทำรายการ</span>
          </div>
          <div className="__right2">
            <label htmlFor="" className="date__krungthai">
              09 พ.ค. 2567 - 11:18
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Krungthai;
