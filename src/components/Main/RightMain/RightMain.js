import React, { useState } from 'react';
import './RightMain.css'
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWallet,
    faPlus,
    faCrown
} from '@fortawesome/free-solid-svg-icons';
const RightMain = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleConfirm = () => {
      setShowAnimation(true); // Show the animation
      setTimeout(() => {
        setShowAnimation(false); // Hide the animation after a while (e.g., 3 seconds)
        Swal.fire({
            icon: "success",
            title: "تم الشحن بنجاح!",
            text: "تم شحن المحفظة بقيمة 200.00 ر.س.",
            confirmButtonText: "موافق",
            customClass: {
              confirmButton: "btn btn-primary",
            },
            buttonsStyling: false,
          }).then(() => {
            // Display custom notification after SweetAlert
            setShowNotification(true);
    
            // Hide the notification after 5 seconds
            setTimeout(() => {
              setShowNotification(false);
            }, 5000);
          });
      }, 3000);
    };
  return (
    <div>
          {showAnimation && (
        <div className="square-container-parent">
        <div className="square-container">
          <div className="square blue"></div>
          <div className="square purple"></div>
          <div className="square cyan"></div>
          <div className="square violet"></div>
        </div>
        </div>
      )}
      {showNotification && (
        <div className="custom-notification">
          <div className="notification-icon">
            <img src='./celebrate.png'/>
          </div>
          <div className="notification-text">
            <strong>تنبيه جديد</strong><br/> تم شحن المحفظة من بطاقة الائتمان (**** **** **** 3889)
            بنجاح.
          </div>
          <button className="notification-close" onClick={() => setShowNotification(false)}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      )}
         <div
        className="modal fade"
        id="walletModal"
        tabIndex="-1"
        aria-labelledby="walletModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-5">
            <div className="modal-header border-0">
              <h3 className="modal-title dark-blue" id="walletModalLabel">
                <i className="bi bi-wallet2"></i> شحن المحفظة
              </h3>
            </div>
            <div className="modal-body">
              {/* Payment Method */}
              <div className="mb-3 text-end">
                <label htmlFor="paymentMethod" className="form-label fw-bold">
                  وسيلة الدفع
                </label>
                <select className="form-select" id="paymentMethod">
                  <option disabled selected> بطاقة ائتمان </option>
                  <option value="3889">**** **** **** 3889</option>
                  <option value="1234">**** **** **** 1234</option>
                  <option value="5678">**** **** **** 5678</option>
                </select>
              </div>

              {/* Account */}
              <div className="mb-3 text-end">
                <label htmlFor="account" className="form-label fw-bold">
                  من حساب
                </label>
                <select className="form-select" id="account">
                  <option value="3889">**** **** **** 3889</option>
                  <option value="1234">**** **** **** 1234</option>
                  <option value="5678">**** **** **** 5678</option>
                </select>
              </div>
            </div>
            <div className="modal-footer justify-content-start border-0">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#walletModal2">
                شحن المحفظة
              </button>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                الرجوع
              </button>
            </div>
          </div>
        </div>
      </div>
         <div
        className="modal fade"
        id="walletModal2"
        tabIndex="-1"
        aria-labelledby="walletModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-5">
            <div className="modal-header border-0">
              <h3 className="modal-title dark-blue" id="walletModalLabel2">
                <i className="bi bi-wallet2"></i> شحن المحفظة
              </h3>
            </div>
            <div className="modal-body">
              {/* Payment Method */}
              <div className="mb-3 text-end">
                <label htmlFor="paymentMethod" className="form-label fw-bold">
                  وسيلة الدفع
                </label>
                <select className="form-select" id="paymentMethod">
                  <option disabled selected> بطاقة ائتمان </option>
                  <option value="3889">**** **** **** 3889</option>
                  <option value="1234">**** **** **** 1234</option>
                  <option value="5678">**** **** **** 5678</option>
                </select>
              </div>

              {/* Account */}
              <div className="mb-3 text-end">
                <label htmlFor="account" className="form-label fw-bold">
                  من حساب
                </label>
                <select className="form-select" id="account">
                  <option value="3889">**** **** **** 3889</option>
                  <option value="1234">**** **** **** 1234</option>
                  <option value="5678">**** **** **** 5678</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <label htmlFor="account" className="form-label fw-bold">
                  المبلغ
                </label>
                <input className='form-control' type='number' value="200.00" />
              </div>
            </div>
            <div className="modal-footer justify-content-start border-0">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#walletModal3">
                شحن المحفظة
              </button>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                الرجوع
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="walletModal3"
        tabIndex="-1"
        aria-labelledby="walletModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-5">
            <div className="modal-header border-0">
              <h3 className="modal-title dark-blue" id="walletModalLabel3">
                <i className="bi bi-wallet2"></i> شحن المحفظة
              </h3>
            </div>
            <div className="modal-body">
                <label className="form-label text-black-50 fw-bold">
                هل أنت متأكد من شحن المحفظة بقيمة(200.00 ر.س.) من الحساب البنكى(**** **** **** 3889)؟
                </label>
            </div>
            <div className="modal-footer justify-content-start border-0">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleConfirm}>
                شحن المحفظة
              </button>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                الرجوع
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='card p-5 d-flex flex-column'>
        <h5 className='text-black-50'>رصيد المحفظة</h5>
        <h2 className='fw-bold dark-blue fs-40'>1,200.00 ر.س.</h2>
        <h6 className='fw-bold dark-blue'>مبيعات الشهر 12.81%</h6>
        <div className='mt-4 d-flex gap-3 justify-content-center'>
            <div className='btn sky-blue-btn py-2 px-3 d-flex gap-2 justify-content-center' data-bs-toggle="modal" data-bs-target="#walletModal">
                <FontAwesomeIcon icon={faWallet} size="1x" />
                <h6 className="m-0 ">شحن المحفظة</h6>
            </div>
            <div className='btn dark-blue-btn py-2 px-4 d-flex gap-2 justify-content-center'>
                <FontAwesomeIcon icon={faWallet} size="1x" />
                <h6 className="m-0 ">سحب الأرباح</h6>
            </div>
        </div>
      </div>
        <h5 className='fw-bold dark-blue text-end my-3'>التحويل السريع</h5>
        <div className='d-flex gap-2'>
        <div className='rounded-circle d-flex justify-content-center align-items-center' style={{width:"50px",minWidth:"50px", height: "50px", border:"2px dashed #eee"}}>
                <FontAwesomeIcon icon={faPlus} size="2x" color='#233365'/>
        </div>
        <img src='./person2.jpg' className='rounded-circle' style={{width:"50px",minWidth:"50px", height: "50px"}}/>
        <img src='./person2.jpg' className='rounded-circle' style={{width:"50px",minWidth:"50px", height: "50px"}}/>
        <img src='./person2.jpg' className='rounded-circle' style={{width:"50px",minWidth:"50px", height: "50px"}}/>
        <img src='./person2.jpg' className='rounded-circle' style={{width:"50px",minWidth:"50px", height: "50px"}}/>
        </div>
        <div className='card mt-4 p-3'>
        <h5 className='fw-bold dark-blue text-end'>المدفوعات الشهرية</h5>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-3 align-items-center mt-2'>
            <FontAwesomeIcon icon={faCrown} size="1x" color='#fff' className='p-2 rounded-4' style={{backgroundColor:"#FFAB68",width:"50px", height: "50px"}}/>
            <div className='text-end'>
                <h6 className='fw-bold dark-blue'>المدفوعات الشهرية</h6>
                <span className='dark-blue'>01.2024</span>
            </div>
        </div>
                <h5 className='fw-bold dark-blue'>299.00 ر.س</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-3 align-items-center mt-2'>
            <FontAwesomeIcon icon={faCrown} size="1x" color='#fff' className='p-2 rounded-4' style={{backgroundColor:"#7B78FF",width:"50px", height: "50px"}}/>
            <div className='text-end'>
                <h6 className='fw-bold dark-blue'>التسويق بالعمولة</h6>
                <span className='dark-blue'>01.2024</span>
            </div>
        </div>
                <h5 className='fw-bold dark-blue'>20.00 ر.س</h5>
        </div>
        </div>
    </div>
  )
}

export default RightMain
