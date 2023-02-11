import React, { useState, useEffect } from "react";
import "./Pricing.css";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import ConfettiExplosion from "react-confetti-explosion";




const MonthlyPersonalized = [
  // 1 feed MonthlyPersonalized pricing
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">4.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      200 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">9.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      500 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">12.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      700 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">14.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      1000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">16.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      2000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 2 feed MonthlyPersonalized pricing
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">19.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      5000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">24.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      6000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">29.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      8000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">34.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      10000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 3 feed MonthlyPersonalized pricing
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">39.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      12000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">49.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      14000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">54.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      18000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">59.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      20000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 5 feed MonthlyPersonalized pricing
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">69.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      20000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">79.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      30000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">89.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      40000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">99.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      50000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 10 feed MonthlyPersonalized pricing
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">129.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      100000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">149.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      200000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">199.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      400000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">249.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      1000000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // Unlimited feed MonthlyPersonalized pricing
  {
    UnlimitedFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">399.99</p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/mo</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Super Unlimited SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Super Unlimited Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

const YearlyPersonalized = [
  // 1 feed YearlyPersonalized pricing
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${4.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(4.99 * 12 - ((4.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      200 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${9.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(9.99 * 12 - ((9.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      500 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${12.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(12.99 * 12 - ((12.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      700 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${14.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(14.99 * 12 - ((14.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      1000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    OneFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${16.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(16.99 * 12 - ((16.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      2000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">1 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Weekly Sync
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Email Support
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 2 feed YearlyPersonalized pricing
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${19.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(19.99 * 12 - ((19.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      5000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${24.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(24.99 * 12 - ((24.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      6000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${29.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(29.99 * 12 - ((29.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      8000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TwoFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${34.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(34.99 * 12 - ((34.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      10000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">2 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 3 feed YearlyPersonalized pricing
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${39.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(39.99 * 12 - ((39.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      12000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${49.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(49.99 * 12 - ((49.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      14000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${54.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(54.99 * 12 - ((54.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      18000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    ThreeFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${59.99 * 12}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(59.99 * 12 - ((59.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      20000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">3 Feed</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Live Chat</span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 5 feed YearlyPersonalized pricing
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(69.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(69.99 * 12 - ((69.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      20000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(79.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(79.99 * 12 - ((79.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      30000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(89.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(89.99 * 12 - ((89.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      40000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    FiveFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(99.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(99.99 * 12 - ((99.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      50000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">5 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Personal Feed Setup Assistance
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // 10 feed YearlyPersonalized pricing
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(129.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(129.99 * 12 - ((129.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      100000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(149.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(149.99 * 12 - ((149.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      200000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(199.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(199.99 * 12 - ((199.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      400000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    TenFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(249.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(249.99 * 12 - ((249.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      1000000 SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">10 Feeds</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
  // Unlimited feed YearlyPersonalized pricing
  {
    UnlimitedFeed: (
      <>
        <div
          style={{
            boxShadow:
              "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
            height: "fit-content",
          }}
          className="bg-white rounded-lg mt-6"
        >
          <div className="p-4">
            <p className="text-center text-3xl font-medium p-4 text-gray-800">
              Personalized
            </p>
            <p className="text-center text-sm font-medium pb-4">
              Choose the plan that’s right for you and start your 7-day trial
              today
            </p>
            <p className="text-3xl font-simibold line-through text-center">
              ${(399.99 * 12).toFixed(2)}
            </p>
            <div className="flex justify-center p-4">
              <p className="font-medium text-2xl text-center mt-4">
                <sup className="flex">
                  <p className="text-gray-500">USD</p>
                  <b>$</b>
                </sup>
              </p>
              <p className="text-7xl font-bold text-center">
                {(399.99 * 12 - ((399.99 * 12) / 100) * 20).toFixed(2)}
              </p>
              <p className="text-2xl mt-8 font-medium text-center">
                <sub>/yr</sub>
              </p>
            </div>
            <hr className="mt-2 mb-2" />
            <div>
              <p className="p-4 font-medium">
                WHAT’S INCLUDED ON PERSONALIZED :
              </p>
              <ul className="p-2">
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Super Unlimited SKU'S
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Super Unlimited Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Language
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Multi-Currency
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Filter Product Feeds
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Bulk Editing
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">Daily Sync</span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Upload Custom Images
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Metafields Mapping
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Include/Exclude Products
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Import and Export Feed with Custom Field
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      VIP support with feed approval/optimization assist
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      Tracking Tags Setup
                    </span>
                  </p>
                </li>
                <li className="p-1">
                  <p className="flex">
                    <CheckIcon style={{ color: "#008060" }} />
                    <span className="slef-center text-sm ml-4">
                      PMax & Smart Shopping Campaign
                    </span>
                  </p>
                </li>
              </ul>
              <Button
                className="flex justify-center w-full"
                style={{ background: "#008060 " }}
                variant="contained"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  },
];




const source = {
  position: "fixed",
  top: '1px',
  right: "50%",
  left: "50%",
  zIndex: 99999,
  // bottom: '100%'
};
const bigExplodeProps = {
  force: 0.3,
  duration: 7000,
  particleCount: 1000,
  floorHeight: 1600,
  floorWidth: 1600
};

const littleExplodeProps = {
  force: 0.2,
  duration: 5000,
  particleCount: 300,
  floorHeight: 10,
  floorWidth: 1000
};

const tinyExplodeProps = {
  force: 0.1,
  duration: 3000,
  particleCount: 100,
  floorHeight: 500,
  floorWidth: 300
};

const SetupPrice = () => {

  let audio = new Audio("/coupan.mp3")

  const [isExploding, setIsExploding] = React.useState(false);
  const [show, setShow] = React.useState(false)
  function handleClick() {
    setIsExploding(!isExploding);
    setShow(!show);
    audio.play()
  }

  const [price, setPrice] = React.useState(14);
  const handleChange = (event) => {
    setPrice(event.target.value);
    setIsExploding(false);
  };

  const [status, setStatus] = React.useState(1); // 0: no show, 1: show yes, 2: show no.
  const radioHandler = (status) => {
    setStatus(status);
    setIsExploding(false);
  };

  const [inputVal, setInputVal] = useState("");
  const handleInput = (e) => {
    setInputVal(e.target.value);
    setIsExploding(false);
  }

  return (
    <div className="md:container md:mx-auto">
      <p className="text-center text-4xl font-medium p-4">
        Take Your Store to the Next Level
      </p>
      <p className="text-center text-lg font-normal">
        Powerful plans to grow brands and businesses of all sizes.
      </p>

      <div class="container p-4">
        <div class="switches-container">
          <input
            checked={status === 1}
            onClick={(e) => radioHandler(1)}
            defaultChecked
            type="radio"
            id="switchMonthly"
            name="switchPlan"
            value="Monthly"
          />
          <input
            checked={status === 2}
            onClick={(e) => radioHandler(2)}
            type="radio"
            id="switchYearly"
            name="switchPlan"
            value="Yearly"
          />
          <label for="switchMonthly">Monthly</label>
          <label for="switchYearly">
            Yearly <b>Save 20%</b>
          </label>
          <div class="switch-wrapper">
            <div class="switch">
              <div>Monthly</div>
              <div>
                Yearly <b>Save 20%</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xl font-medium p-2">Estimate your price</p>
      <div className="flex justify-center p-2 lg:w-2/6 md:w-2/3 sm:w-full m-auto">
        <select
          onChange={handleChange}
          id="countries"
          class="border-2 border-[#008060] text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5  dark:border-green-700 dark:placeholder-gray-400  dark:focus:ring-green-800 dark:focus:border-green-800"
        >
          // 1 feed //
          <option style={{ background: "#fffcd6b9" }} value="1">
            1 Feed - 200 SKU'S
          </option>
          <option style={{ background: "#fffcd6b9" }} value="2">
            1 Feed - 500 SKU'S
          </option>
          <option style={{ background: "#fffcd6b9" }} value="3">
            1 Feed - 700 SKU'S
          </option>
          <option style={{ background: "#fffcd6b9" }} value="4">
            1 Feed - 1000 SKU'S
          </option>
          <option style={{ background: "#fffcd6b9" }} value="5">
            1 Feed - 2000 SKU'S
          </option>
          // 2 feed //
          <option style={{ background: "#d8b4fe" }} value="6">
            2 Feed - 5000 SKU'S
          </option>
          <option style={{ background: "#d8b4fe" }} value="7">
            2 Feed - 6000 SKU'S
          </option>
          <option style={{ background: "#d8b4fe" }} value="8">
            2 Feed - 8000 SKU'S
          </option>
          <option style={{ background: "#d8b4fe" }} value="9">
            2 Feed - 10000 SKU'S
          </option>
          // 3 feed //
          <option style={{ background: "#e4e5e0" }} value="10">
            3 Feed - 12000 SKU'S
          </option>
          <option style={{ background: "#e4e5e0" }} value="11">
            3 Feed - 14000 SKU'S
          </option>
          <option style={{ background: "#e4e5e0" }} value="12">
            3 Feed - 18000 SKU'S
          </option>
          <option style={{ background: "#e4e5e0" }} value="13">
            3 Feed - 20000 SKU'S
          </option>
          // 5 feed //
          <option selected style={{ background: "#f2bfbf" }} value="14">
            5 Feed - 20000 SKU'S
          </option>
          <option style={{ background: "#f2bfbf" }} value="15">
            5 Feed - 30000 SKU'S
          </option>
          <option style={{ background: "#f2bfbf" }} value="16">
            5 Feed - 40000 SKU'S
          </option>
          <option style={{ background: "#f2bfbf" }} value="17">
            5 Feed - 50000 SKU'S
          </option>
          // 10 feed //
          <option style={{ background: "#d4e7e5" }} value="18">
            10 Feed - 100000 SKU'S
          </option>
          <option style={{ background: "#d4e7e5" }} value="19">
            10 Feed - 200000 SKU'S
          </option>
          <option style={{ background: "#d4e7e5" }} value="20">
            10 Feed - 400000 SKU'S
          </option>
          <option style={{ background: "#d4e7e5" }} value="21">
            10 Feed - 1000000 SKU'S
          </option>
          <option style={{ background: "#ff8181" }} value="22">
            Unlimited Feed - Unlimited SKU'S
          </option>
        </select>
      </div>

      {/* monthly pricing  */}

      {status === 1 && (
        <>
          <div className="flex justify-evenly flex-wrap">
            <div
              style={{
                boxShadow:
                  "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
              }}
              className="bg-[#f1f8f5] rounded-b-lg relative mt-6 h-fit"
            >
              <div className="absolute bottom-[100%] bg-[#008060] w-full rounded-t-lg">
                <div className='flex items-center justify-center'>
                  <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pricing/redesign/sparkles-right-35abb2fb9b1fd67c6c7036bddc225c6c8aab2610f7a38664f5429fd7203c2da5.svg' />
                  <p className='text-white font-bold text-center mr-2 ml-2'>Recommended</p>
                  <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pricing/redesign/sparkles-right-35abb2fb9b1fd67c6c7036bddc225c6c8aab2610f7a38664f5429fd7203c2da5.svg' />
                </div>
              </div>
              <div className="p-4">
                <p className="text-center text-3xl font-medium p-4 text-gray-800">
                  Standard
                </p>
                <p className="text-center text-sm font-medium pb-4">
                  A package developed that brings you happiness and sales
                  together
                </p>
                <div className="flex justify-center p-4">
                  <p className="font-medium text-2xl text-center mt-4">
                    <sup className="flex">
                      <p className="text-gray-500">USD</p>
                      <b>$</b>
                    </sup>
                  </p>
                  <p className="text-7xl font-bold text-center">39.99</p>
                  <p className="text-2xl mt-8 font-medium text-center">
                    <sub>/mo</sub>
                  </p>
                </div>
                <hr className="mt-2 mb-2" />
                <div>
                  <p className="p-4 font-medium">
                    WHAT’S INCLUDED ON STANDARD :
                  </p>
                  <ul className="p-2">
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          12000 SKU'S
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          3 Feeds
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Multi-Language
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Multi-Currency
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Filter Product Feeds
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Bulk Editing
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Metafields Mapping
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Include/Exclude Products
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Live Chat
                        </span>
                      </p>
                    </li>
                  </ul>
                  <Button
                    className="flex justify-center w-full"
                    style={{ background: "#008060 " }}
                    variant="contained"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
            </div>
            {/* // 1 feed Monthly Personalized pricing card // */}
            {price == 1 ? (
              <>{MonthlyPersonalized[0].OneFeed}</>
            ) : null}
            {price == 2 ? (
              <>{MonthlyPersonalized[1].OneFeed}</>
            ) : null}
            {price == 3 ? (
              <>{MonthlyPersonalized[2].OneFeed}</>
            ) : null}
            {price == 4 ? (
              <>{MonthlyPersonalized[3].OneFeed}</>
            ) : null}
            {price == 5 ? (
              <>{MonthlyPersonalized[4].OneFeed}</>
            ) : null}
            {/* // 2 feed Monthly Personalized pricing card // */}
            {price == 6 ? (
              <>{MonthlyPersonalized[5].TwoFeed}</>
            ) : null}
            {price == 7 ? (
              <>{MonthlyPersonalized[6].TwoFeed}</>
            ) : null}
            {price == 8 ? (
              <>{MonthlyPersonalized[7].TwoFeed}</>
            ) : null}
            {price == 9 ? (
              <>{MonthlyPersonalized[8].TwoFeed}</>
            ) : null}
            {/* // 3 feed Monthly Personalized pricing card // */}
            {price == 10 ? (
              <>{MonthlyPersonalized[9].ThreeFeed}</>
            ) : null}
            {price == 11 ? (
              <>{MonthlyPersonalized[10].ThreeFeed}</>
            ) : null}
            {price == 12 ? (
              <>{MonthlyPersonalized[11].ThreeFeed}</>
            ) : null}
            {price == 13 ? (
              <>{MonthlyPersonalized[12].ThreeFeed}</>
            ) : null}
            {/* // 5 feed Monthly Personalized pricing card // */}
            {price == 14 ? (
              <>{MonthlyPersonalized[13].FiveFeed}</>
            ) : null}
            {price == 15 ? (
              <>{MonthlyPersonalized[14].FiveFeed}</>
            ) : null}
            {price == 16 ? (
              <>{MonthlyPersonalized[15].FiveFeed}</>
            ) : null}
            {price == 17 ? (
              <>{MonthlyPersonalized[16].FiveFeed}</>
            ) : null}
            {/* // 10 feed Monthly Personalized pricing card // */}
            {price == 18 ? (
              <>{MonthlyPersonalized[17].TenFeed}</>
            ) : null}
            {price == 19 ? (
              <>{MonthlyPersonalized[18].TenFeed}</>
            ) : null}
            {price == 20 ? (
              <>{MonthlyPersonalized[19].TenFeed}</>
            ) : null}
            {price == 21 ? (
              <>{MonthlyPersonalized[20].TenFeed}</>
            ) : null}
            {/* // Unlimited feed Monthly Personalized pricing card // */}
            {price == 22 ? <>{MonthlyPersonalized[21].UnlimitedFeed}</> : null}
            <div
              style={{
                boxShadow:
                  "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
              }}
              className="bg-white rounded-lg mt-6 md:w-[60%] sm:w-[60%] lg:w-[28%] h-fit"
            >
              <div className="p-4">
                <p className="text-center text-3xl font-medium p-4 text-gray-800">
                  Free
                </p>
                <p className="text-center text-sm font-medium pb-4">
                  Think Big Not Free
                </p>
                <div className="flex justify-center p-4">
                  <p className="font-medium text-2xl text-center mt-4">
                    <sup className="flex">
                      <p className="text-gray-500">USD</p>
                      <b>$</b>
                    </sup>
                  </p>
                  <p className="text-7xl font-bold text-center">0</p>
                  <p className="text-2xl mt-8 font-medium text-center">
                    <sub>/mo</sub>
                  </p>
                </div>
                <hr className="mt-2 mb-2" />
                <div>
                  <p className="p-4 font-medium">WHAT’S INCLUDED ON FREE :</p>
                  <ul className="p-2">
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          50 SKU'S
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">1 Feed</span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Monthly Sync
                        </span>
                      </p>
                    </li>
                  </ul>
                  <Button
                    className="flex justify-center w-full"
                    style={{ background: "#008060 " }}
                    variant="contained"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Yearly Pricing */}

      {status === 2 && (
        <>
          <div className="flex justify-evenly flex-wrap">
            <div
              style={{
                boxShadow:
                  "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
              }}
              className="bg-[#f1f8f5] rounded-b-lg relative mt-6 h-fit"
            >
              <div className="absolute bottom-[100%] bg-[#008060] w-full rounded-t-lg">
                <div className='flex items-center justify-center'>
                  <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pricing/redesign/sparkles-right-35abb2fb9b1fd67c6c7036bddc225c6c8aab2610f7a38664f5429fd7203c2da5.svg' />
                  <p className='text-white font-bold text-center mr-2 ml-2'>Recommended</p>
                  <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pricing/redesign/sparkles-right-35abb2fb9b1fd67c6c7036bddc225c6c8aab2610f7a38664f5429fd7203c2da5.svg' />
                </div>
              </div>
              <div className="p-4">
                <p className="text-center text-3xl font-medium p-4 text-gray-800">
                  Standard
                </p>
                <p className="text-center text-sm font-medium pb-4">
                  A package developed that brings you happiness and sales
                  together
                </p>
                <p className="text-3xl font-simibold line-through text-center">
                  ${(39.99 * 12).toFixed(2)}
                </p>
                <div className="flex justify-center p-4">
                  <p className="font-medium text-2xl text-center mt-4">
                    <sup className="flex">
                      <p className="text-gray-500">USD</p>
                      <b>$</b>
                    </sup>
                  </p>
                  <p className="text-7xl font-bold text-center">
                    {(39.99 * 12 - ((39.99 * 12) / 100) * 20).toFixed(2)}
                  </p>
                  <p className="text-2xl mt-8 font-medium text-center">
                    <sub>/yr</sub>
                  </p>
                </div>
                <hr className="mt-2 mb-2" />
                <div>
                  <p className="p-4 font-medium">
                    WHAT’S INCLUDED ON STANDARD :
                  </p>
                  <ul className="p-2">
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          12000 SKU'S
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          3 Feeds
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Multi-Language
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Multi-Currency
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Filter Product Feeds
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Bulk Editing
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Metafields Mapping
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Include/Exclude Products
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Live Chat
                        </span>
                      </p>
                    </li>
                  </ul>
                  <Button
                    className="flex justify-center w-full"
                    style={{ background: "#008060 " }}
                    variant="contained"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
            </div>
            {/* // 1 feed Monthly Personalized pricing card // */}
            {price == 1 ? (
              <>{YearlyPersonalized[0].OneFeed}</>
            ) : null}
            {price == 2 ? (
              <>{YearlyPersonalized[1].OneFeed}</>
            ) : null}
            {price == 3 ? (
              <>{YearlyPersonalized[2].OneFeed}</>
            ) : null}
            {price == 4 ? (
              <>{YearlyPersonalized[3].OneFeed}</>
            ) : null}
            {price == 5 ? (
              <>{YearlyPersonalized[4].OneFeed}</>
            ) : null}
            {/* // 2 feed Monthly Personalized pricing card // */}
            {price == 6 ? (
              <>{YearlyPersonalized[5].TwoFeed}</>
            ) : null}
            {price == 7 ? (
              <>{YearlyPersonalized[6].TwoFeed}</>
            ) : null}
            {price == 8 ? (
              <>{YearlyPersonalized[7].TwoFeed}</>
            ) : null}
            {price == 9 ? (
              <>{YearlyPersonalized[8].TwoFeed}</>
            ) : null}
            {/* // 3 feed Monthly Personalized pricing card // */}
            {price == 10 ? (
              <>{YearlyPersonalized[9].ThreeFeed}</>
            ) : null}
            {price == 11 ? (
              <>{YearlyPersonalized[10].ThreeFeed}</>
            ) : null}
            {price == 12 ? (
              <>{YearlyPersonalized[11].ThreeFeed}</>
            ) : null}
            {price == 13 ? (
              <>{YearlyPersonalized[12].ThreeFeed}</>
            ) : null}
            {/* // 5 feed Monthly Personalized pricing card // */}
            {price == 14 ? (
              <>{YearlyPersonalized[13].FiveFeed}</>
            ) : null}
            {price == 15 ? (
              <>{YearlyPersonalized[14].FiveFeed}</>
            ) : null}
            {price == 16 ? (
              <>{YearlyPersonalized[15].FiveFeed}</>
            ) : null}
            {price == 17 ? (
              <>{YearlyPersonalized[16].FiveFeed}</>
            ) : null}
            {/* // 10 feed Monthly Personalized pricing card // */}
            {price == 18 ? (
              <>{YearlyPersonalized[17].TenFeed}</>
            ) : null}
            {price == 19 ? (
              <>{YearlyPersonalized[18].TenFeed}</>
            ) : null}
            {price == 20 ? (
              <>{YearlyPersonalized[19].TenFeed}</>
            ) : null}
            {price == 21 ? (
              <>{YearlyPersonalized[20].TenFeed}</>
            ) : null}
            {/* // Unlimited feed Monthly Personalized pricing card // */}
            {price == 22 ? <>{YearlyPersonalized[21].UnlimitedFeed}</> : null}
            <div
              style={{
                boxShadow:
                  "0 0 0.3125rem rgba(23,24,24,.05),0 0.0625rem 0.125rem rgba(0,0,0,.15)",
              }}
              className="bg-white rounded-lg mt-6 md:w-[60%] sm:w-[60%] lg:w-[28%] h-fit"
            >
              <div className="p-4">
                <p className="text-center text-3xl font-medium p-4 text-gray-800">
                  Free
                </p>
                <p className="text-center text-sm font-medium pb-4">
                  Think Big Not Free
                </p>
                <div className="flex justify-center p-4">
                  <p className="font-medium text-2xl text-center mt-4">
                    <sup className="flex">
                      <p className="text-gray-500">USD</p>
                      <b>$</b>
                    </sup>
                  </p>
                  <p className="text-7xl font-bold text-center">0</p>
                  <p className="text-2xl mt-8 font-medium text-center">
                    <sub>/yr</sub>
                  </p>
                </div>
                <hr className="mt-2 mb-2" />
                <div>
                  <p className="p-4 font-medium">WHAT’S INCLUDED ON FREE :</p>
                  <ul className="p-2">
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          50 SKU'S
                        </span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">1 Feed</span>
                      </p>
                    </li>
                    <li className="p-1">
                      <p className="flex">
                        <CheckIcon style={{ color: "#008060" }} />
                        <span className="slef-center text-sm ml-4">
                          Monthly Sync
                        </span>
                      </p>
                    </li>
                  </ul>
                  <Button
                    className="flex justify-center w-full"
                    style={{ background: "#008060 " }}
                    variant="contained"
                  >
                    Try It Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <>
        <Divider style={{ width: "30%", margin: "auto", marginTop: "10px" }} />
        <div className="flex justify-center flex-wrap m-auto mt-4 mb-8">
          <div className="flex">
            <input
              placeholder="Enter Your Coupon Code"
              value={inputVal}
              onChange={handleInput}
              type="text"
              id="small-input"
              className="block w-full mr-2 p-2 text-black border-2 border-[#008060] bg-white rounded-lg focus:ring-green-900 dark:placeholder-gray-400 dark:focus:ring-green-900 "
            />
            <Button
              onClick={handleClick}
              style={{ background: "#008060" }}
              disabled={!inputVal}
              className="flex item-center align-center justify-center"
              variant="contained"
            >
              {isExploding && (
                <div style={source}>
                  <ConfettiExplosion {...bigExplodeProps} />
                </div>
              )}
              Apply
            </Button>
          </div>
        </div>
      </>
    </div>
  );
};

export default SetupPrice;
