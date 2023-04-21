import React from "react";
import { Link } from "react-router-dom";
import "./noticeboard.css";

const Noticeboard = () => {
  return (
    <>
      <div class="panel noticeBoard_sec bg-white">
        <div class="panel-heading p-3 pb-2">
          <h3>Noticeboard</h3>
          <span></span>
        </div>
        <div class="panel-body p-3">
          <div class="message_inner">
            <Link href="#">
              <div class="inbox-item">
                <strong class="inbox-item-author">Meeting in 30 min</strong>
                <span class="inbox-item-date"></span>
                <p class="inbox-item-text">
                  the meeting is taking place at the fourth floor room 23
                </p>
              </div>
            </Link>
            <Link href="#">
              <div class="inbox-item">
                <strong class="inbox-item-author">STAFF HOLIDAY</strong>
                <span class="inbox-item-date"></span>
                <p class="inbox-item-text">BREAK FROM 23RD TO 27TH FEB</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticeboard;
