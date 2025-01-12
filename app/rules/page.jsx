"use client";
import { useState } from "react";

const Ruls = () => {
  const [state, setState] = useState(0);
  return (
    <div className="flex w-full py-[72px] bg-white shadow-[0_0_6px_0_rgba(125,125,125,0.5)] rounded-lg items-center justify-center my-8">
      <div className="flex flex-col w-full max-w-[1044px] items-center gap-8">
        <div className="grid grid-cols-4 gap-x-9 gap-y-4 w-full">
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(0);
            }}
          >
            کارشناسی
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(1);
            }}
          >
            سرویس دوره ایی
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(2);
            }}
          >
            باتری
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(3);
            }}
          >
            کارپایا
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(3);
            }}
          >
            کارپایا
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(3);
            }}
          >
            کارپایا
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(3);
            }}
          >
            کارپایا
          </button>
          <button
            className="border border-[#F58052] text-[#F58052] rounded-lg text-sm font-medium w-full h-14 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setState(3);
            }}
          >
            کارپایا
          </button>
        </div>
        {
          {
            0: (
              <div className="flex items-start flex-col">
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "16.0pt" }}>
                      <span style={{ fontFamily: '"Arial",sans-serif' }}>
                        <span style={{ color: "#ed7d31" }}>
                          شرایط استفاده از سامانه کارشناسی کارپایا
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#6e6e6e" }}>
                              این سند به‌ عنوان یک قرارداد الزام‌آور بر روابط
                              بین شرکت خودرو پردازش هوشمند (سهامی خاص) و کاربران
                              حاکم است و کلیه حقوق و تعهدات کارپایا و کاربر را
                              در قبال یکدیگر تعیین می‌کند. استفاده از خدمات
                              کارپایا به این معنی است که کاربران از کلیه شرایط،
                              حقوق و تعهدات مندرج در این سند آگاهی کامل دارند و
                              همه آن‌ها را قبول می‌کنند و هرگونه ادعا یا اعتراض
                              آتی را در این خصوص بلا اعتبار می‌‌نماید. بنابراین
                              ضروری است پیش از استفاده از خدمات کارپایا، این
                              شرایط و مقررات به‌ دقت مطالعه شوند
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#6e6e6e" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <br />
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            ماده یک) تعاریف و اصطلاحات
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>:</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            واژگان و اصطلاحاتی که در شرایط و مقررات حاضر مورد
                            استفاده قرار گرفته‌اند، دارای معانی به شرح ذیل
                            می‌باشند:
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <ul>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                شرکت
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              منظور شرکت آسان خودرو آینده ایرانیان (سهامی خاص)
                              با شناسه ملی{" "}
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              14011593151
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              است
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارپایا
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              نام و علامت تجاری متعلق به شرکت آسان خودرو آینده
                              ایرانیان و بستر آنلاین (پلتفرم) متعلق به این شرکت
                              برای ارائه خدمات کارشناسی خودرو و موتورسیکلت،
                              سرویس دوره‌ای خودرو و تسهیل فرایند خرید و فروش
                              خودرو و موتورسیکلت می‌باشد که از طریق سایت و‌
                              اپلیکیشن کارپایا قابل استفاده است
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                خدمات کارپایا
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              این خدمات شامل کارشناسی خودرو و موتورسیکلت، در محل
                              مشتری و نمایندگیهای کارپایا می باشد.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کاربر
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              منظور اشخاصی هستند که از طریق روش‌های پیش‌بینی شده
                              مانند مراجعه به سایت کارپایا به نشانی
                            </span>
                          </span>{" "}
                          <a href="https://karnameh.com/">
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                <span style={{ color: "#ed7d31" }}>
                                  carpaya.com
                                </span>
                              </span>
                            </span>
                          </a>
                          <u> </u>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              و تماس تلفنی با کارپایا، درخواست خود مبنی بر
                              استفاده از خدمات کارپایا را ثبت می‌نمایند
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                خودرو
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              منظور خودرویی است که در زمان ثبت درخواست توسط
                              کاربر، اطلاعات آن جهت استفاده از انواع خدمات
                              کارپایا اعلام می‌گردد و در واقع موضوع درخواست
                              کاربر می‌باشد
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارشناسی ویژه
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر،
                              خودروی مشخص از نظر وضعیت بدنه، فنی و مکانیکی توسط
                              کارشناس فنی بررسی می‌شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارشناسی استاندارد
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر،
                              خودروی مشخص از نظر وضعیت فنی و بدنه توسط کارشناس
                              فنی بررسی می‌شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارشناسی رنگ و بدنه
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر،
                              خودروی مشخص از نظر وضعیت بدنه توسط کارشناس فنی
                              بررسی می‌شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارشناسی موتورسیکلت
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر،
                              موتورسیکلت مشخص از نظر وضعیت فنی و بدنه توسط
                              کارشناس فنی بررسی می‌شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                کارشناس فنی
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              اشخاصی که برای انجام عملیات کارشناسی خودرو و
                              موتورسیکلت و سرویس دوره‌ای خودرو توسط کارپایا
                              اختصاص داده می‌شوند
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                موضوع کارشناسی
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              موضوع کارشناسی، خودرو یا موتورسیکلتی است که مشخصات
                              آن در درخواست کارشناسی مربوطه توسط کاربر اعلام و
                              ثبت شده است
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                گزارش کارشناسی
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              گزارشی است که بعد بازدید از موضوع کارشناسی حسب
                              مورد در خصوص وضعیت فنی و بدنه آن توسط کارشناس فنی
                              تهیه می‌شود و کاربر می‌تواند این گزارش را به‌ صورت
                              آنلاین از طریق لینک ارسالی توسط کارپایا مشاهده
                              نماید و یا از طریق اوراق گزارش کارشناسی از آن مطلع
                              شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                ضمانت‌نامه ویژه کارپایا
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :‌
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              سندی متضمن شرایط و حدود استفاده از تضمین کارشناسی
                              بدنه و یا فنی و بدنه خودرو است که مطابق با شرایط و
                              مقررات سند حاضر و مندرجات ضمانت‌نامه مذکور، به
                              خریدار خودرو تحویل می‌گردد
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                خودروی صفر
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              خودرو با کارکرد حداکثر 1000 کیلومتر یا ظرف{" "}
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              ۶
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              {" "}
                              ماه از تولید، صفر محسوب می‌شود
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                دارایی‌های فکری
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              دارایی‌های فکری شامل متون، طرح‌های گرافیکی، عکس،
                              علایم تجاری، لوگو، کد‌های نرم‌افزار، ساختار و نحوه
                              بیان و تنظیم مطالب و محتوای موجود در سایت کارپایا
                              و غیره است
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span style={{ color: "#202021" }}>
                        <span style={{ fontFamily: "Calibri,sans-serif" }}>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                فورس ماژور
                              </span>
                            </span>
                          </strong>
                          <strong>
                            <span style={{ fontSize: "15.0pt" }}>
                              <span
                                style={{ fontFamily: '"Arial",sans-serif' }}
                              >
                                :
                              </span>
                            </span>
                          </strong>{" "}
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              منظور از فورس ماژور، وقوع هرگونه حادثه خارجی، غیر
                              قابل دفع و غیر قابل پیش‌بینی است که مستند به فعل
                              یا ترک فعل هیچ‌ یک از طرفین (کارپایا و کاربر)
                              نباشد. از جمله مصادیق آن می‌توان به سیل، زلزله،
                              آتش‌سوزی، جنگ، اعتصاب، بیماری‌های واگیردار و یا
                              حوادث دیگر اشاره نمود که موجب توقف در ارائه خدمات
                              گردد یا به‌ رغم اعمال سعی و تلاش لازم، اجرای آن‌ها
                              را به تاخير اندازد
                            </span>
                          </span>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              .
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده دو) شرایط عمومی استفاده از خدمات کارپایا
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-2- به منظور دریافت خدمات کارپایا، کاربر می‌تواند
                            از طریق هر یک از راه‌های{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                سایت کارپایا
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#ed7d31" }}>، </span>
                        </span>
                      </span>
                      <a href="https://cafebazaar.ir/app/com.karnameh">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                اپلیکیشن کارپایا
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      &nbsp;{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            و تماس با شماره پشتیبانی کارپایا (58919-021) نسبت به
                            ثبت درخواست خود برابر با شرایط و مقررات این سند
                            اقدام نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-2- طبق توافق کارپایا و دیوار، کاربر می‌تواند از
                            طریق اپلیکیشن/سایت دیوار نیز درخواست کارشناسی خودرو
                            را ثبت نماید. بنابراین امکان ثبت درخواست کارشناسی به
                            وسیله اپلیکیشن/سایت دیوار به‌ هیچ‌ عنوان دلیل بر
                            مسئولیت دیوار در خصوص خدمات کارپایا نیست.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-2- به منظور استفاده از خدمات کارپایا، کاربر (شخص
                            حقیقی) باید دارای اهلیت قانونی باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-2- کاربر باید گذرواژه‌ای را كه به صورت رمز یکبار
                            مصرف (
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            OTP: One-time Password
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            ) جهت استفاده از سایت کارپایا برای ایشان ارسال
                            می‌شود، به صورت محرمانه حفظ نماید و آن را در اختیار
                            دیگران قرار ندهد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-2- کاربر با اعلام شماره همراه خود به کارپایا
                            می‌پذیرد که کارپایا پیامک‌های اطلاع‌رسانی رویدادها،
                            خدمات و سرویس‌های ویژه را برای وی ارسال نماید. در
                            صورت تمایل، کاربر می‌تواند از طریق تماس با مرکز
                            پشتیبانی کارپایا درخواست نماید که ارسال این پیامک‌ها
                            به وی قطع شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-2- بازدید حضوری از خودرو یا موتورسیکلت به هر جهتی
                            اعم از کارشناسی یا بازرسی برای تعیین خسارت، فقط در
                            محدوده جغرافیایی مشخص در سایت کارپایا انجام می‌شود و
                            خارج از محدوده سرویس‌دهی، امکان ارائه خدمات توسط
                            کارپایا وجود ندارد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-2- کاربر متعهد است از اطلاعاتی که در نتیجه‌
                            استفاده از خدمات کارپایا کسب نموده است (مانند
                            اطلاعات تماس کارشناس فنی، خریدار و فروشنده)، خارج از
                            چارچوب کارپایا استفاده ننماید و همچنین در راستای
                            حفاظت از داده‌ها و اطلاعات افراد، از ذخیره اطلاعات
                            تماس افرادی که از طریق کارپایا به آن‌ها معرفی شده‌ و
                            نیز برقراری ارتباط با ایشان خارج از چارچوب کارپایا،
                            اجتناب نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-2- کاربر متعهد می‌شود که در خصوص خدمات کارپایا فقط
                            با شرکت در ارتباط بوده و با کارشناسان فنی کارپایا و
                            همچنین فروشندگان و خریدارانی که به واسطه خدمات
                            کارپایا معرفی شده‌اند، به صورت جداگانه و مستقیم
                            هیچ‌گونه ارتباطی برقرار نکند. همچنین بعد از اتمام
                            فرایند خدمات، برقراری هرگونه ارتباط مستقیم با
                            کارشناسان فنی به هر دلیلی مجاز نخواهد بود و ضروری
                            است که کلیه ارتباطات از طریق کارپایا صورت پذیرد. در
                            صورتی که کاربر خارج از مندرجات این سند با آن
                            کارشناسان ارتباط برقرار کند و یا کاربر بخواهد
                            کارپایا را از فرایند خدمات حذف کرده و مستقیماً اقدام
                            به اتمام فرایند نماید، کارپایا مجاز و محق می‌باشد
                            ضمن لغو خدمات، در صورت وجود مبلغ پرداخت شده توسط
                            کاربر، آن را به عنوان خسارات قراردادی ضبط نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-2- پرداخت هرگونه وجهی مازاد بر مبلغ کارمزد اعلامی
                            کارپایا، در هر قالبی اعم از هدیه، انعام، پاداش و
                            امثال آن‌‌ها توسط کاربران به کارشناسان فنی یا
                            دستیاران معامله ممنوع است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-2- هرگونه علامت، عدد، کلمه، تصویر یا نشان
                            الکترونیک که مثبِت هویت امضا کننده باشد و به این سند
                            یا سایر اسناد صادره در این زمینه ملحق شود، به منزله
                            امضای الکترونیک و همانند امضای دست‌نویس دارای آثار
                            حقوقی و واجد اعتبار است و امضا کننده را متعهد و
                            ملتزم به مفاد سندی می‌نماید که به طرق مزبور امضا
                            نموده است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده سه) حقوق و تعهدات عمومی کارپایا
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-3- کارپایا متعهد به تلاش برای ارائه‌ خدمات با
                            کیفیت است و در این راستا با به‌ روزرسانی ابزارها و
                            روش‌ها متناسب با نیاز کاربران، سطح خدمات ارائه‌ شده
                            به آنان را ارتقا می‌دهد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-3- کارپایا متعهد است کارشناسان فنی را برای انجام
                            عملیات کارشناسی و سرویس دوره‌ای خودرو و همچنین
                            کارشناسی موتورسیکلت اختصاص دهد که از دقت، تجربه و
                            مهارت کافی برخوردار بوده و در حین بازدید از خودرو یا
                            موتورسیکلت و انجام عملیات مربوطه از ابزارهای متناسب
                            استفاده نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-3- کارپایا با تمام امکانات خود از جمله مرکز
                            پشتیبانی، بازرسی، نظارت و میانجیگری، جهت جلب رضایت
                            کاربران، رفع اختلافات ایجاد شده بین کاربران با افراد
                            دیگر و ایجاد صلح و سازش مابین آن‌ها اقدام می‌نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-3- کارپایا محق است در هر زمانی شرایط و مقررات حاضر
                            را تغییر دهد. استفاده کاربر از خدمات کارپایا، پس از
                            هر بار تغییر در سند حاضر، به معنی اطلاع و پذیرش این
                            تغییرات است. بنابراین کاربر با ثبت هر درخواست خود
                            مبنی بر استفاده از خدمات کارپایا، اعلام می‌دارد که
                            شرایط و قوانین حاضر را به صورت کامل و دقیق مطالعه
                            نموده و پذیرفته و هرگونه اعتراض و یا ایراد آتی در
                            خصوص بی اطلاعی و یا مخالفت با شرایط و مقررات کارپایا
                            بی اعتبار است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده چهار) شرایط اختصاصی کارشناسی خودرو
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-4- کارشناسی خودرو به سه صورت ویژه، استاندارد و رنگ
                            و بدنه توسط کارپایا ارائه می‌شود که درخواست هر یک پس
                            از پرداخت کارمزد مربوطه توسط کاربر، ثبت و فقط برای
                            خودرویی که مشخصات آن در درخواست کارشناسی درج شده، در
                            محل کاربر یا مراکز معرفی شده، توسط کارشناسان فنی
                            انجام می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-4- کاربر در هنگام{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/car-inspection">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                ثبت درخواست کارشناسی
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            از طرق پیش‌بینی شده، باید محل مورد نظر خود برای
                            کارشناسی خودرو را به صورت دقیق مشخص و اعلام نماید.
                            در صورت درخواست تغییر آدرس توسط کاربر، درخواست جدید
                            محسوب شده و مبلغی به میزان دو میلیون ریال از کارمزد
                            پرداخت شده ایشان کسر و مابقی مبلغ در قالب کد تخفیف
                            به کاربر عودت داده می‌شود. بدیهی است اعزام کارشناس
                            به آدرس جدید درخواستی، مستلزم پرداخت کارمزد و انجام
                            هماهنگی مجدد است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-4- در صورت هرگونه مغایرت در اطلاعات پیامک ثبت
                            نهایی درخواست کارشناسی خودرو مانند مغایرت در مشخصات
                            خودرو و زمان کارشناسی، ضروری است که کاربر ظرف 15
                            دقیقه از ارسال پیامک، مغایرت در اطلاعات را به
                            پشتیبانی کارپایا اعلام نماید. در غیر این صورت
                            اطلاعات پیامک، مورد تأیید کاربر محسوب می‌شود و
                            کارشناس فنی در زمان و تاریخ مندرج در پیامک در محل
                            حضور خواهد داشت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-4- کاربر متعهد است حداقل{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۳۰</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            دقیقه قبل از حضور کارشناس فنی در محل اعلامی جهت
                            انجام کارشناسی خودرو، پاسخگوی تماس کارشناس فنی
                            اعزامی باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-4- تاخیر در آغاز فرایند کارشناسی خودرو به دلایل
                            غیر منتسب به کارشناس فنی مانند دیر رسیدن کاربر به
                            محل مورد نظر برای انجام فرایند کارشناسی بر عهده
                            کاربر است و موجب لغو درخواست کارشناسی می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-4- کاربر باید برای لغو نمودن کارشناسی خودرو حداقل{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۲</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعت پیش از ساعت تعیین شده، درخواست لغو را از طریق
                            شماره تماس مرکز پشتیبانی به اطلاع کارپایا برساند.
                            فقط در این صورت کل کارمزد پرداخت شده، به کاربر عودت
                            داده می‌شود. در صورت عدم رعایت مهلت{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۲</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعته برای لغو درخواست کارشناسی خودرو و یا به هر
                            دلیلی که کاربر موجب لغو آن درخواست شود، مبلغی به
                            میزان دو میلیون ریال از کارمزد پرداخت شده کسر و
                            مابقی مبلغ در قالب کد تخفیف به کاربر عودت داده
                            می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-4- در صورت شروع فرایند کارشناسی و انصراف کاربر از
                            ادامه فرایند، کارمزد پرداخت شده توسط کاربر قابل عودت
                            به ایشان نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-4- در صورتی که برای انجام عملیات کارشناسی در بازه
                            زمانی توافق شده، اتفاقی حادث شود که مشمول عنوان فورس
                            ماژور گردد، زمان کارشناسی مجدداً مورد توافق کارپایا
                            و کاربر قرار خواهد گرفت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-4- کارشناسی فنی و بدنه خودرو منوط به حضور و همکاری
                            کاربر و ارائه مدارک خودرو (اصل کارت/سند خودرو، مدارک
                            شناسایی مالک و اصل بیمه‌نامه) می‌باشد. در صورتی که
                            کاربر، مالک خودرو نباشد، حضور و همکاری مالک خودرو در
                            هنگام کارشناسی فنی خودرو نیز ضروری است و در صورت
                            روشن نشدن خودرو، عدم حضور مالک آن یا ارائه مدارک
                            خودرو، با رویت شماره شاسی آن، فقط کارشناسی بدنه
                            انجام می‌شود.&nbsp;
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-4- به منظور بررسی و کارشناسی، خودرو باید در مکان
                            مناسب قرار گرفته باشد؛ به نحوی که اطراف خودرو از هر
                            سمت حداقل یک متر فضای خالی باشد. همچنین باید شرایطی
                            مانند خشک و تمیز بودن خودرو، نور مناسب محیط، قرار
                            دادن خودرو در محل سرپوشیده هنگام بارندگی در زمان
                            کارشناسی و غیره فراهم باشد. در غیر این صورت،
                            کارشناسی بدنه خودرو امکان‌پذیر نمی‌باشد. در این صورت
                            با رضایت مالک خودرو فقط می‌توان کارشناسی فنی انجام
                            داد، ولی قیمت‌گذاری خودرو انجام نمی‌شود. کاربران
                            می‌توانند جهت اطلاع کامل از شرایط خودرو برای
                            کارشناسی، بلاگ
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/blog/car-inspection-conditions/">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                {" "}
                                «کارشناسی خودرو در چه شرایطی انجام می شود
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <strong>
                        <u>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>»</span>
                            </span>
                          </span>
                        </u>
                      </strong>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            را مطالعه نمایند.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            11-4- کاربر متعهد است که شرایط لازم برای انجام
                            فرایند کارشناسی خودرو را فراهم کند. در صورت فراهم
                            نبودن شرایط، کارشناس فنی از زمان حضور در آدرس اعلامی
                            کاربر در زمان توافق شده،{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۱۵</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            دقیقه برای فراهم شدن شرایط لازم منتظر می‌ماند. در
                            صورت فراهم نشدن شرایط بعد از این مدت، درخواست
                            کارشناسی لغو شده و کارشناس فنی محل را ترک می‌‌کند.
                            در این صورت مبلغی به میزان دو میلیون ریال از کارمزد
                            پرداخت شده کاربر کسر و مابقی مبلغ در قالب کد تخفیف
                            به کاربر عودت داده می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            12-4- در صورت اطلاع کاربر از عیوب و نواقص خودرو،
                            ضروری است که به کارشناس فنی اطلاع دهد که فرایند
                            کارشناسی سریع‌تر و دقیق‌تر انجام شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>13-4- در</span>
                        </span>
                      </span>
                      <strong>
                        <u> </u>
                      </strong>
                      <a href="https://karnameh.com/car-inspection">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                کارشناسی ویژه
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            ، وضعیت بدنه، فنی و مکانیکی خودرو توسط کارشناس فنی
                            بررسی می‌گردد و پس از اتمام فرایند کارشناسی،
                            قیمت‌گذاری خودرو انجام می‌شود و در نهایت به منظور
                            اطلاع کاربر از وضعیت سلامت خودرو، گزارش کارشناسی
                            توسط کارشناس فنی صادر می‌گردد که آن گزارش ظرف مدت{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۴۸</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعت پس از تاریخ صدور معتبر است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>14-4- در </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/car-inspection">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                کارشناسی استاندارد
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            ، وضعیت فنی و بدنه خودرو توسط کارشناس فنی بررسی
                            می‌گردد و پس از اتمام فرایند کارشناسی، قیمت‌گذاری
                            خودرو انجام می‌شود و در نهایت به منظور اطلاع کاربر
                            از وضعیت سلامت خودرو، گزارش کارشناسی توسط کارشناس
                            فنی صادر می‌گردد که آن گزارش ظرف مدت{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۴۸</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعت پس از تاریخ صدور معتبر است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            15-4- در صورتی که کاربر ظرف{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۴۸</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعت از زمان صدور گزارش کارشناسی ویژه و استاندارد،
                            ادعایی مبنی بر مغایرت شرایط بدنه خودرو با گزارش
                            کارشناس فنی را به مرکز پشتیبانی کارپایا اطلاع دهد،
                            با ارسال کلیه مستندات و تصاویر مربوط به ادعای مذکور
                            توسط کاربر، موضوع توسط بازرسان و کارشناسان فنی
                            کارپایا بررسی می‌گردد. در صورت احراز مغایرت مورد
                            ادعای کاربر توسط کارپایا، خسارت وارده به کاربر مطابق
                            با مبلغ برآورد شده توسط کارشناسان فنی کارپایا با
                            دریافت رضایت‌نامه از کاربر، در وجه وی پرداخت
                            می‌گردد. در این مورد سقف خسارت قابل پرداخت به کاربر،
                            در کارشناسی استاندارد مبلغ دو و نیم میلیارد ریال
                            معادل دویست و پنجاه میلیون تومان و در کارشناسی ویژه
                            مبلغ پنج میلیارد ریال معادل پانصد میلیون تومان
                            می‌باشد. ادعای مغایرت شرایط فنی خودرو با گزارش
                            کارشناسی، مشمول ضمانت 48 ساعته مندرج در این ماده
                            نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            16-4- هرگونه تغییر و یا تعمیر خودرو پس از کارشناسی
                            کارپایا، مانع مطالبه خسارات توسط کاربر می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            17-4- در
                            <strong>
                              <u> </u>
                            </strong>
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/car-inspection">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                کارشناسی رنگ و بدنه خودرو
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <strong>
                        <u>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#202021" }}>،</span>
                            </span>
                          </span>
                        </u>
                      </strong>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            فقط وضعیت بدنه خودرو توسط کارشناس فنی بررسی می‌گردد
                            و پس از اتمام فرایند، به منظور اطلاع کاربر از وضعیت
                            سلامت بدنه خودرو، گزارش کارشناسی توسط کارشناس فنی
                            صادر می‌شود که این گزارش کارشناسی بر خلاف کارشناسی
                            ویژه و استاندارد، مشمول ضمانت کارپایا نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            18-4- در صورت فراهم نبودن شرایط مناسب برای انجام
                            کارشناسی و یا عدم اجازه کاربر به منظور بررسی هر یک
                            از موارد قابل بررسی در خودرو، مورد مذکور به دلیل عدم
                            بررسی از سوی کارشناس فنی، خارج از هرگونه ضمانت و
                            مسئولیت کارپایا قرار می‌گیرد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            19-4- هرگونه گزارش کارشناسی یا بیان اطلاعات به صورت
                            شفاهی از جانب کارشناسان فنی به کاربر فاقد اعتبار
                            بوده و در برابر کارپایا قابل استناد نخواهد بود و
                            گزارش کارپایا صرفاً در صورتی مورد تایید و قابل
                            استناد در برابر کارپایا است که لینک گزارش کارشناسی
                            برای کاربر ارسال گردد. در غیر این صورت هیچ‌گونه
                            مسئولیتی متوجه کارپایا نخواهد بود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            20-4- کاربر درخواست‌دهنده خدمات کارشناسی می‌تواند در
                            حین کارشناسی، درخواست خود مبنی بر تنظیم و انعقاد
                            قرارداد خرید و فروش خودرو را اعلام و کارمزد مربوطه
                            را از طریق پیش‌بینی شده پرداخت نماید که در این صورت
                            اقدامات لازم جهت انعقاد قرارداد مابین فروشنده و
                            خریدار خودروی موضوع کارشناسی توسط کارشناسان مربوطه
                            انجام می‌شود. کارشناس فنی برای ثبت درخواست تنظیم و
                            انعقاد قرارداد خرید و فروش خودرو توسط کاربر حداکثر
                            30 دقیقه پس از اتمام فرایند کارشناسی منتظر می‌ماند و
                            در صورت عدم اقدام کاربر، محل کارشناسی را ترک می‌کند.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            21-4- کارپایا با هدف فراهم نمودن شرایط مطلوب برای
                            معامله خودرو، اطلاعات گزارش کارشناسی خودرو را ذخیره
                            و جمع‌آوری می‌نماید و از طریق سایت خود یا سایت دیوار
                            به خریداران خودرو که متقاضی مشاهده گزارش کارشناسی
                            هستند، نمایش می‌دهد و کاربر درخواست‌دهنده برای
                            کارشناسی خودرو با رضایت به این مورد نسبت به ثبت
                            درخواست خود اقدام می‌نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            22-4- در صورتی که مالک اقدام به ثبت درخواست کارشناسی
                            خودرو می‌نماید، با آگاهی از بند بالا به جهت شفافیت
                            در معامله خودرو نسبت به ارائه گزارش کارشناسی و
                            اطلاعات خودروی خود به خریداران احتمالی اعلام رضایت
                            کرده و به همین علت ایراد عدم آگاهی و ضرر و زیان در
                            معامله آن خودرو مورد پذیرش نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده پنج) شرایط اختصاصی مشاهده گزارش کارشناسی
                              خودرو
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-5- کارپایا با هدف فراهم نمودن شرایط مطلوب برای
                            خرید و فروش خودرو، در سایت خود یا آگهی‌های سایت
                            دیوار برای معامله خودرو، گزارش کارشناسی مربوطه را به
                            متقاضیان ارائه می‌دهد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-5- با توجه به اینکه ممکن است وضعیت خودرو پس از
                            انجام کارشناسی و ثبت گزارش کارشناسی تغییر کند و
                            متقاضی مشاهده گزارش کارشناسی خودرو، ضمن مشاهده تاریخ
                            انجام کارشناسی کارپایا نسبت به پرداخت کارمزد مشخص
                            اقدام می‌نماید، بنابراین ایراد عدم آگاهی و مغایرت
                            وضعیت خودرو با گزارش کارشناسی مورد پذیرش نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-5- همچنین با توجه به احتمال تغییر وضعیت خودرو پس
                            از انجام کارشناسی و ثبت گزارش کارشناسی، گزارش
                            کارشناسی خودرو که به متقاضی مشاهده آن ارائه می‌شود،
                            فاقد ضمانت کارپایا می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <br />
                  &nbsp;
                </p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده شش) شرایط اختصاصی کارشناسی موتورسیکلت
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-6- کاربر می‌تواند درخواست کارشناسی موتورسیکلت را
                            از{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/motor-inspection">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                روش‌های پیش‌‌بینی شده
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            و با پرداخت کارمزد مربوطه ثبت نماید و کارشناسی فقط
                            برای موتورسیکلتی که مشخصات آن در درخواست کارشناسی
                            درج شده، در محل کاربر توسط کارشناسان فنی انجام
                            می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-6- کاربر در هنگام ثبت درخواست کارشناسی موتورسیکلت،
                            باید محل مورد نظر خود برای کارشناسی را به صورت دقیق
                            مشخص و اعلام نماید. در صورت درخواست تغییر آدرس توسط
                            کاربر، درخواست جدید محسوب شده و مبلغی به میزان دو
                            میلیون ریال از کارمزد پرداخت شده ایشان کسر و مابقی
                            مبلغ در قالب کد تخفیف به کاربر عودت داده می‌شود.
                            بدیهی است اعزام کارشناس به آدرس جدید درخواستی،
                            مستلزم پرداخت کارمزد و انجام هماهنگی مجدد است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-6- در صورت هرگونه مغایرت در اطلاعات پیامک ثبت
                            نهایی درخواست کارشناسی موتورسیکلت مانند مغایرت در
                            مشخصات موتورسیکلت و زمان کارشناسی، ضروری است که
                            کاربر ظرف 15 دقیقه از ارسال پیامک، مغایرت در اطلاعات
                            را به پشتیبانی کارپایا اعلام نماید. در غیر این صورت
                            اطلاعات پیامک، مورد تأیید کاربر محسوب می‌شود و
                            کارشناس فنی در زمان و تاریخ مندرج در پیامک در محل
                            حضور خواهد داشت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-6- کاربر متعهد است حداقل{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۳۰</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            دقیقه قبل از حضور کارشناس فنی در محل اعلامی جهت
                            انجام کارشناسی موتورسیکلت، پاسخگوی تماس کارشناس فنی
                            اعزامی باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-6- تاخیر در آغاز فرایند کارشناسی موتورسیکلت به
                            دلایل غیر منتسب به کارشناس فنی مانند دیر رسیدن کاربر
                            به محل مورد نظر برای انجام فرایند کارشناسی بر عهده
                            کاربر است و موجب لغو درخواست کارشناسی می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-6- کاربر باید برای لغو نمودن کارشناسی موتورسیکلت
                            حداقل{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۲</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعت پیش از ساعت تعیین شده، درخواست لغو را از طریق
                            شماره تماس مرکز پشتیبانی به اطلاع کارپایا برساند.
                            فقط در این صورت کل کارمزد پرداخت شده، به کاربر عودت
                            داده می‌شود. در صورت عدم رعایت مهلت{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۲</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            ساعته برای لغو درخواست کارشناسی موتورسیکلت و یا به
                            هر دلیلی که کاربر موجب لغو آن درخواست شود، مبلغی به
                            میزان دو میلیون ریال از کارمزد پرداخت شده کسر و
                            مابقی مبلغ در قالب کد تخفیف به کاربر عودت داده
                            می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-6- در صورت شروع فرایند کارشناسی موتورسیکلت و
                            انصراف کاربر از ادامه فرایند، کارمزد پرداخت شده توسط
                            کاربر قابل عودت به ایشان نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-6- در صورتی که برای انجام عملیات کارشناسی در بازه
                            زمانی توافق شده، اتفاقی حادث شود که مشمول عنوان فورس
                            ماژور گردد، زمان کارشناسی مجدداً مورد توافق کارپایا
                            و کاربر قرار خواهد گرفت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-6- کارشناسی فنی و بدنه موتورسیکلت منوط به حضور و
                            همکاری کاربر و ارائه مدارک موتورسیکلت (اصل کارت/سند
                            موتورسیکلت، مدارک شناسایی مالک و اصل بیمه‌نامه)
                            می‌باشد. در صورتی که کاربر، مالک موتورسیکلت نباشد،
                            حضور و همکاری مالک آن در هنگام کارشناسی فنی
                            موتورسیکلت نیز ضروری است و در صورت روشن نشدن
                            موتورسیکلت، عدم حضور مالک آن یا ارائه مدارک
                            موتورسیکلت، با رویت شماره شاسی آن فقط کارشناسی بدنه
                            انجام می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-6- به منظور بررسی و کارشناسی، موتورسیکلت باید در
                            مکان مناسب قرار گرفته باشد؛ به نحوی که اطراف
                            موتورسیکلت از هر سمت حداقل یک متر فضای خالی باشد.
                            همچنین باید شرایطی مانند خشک و تمیز و عاری از هرگونه
                            گرد و غبار بودن موتورسیکلت، نور مناسب محیط، قرار
                            دادن موتورسیکلت در محل سرپوشیده هنگام بارندگی در
                            زمان کارشناسی و غیره فراهم باشد. در غیر این صورت
                            کارشناسی بدنه موتورسیکلت امکان‌پذیر نمی‌باشد و با
                            رضایت مالک موتورسیکلت فقط می‌توان کارشناسی فنی انجام
                            داد، ولی قیمت‌گذاری موتورسیکلت انجام نمی‌شود. شرایط
                            کارشناسی موتورسیکلت مشابه کارشناسی خودرو است و
                            کاربران می‌توانند جهت اطلاع کامل از آن شرایط، بلاگ
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/blog/car-inspection-conditions/">
                        <strong> </strong>
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                «کارشناسی خودرو در چه شرایطی انجام می شود
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>
                      <strong>
                        <u>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>»</span>
                            </span>
                          </span>
                        </u>
                      </strong>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            را مطالعه نمایند.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            11-6- کاربر متعهد است که شرایط لازم برای انجام
                            فرایند کارشناسی موتورسیکلت را فراهم کند. در صورت
                            فراهم نبودن شرایط، کارشناس فنی از زمان حضور در آدرس
                            اعلامی کاربر در زمان توافق شده،{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>۱۵</span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            {" "}
                            دقیقه برای فراهم شدن شرایط لازم منتظر می‌ماند. در
                            صورت فراهم نشدن شرایط بعد از این مدت، درخواست
                            کارشناسی لغو شده و کارشناس فنی محل را ترک می‌‌کند.
                            در این صورت مبلغی به میزان دو میلیون ریال از کارمزد
                            پرداخت شده کاربر کسر و مابقی مبلغ در قالب کد تخفیف
                            به کاربر عودت داده می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            12-6- در صورت اطلاع کاربر از عیوب و نواقص
                            موتورسیکلت، ضروری است که به کارشناس فنی اطلاع دهد که
                            فرایند کارشناسی سریع‌تر و دقیق‌تر انجام شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            13-6- در کارشناسی موتورسیکلت وضعیت فنی و بدنه
                            موتورسیکلت توسط کارشناس فنی بررسی می‌گردد و پس از
                            اتمام فرایند کارشناسی، قیمت‌گذاری موتورسیکلت انجام
                            می‌شود و در نهایت به منظور اطلاع کاربر از وضعیت
                            سلامت موتورسیکلت، گزارش کارشناسی توسط کارشناس فنی
                            صادر می‌گردد که آن گزارش ظرف 24 ساعت پس از تاریخ
                            صدور در حدود شرایط مندرج در آن معتبر است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            14-6- در صورتی که کاربر ظرف 24 ساعت از زمان صدور
                            گزارش کارشناسی موتورسیکلت، ادعایی مبنی بر مغایرت
                            شرایط بدنه موتورسیکلت با گزارش کارشناس فنی را به
                            مرکز پشتیبانی کارپایا اطلاع دهد، با ارسال کلیه
                            مستندات و تصاویر مربوط به ادعای مذکور توسط کاربر،
                            موضوع توسط بازرسان و کارشناسان فنی کارپایا بررسی
                            می‌گردد. در صورت احراز مغایرت مورد ادعای کاربر توسط
                            کارپایا، خسارت وارده به کاربر مطابق با مبلغ برآورد
                            شده توسط کارشناسان فنی کارپایا با دریافت رضایت‌نامه
                            از کاربر، در وجه وی پرداخت می‌گردد. در این مورد سقف
                            خسارت قابل پرداخت به کاربر، مبلغ پانصد میلیون ریال
                            معادل پنجاه میلیون تومان می‌باشد. ادعای مغایرت شرایط
                            فنی موتورسیکلت با گزارش کارشناسی، مشمول ضمانت 24
                            ساعته مندرج در این ماده نمی‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            15-6- صرفاً اعلام مغایرت توسط کاربر در بدنه
                            موتورسیکلت با گزارش کارشناسی قابل بررسی و در صورت
                            احراز، مشمول پرداخت خسارت تا سقف مندرج در بند فوق
                            است و وضعیت فنی و اقلام مصرفی موتورسیکلت مانند لنت
                            ترمز،‌ روغن ترمز، فیلترها و لاستیک را در برنمی‌گیرد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            16-6- در صورت فراهم نبودن شرایط مناسب برای انجام
                            کارشناسی و یا عدم اجازه کاربر به منظور بررسی هر یک
                            از موارد قابل بررسی در موتورسیکلت، مورد مذکور به
                            دلیل عدم بررسی از سوی کارشناس فنی، خارج از هرگونه
                            ضمانت و مسئولیت قرار می‌گیرد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            17-6- هرگونه تغییر و یا تعمیر موتورسیکلت پس از
                            کارشناسی کارپایا، مانع مطالبه خسارات توسط کاربر
                            می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            18-4- هرگونه گزارش کارشناسی یا بیان اطلاعات به صورت
                            شفاهی از جانب کارشناسان فنی به کاربر فاقد اعتبار
                            بوده و در برابر کارپایا قابل استناد نخواهد بود.
                            گزارش کارشناسی کارپایا صرفاً در صورتی مورد تایید و
                            قابل استناد در برابر کارپایا است که به صورت مکتوب در
                            اوراق تخصیص یافته از سوی کارپایا با رعایت شرایط
                            مندرج در آن اوراق تنظیم شود. در غیر این صورت
                            هیچ‌گونه مسئولیتی متوجه کارپایا نخواهد بود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده ده) خدمات آنلاین کارپایا
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-10- کاربر می‌تواند از طریق سایت کارپایا با وارد
                            نمودن مندرجات لازم و کارمزد مربوطه، اقدام به تهیه
                            فایل{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/affidavit">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                مبایعه‌نامه خودرو/موتورسیکلت
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            نماید که در آن مبایعه‌نامه ریسک‌های احتمالی فروشنده
                            و خریدار پوشش داده شده و برای هر یک ضمانت اجرای
                            مناسبی پیش‌بینی شده است. در این خدمات، تکمیل
                            مبایعه‌نامه و پیگیری و انجام فرایند معامله توسط
                            کارپایا انجام نمی‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-10- کاربر می‌تواند از طریق سایت کارپایا با وارد
                            نمودن مندرجات لازم و کارمزد مربوطه، اقدام به تهیه
                            گزارش
                          </span>
                        </span>
                      </span>{" "}
                      <a href="https://karnameh.com/car-price/used-car">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                تخمین قیمت خودرو کارکرده
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            نماید که آن گزارش با استفاده از موتور قیمت‌گذاری
                            کارپایا بر اساس معیارهای مختلف مانند آگهی‌ها و
                            معاملات اخیر خودرو، تهیه و ارائه می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-10- کاربر می‌تواند از طریق سایت کارپایا با وارد
                            نمودن مندرجات لازم و کارمزد مربوطه، اقدام به{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/services/trade-price-report/car-info">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                تهیه گزارش قیمت
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            خودروی مدنظر خود نماید که بر اساس آگهی‌ها و معاملات
                            اخیر خودرو تهیه و ارائه می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-10- کاربر می‌تواند از طریق سایت کارپایا با وارد
                            نمودن مندرجات لازم و کارمزد مربوطه، اقدام به{" "}
                          </span>
                        </span>
                      </span>
                      <a href="https://karnameh.com/car-authentication">
                        <strong>
                          <span style={{ fontSize: "15.0pt" }}>
                            <span style={{ fontFamily: '"Arial",sans-serif' }}>
                              <span style={{ color: "#ed7d31" }}>
                                استعلام سوابق و اصالت خودروی
                              </span>
                            </span>
                          </span>
                        </strong>
                      </a>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            مدنظر خود نماید که با استفاده از اطلاعات مراجع
                            مربوطه تهیه و ارائه می‌شود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده یازده) حدود مسئولیت کارپایا
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-11- در صورتی که کاربر درخواست‌دهنده خدمات
                            کارشناسی، مالک موضوع کارشناسی نباشد، مسئولیت هرگونه
                            هماهنگی لازم بر عهده کاربر است و کارپایا مسئولیتی در
                            این خصوص نداشته است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-11- کارشناس فنی فقط در زمینه سلامت فنی و بدنه
                            موضوع کارشناسی اقدام به بررسی و اعلام نظر می‌نماید؛
                            بنابراین مسئولیت تشخیص اصالت و تطبیق شماره شاسی و
                            تعویضی بودن موتور موضوع کارشناسی بر عهده کارشناسان
                            راهنمایی‌ و رانندگی مستقر در مراکز تعویض پلاک
                            می‌باشد و کارپایا در این زمینه هیچ‌گونه مسئولیتی بر
                            عهده ندارد. در صورت معامله خودرو به واسطه دستیار
                            معامله کارپایا و متعاقباً عدم تایید اصالت خودرو در
                            آن مراکز، کارمزد کارپایا قابل عودت به خریدار خودرو
                            می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-11- کارپایا در قبال آن دسته از ایرادات و عیوب
                            موضوع کارشناسی که قابل رویت توسط کارشناس فنی
                            نمی‌باشند؛ مانند مواد غیر استاندارد در روغن موتور یا
                            گیربکس و قسمت‌هایی که برای کارشناسی و تشخیص عیوب،
                            نیاز به باز کردن لوازم، کاور، فلاپ‌، پیچ و پرچ
                            دارند؛ مانند ایراد در زیر شاسی، ایراد در کفی
                            صندوق‌هایی که کف‌پوش آن‌ها پیچ و یا پرچ شده است،
                            مسئولیتی بر عهده ندارد. همچنین کارپایا در خصوص
                            مواردی که توسط کاربر قابل رویت است مانند خط‌ و خش
                            بدنه و ایرادات مربوط به آج لاستیک، مسئولیتی بر عهده
                            ندارد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-11- در هرگونه کارشناسی خودرو/موتورسیکلت، کارشناس
                            فنی فقط عملکرد سیستم‌های فنی و امکانات (آپشن‌ها) را
                            ارزیابی می‌کند و بررسی مواردی از قبیل فول و یا نیمه‌
                            فول بودن آپشن‌ها، وجود قطعات یا لوازم دست‌ دوم
                            (استوک) یا غیر اصل به جای قطعات اصلی و مواردی از این
                            قبیل خارج از تعهدات و حدود مسئولیت کارپایا است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-11- کارپایا مسئولیتی در خصوص عیوب بدون تأثیر در
                            قیمت خودرو/موتورسیکلت، نداشته است و هرگونه تعویض،
                            تعمیر یا رنگ‌شدگی سپرها، جلوپنجره، آینه بغل‌ها،
                            چراغ‌ها و سینی فن که طبق عرف تاثیری در افت قیمت
                            خودرو ندارند، در حدود مسئولیت کارپایا نیست و اعلام
                            نکردن آن عیوب توسط کارشناس فنی فاقد ایراد است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-11- هرگونه تست رانندگی موضوع کارشناسی فقط با اجازه
                            کاربر و در صورتی که به تشخیص کارشناس فنی، شرایط
                            زمانی و مکانی مساعد باشد، انجام خواهد گرفت. برای
                            انجام تست رانندگی توسط کارشناس فنی، موضوع کارشناسی
                            باید دارای بیمه‌نامه شخص ثالث معتبر بوده و به صورت
                            فیزیکی یا آنلاین به رویت کارشناس فنی برسد. همچنین
                            حضور مالک در خودرو، حین انجام تست رانندگی الزامی
                            است. در صورت جمع شرایط فوق، خودرو حداکثر تا دنده سه
                            و تا سرعت 60 کیلومتر بر ساعت تست می‌شود و نتیجه‌
                            بررسی فنی در گزارش کارشناسی درج می‌گردد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-11- کارشناسی کارپایا ممکن است تحت تأثیر آب‌ و هوا،
                            شرایط نور و تمیزی داخل خودرو و بدنه موضوع کارشناسی
                            در زمان کارشناسی قرار بگیرد. این عوامل که از کنترل
                            کارشناس فنی خارج است، می‌‌تواند دقت کارشناسی را کاهش
                            داده و تشخیص مواردی مانند رنگ‌شدگی را برای چشم غیر
                            مسلح سخت کند. بدین منظور برای جلوگیری از بروز خطاهای
                            احتمالی و از آنجایی که ایجاد شرایط مطلوب کارشناسی بر
                            عهده کاربر است، ضروری می‌باشد کاربر قبل از ثبت
                            درخواست کارشناسی، ابتدا با مالک موضوع کارشناسی در
                            خصوص شست و شوی آن، خشک و تمیز بودن بدنه، قرار دادن
                            آن در مکانی که اطراف موضوع کارشناسی از هر سمت حداقل
                            یک متر خالی باشد و فراهم کردن محیطی امن و به دور از
                            آفتاب مستقیم و بارش برف و باران و دارای نور مناسب
                            هماهنگی نماید. همچنین کارشناسی در شب فقط در صورت
                            وجود نور کافی برای انجام عملیات کارشناسی، صورت خواهد
                            گرفت. در صورت عدم تحقق شرایط مذکور، کارشناسی لغو
                            می‌گردد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-11- مسئولیت صحت اطلاعات اعلامی اعم از مدل و تیپ
                            موضوع کارشناسی و غیره به صورت آنلاین با کاربر است و
                            کارپایا در این زمینه مسئولیتی نخواهد داشت. همچنین
                            کارپایا امکان تغییر هیچ یک از اطلاعات وارد شده توسط
                            کاربر را ندارد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-11- هرگونه کارشناسی کارپایا به منظور تشخیص عیوب
                            خودرو/موتورسیکلت است و تعیین هزینه رفع عیوب مذکور بر
                            عهده کارشناس فنی نیست. همچنین کارپایا نسبت به قیمت
                            موضوع کارشناسی، اختلافات قضایی مربوط به آن، مخدوش
                            بودن پلاک (تقلب در پلاک)، تغییر کارکرد موضوع
                            کارشناسی (ملاک درج و ثبت کارکرد توسط کارشناس فنی،
                            فقط عدد کیلومتر شمار خودرو/موتورسیکلت می‌باشد) و
                            مشکلات حقوقی سند موضوع کارشناسی در خصوص نقل‌ انتقال
                            مالکیت، ممنوع‌ المعامله بودن موضوع کارشناسی یا مالک
                            آن و امثال آن‌ها، مسئولیتی ندارد و کاربر، کارپایا را
                            از هرگونه ادعایی (اعم از حقوقی و کیفری) مبری دانسته
                            و حق هرگونه شکایت در این خصوص را از خود سلب و ساقط
                            نمود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-11- هرگونه قیمت‌گذاری خودرو/موتورسیکلت توسط
                            کارپایا
                          </span>
                        </span>
                      </span>{" "}
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            صرفاً با توجه به شرایط و وضعیت بدنه خودرو/موتورسیکلت
                            انجام می‌شود و در واقع در قیمت‌گذاری، وضعیت فنی و
                            مکانیکی آن به صورت سالم فرض می‌شود. همچنین هرگونه
                            اعلام قیمت، فقط در صورت انجام عملیات کارشناسی به
                            صورت کامل، امکان‌پذیر است و در شرایطی که به هر دلیلی
                            عملیات کارشناسی به صورت ناقص انجام شود و یا در
                            کارشناسی رنگ و بدنه خودرو، کارپایا امکان قیمت‌گذاری
                            را نخواهد داشت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            11-11- هرگونه اعلام قیمت خودرو/موتورسیکلت توسط
                            کارپایا، صرفاً به صورت مشاوره بوده و مسئولیتی در
                            خصوص قیمت نهایی معامله آن و یا عدم انجام معامله،
                            متوجه کارپایا نخواهد بود.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            12-11- کارپایا در مورد مشکلات احتمالی مابین خریدار و
                            فروشنده پس از امضای مبایعه‌نامه (مانند عدم انتقال
                            خودرو/موتورسیکلت توسط فروشنده و یا عدم پرداخت مبلغ
                            مبایعه‌نامه توسط خریدار) مسئولیتی ندارد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            13-11- کاربر حق هرگونه ادعا و اعتراض در خصوص موارد
                            موضوع این ماده را از خود سلب و ساقط نموده است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <br />
                  &nbsp;
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده دوازده) مالکیت دارایی‌های فکری
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            کلیه حقوق مادی و معنوی متصور در خصوص دارایی‌های فکری
                            انحصاراً در مالکیت کارپایا بوده و حق انحصاری
                            بهره‌برداری از آن متعلق به کارپایا است و استفاده از
                            خدمات کارپایا، هیچ‌گونه حق مالکیت مادی و معنوی برای
                            کاربر به وجود نمی‌آورد. هرگونه نقض این مالکیت از
                            قبیل استفاده از علامت، استفاده از نام و عنوان اثر و
                            سایر حقوق، حسب مورد موجب طرح دعوای حقوقی و کیفری
                            خواهد بود
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده سیزده) مرجع حل اختلاف
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            در صورت بروز هرگونه اختلاف فیمابین کاربر و کارپایا،
                            طرفین حتی الامکان موضوع را از طریق مذاکره حل و فصل
                            می‌نمایند. در این خصوص کاربر متعهد به همکاری با
                            کارپایا و ارائه اطلاعات لازم و عنداللزوم حضور در
                            جلسات حضوری یا آنلاین می‌باشد. در صورت عدم حصول
                            توافق از این طریق، هر یک از طرفین مختار خواهد بود که
                            به مراجع قضایی شهر تهران مراجعه نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <br />
                  &nbsp;
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده چهارده) سایر شرایط
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-14- سوءاستفاده از خدمات کارپایا به هر شکل،
                            سوءاستفاده از اختلال خدمات، استفاده از برنامه‌های
                            مخرب و جاسوسی، تبانی به منظور اخذ خسارت و یا عودت
                            هزینه کارشناسی، استفاده از ربات‌ها و هر نوع روش مخرب
                            برای دسترسی به اطلاعات سایت و محتویات آن از طریق هر
                            سیستم و شبکه، ایجاد اختلال و تحمیل بار اضافی به هر
                            یک از سرویس‌ها و سرورهای کارپایا ممنوع است و کارپایا
                            در صورت مشاهده چنین فعالیت‌هایی از راه‌های قانونی،
                            مورد را پیگیری می‌کند. تأخیر در پیگیری موارد حاضر،
                            به معنی انصراف از احقاق حقوق کارپایا نیست و کارپایا
                            در هر زمان می‌تواند موارد مذکور در این بند را پیگیری
                            و اقدامات لازم را به منظور احقاق حقوق خویش برابر با
                            قانون انجام دهد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-14- اگر بخشی از مفاد، شرایط، حقوق یا تعهدات مندرج
                            در این سند نامعتبر، غیر قانونی یا غیر قابل اجرا شود
                            یا به واسطه مقررات قانونی و ضوابط حاکم، اجرای بخشی
                            از سند حاضر ناممکن گردد، تنها همان بخش از مفاد سند
                            نامعتبر، غیر قانونی، غیر قابل اجرا و ناممکن شده و با
                            امکان قابلیت تفکیک در مفاد آن، سایر بخش‌های سند
                            مانند قبل قابل الاجرا است.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-14- عدم اعمال یا تاخیر در اعمال هر یک از حقوق و
                            اختیارات مندرج در این سند، تحت هیچ عنوانی به منزله
                            انصراف از آن حقوق یا اختیارات و همچنین اعمال برخی از
                            حقوق و اختیارات به منزله انصراف از سایر حقوق و
                            اختیارات تلقی نمی‌گردد و کارپایا می‌تواند هر زمان
                            مطابق با مندرجات این سند، حقوق و اختیارات خود را
                            اعمال نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "#fafafa" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>
                              ماده پانزده) تغییرات سند حاضر
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "15.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#202021" }}>:</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-15- محتوای این سند دائمی نیست و ممکن است مطابق
                            شرایط و اوضاع‌ و احوال و صلاحدید کارپایا تغییر کند.
                            کاربر می‌تواند با مراجعه به سایت کارپایا از آخرین
                            نسخه این سند آگاهی یابد. بدیهی است ادامه استفاده
                            کاربر از کارپایا به منزله پذیرش این تغییرات است. در
                            صورت عدم موافقت کاربر با شرایط استفاده جدید، وی باید
                            به استفاده‌ خود پایان دهد و بدین ترتیب عدم موافقت
                            خود را اعلام نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-15- کاربران تصدیق می‌نمایند که «شرایط و مقررات
                            استفاده از خدمات کارپایا» را به‌ طور کامل مطالعه
                            نموده، از مفاد و شرایط آن آگاهی کامل داشته و نسبت به
                            اعمال تمامی این شرایط رضایت دارند و نسبت به مفاد آن
                            ملتزم می‌باشند.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-15- در مواردی که شرایط و مقررات حاضر، صراحتاً یا
                            ضمناً حاوی حکمی نباشد، مراتب تابع عرف رایج در این
                            صنعت می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            ),
            1: (
              <div className="flex items-start flex-col">
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              شرایط استفاده از سامانه سرویس دوره ای کارپایا
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            قرارداد حاضر جهت بیان شرایط و مقررات حاکم بر استفاده
                            از سامانه کارپایا برای خریداران تنظیم شده است.
                            خریداران میبایست پیش از هر گونه ثبت سفارش، کلیه
                            مقررات و شرایط ذیل را مطالعه و تأیید نموده و از آن
                            پیروی نمایند زیرا این شرایط و مقررات به منزله یک
                            قرارداد الکترونیک معتبر و لازم‌الاتباع میان شرکت و
                            خریداران می‌باشد. استفاده از سامانه کارپایا و نیز
                            ثبت سفارش در هر زمان به معنی پذیرفتن کلیه شرایط و
                            قوانین سامانه کارپایا از سوی خریدار است و هرگونه
                            ادعا یا اعتراض آتی در این خصوص را بلااعتبار
                            می‌‌نماید. لازم به ذکر است کلیه اصول و رویه‏‌های
                            کارپایا منطبق با قوانین جمهوری اسلامی ایران، قانون
                            تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است
                            و متعاقباً خریدار نیز موظف به رعایت قوانین مرتبط با
                            خریدار است. در صورتی که در قوانین مندرج، رویه‏‌ها و
                            سرویس‏‌های کارپایا تغییراتی در آینده ایجاد شود، در
                            همین صفحه منتشر و به روز رسانی می گردد، لذا مسئولیت
                            مطالعه و آگاهی از این تغییرات بر عهده خریداران می
                            باشد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 1- تعاریف
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            واژگان و اصطلاحاتی که در شرایط و مقررات حاضر مورد
                            استفاده قرار گرفته‌اند دارای معانی به شرح ذیل
                            می‌باشند
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1) حق العمل کار/شرکت: شرکت آسان خودرو آینده ایرانیان
                            (سهامی خاص) با شماره ثبت 603528 و شناسۀ ملی
                            14011593151 به‌عنوان مالک سامانه و نام تجاری کارپایا
                            که به ‌عنوان واسط میان خریداران و تأمین کنندگان از
                            طریق سامانه مزبور امکان سفارش کالا و خدمات به
                            درخواست خریدار و ارائه آن توسط تأمین کنندگان را
                            فراهم می سازد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2) کارپایا: نام و علامت تجاری متعلق به شرکت می‌باشد
                            که از طریق سامانه کارپایا برای خریداران امکان ثبت
                            سفارش کالا و خدمات مرتبط با خودرو و موتورسیکلت را
                            فراهم می سازد
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3) سامانه کارپایا: عبارت است از سامانه متعلق به شرکت
                            آسان خودرو آینده ایرانیان در قالب وبسایت به آدرس
                            &nbsp;
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            https://carpaya.com{" "}
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            &nbsp;&nbsp;که شرکت از طریق آن ارتباط بین خریدار و
                            تأمین کننده را برقرار و تسهیل می کند تا خریداران
                            بتوانند کالاها و خدمات مورد نیاز خود را خریداری و
                            دریافت نمایند
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4) سرویس سفارش کالا و خدمات کارپایا: عبارت است از
                            خدمات هوشمند ذیل سامانه کارپایا که به موجب آن
                            خریداران کالا و خدمات مرتبط با خودرو و موتورسیکلت را
                            ثبت سفارش و خریداری می‌نمایند که این درخواست از طریق
                            سامانه کارپایا به تأمین¬کنندگان منتقل شده و خریدار
                            می¬تواند با ارائه کد تحویل نسبت به دریافت کالا و
                            خدمات اقدام نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5) حساب کاربری: عبارت است از حسابی که خریداران جهت
                            استفاده و ثبت سفارش با وارد نمودن اطلاعات مورد نظر
                            در سامانه کارپایا ایجاد می‌نمایند و از طریق آن از
                            خدمات سامانه مزبور بهره‌مند می‌گردند
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6) خریدار یا خریداران: عبارت است از اشخاصی که از
                            طریق سامانه کارپایا مبادرت به خرید کالاها و خدمات از
                            تأمین-کنندگان معرفی شده در سامانه می¬نمایند.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7)کالاها: کلیه لوازم، قطعات یدکی و اقلام کالایی
                            مربوط به خودرو و موتورسیکلت &nbsp;اعم از اینکه در
                            مالکیت شرکت یا تأمین‌کننده باشد
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8) خدمات: کلیه خدمات نصب یا تعویض کالاها و تعمیرات
                            خودرو و موتورسیکلت که از سوی تأمین‌کننده ارائه می
                            شود و در سامانه کارپایا ثبت گردیده است
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9) حق العمل: حق الزحمه شرکت که حسب مورد (بسته به
                            کالا و خدمات خریداری شده) در سامانه کارپایا محاسبه
                            می-شود و توسط تامین کننده به شرکت پرداخت می شود
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10)آمر/تامین کننده: کلیه مراکز ارائه خدمات مربوط به
                            کالاها و خدمات قابل ارائه به خریداران که در سامانه
                            کارپایا فعالیت می نمایند.
                          </span>
                        </span>
                      </span>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ color: "#ed7d31" }}>.</span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 2- ایجاد حساب کاربری و شرایط آن
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-2) برای عضویت در سامانه کارپایا و استفاده از تمامی
                            خدمات آن، لازم است خریدار اقدام به ایجاد یک حساب
                            کاربری در این سامانه نماید. برای ایجاد حساب کاربری
                            داشتن ۱۸ سال تمام شمسی الزامی است
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            هر شخص تنها مجاز به افتتاح یک حساب کاربری در سامانه
                            کارپایا است
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.2-2) </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-2) خریدار مسئولیت صحت اطلاعات مندرج در حساب کاربری
                            را می‌‌پذیرد و متعهد می‌‌شود که در صورت تغییر در هر
                            بخش از این اطلاعات، حساب کاربری خود را در سامانه
                            کارپایا را بروز نماید. وارد کردن اطلاعات نادرست و
                            غیردقیق ممکن است منجر به محرومیت خریدار از خدمات
                            سامانه کارپایا شود و وی نمی‌‌تواند به این موضوع
                            معترض گردد
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-2) همزمان با قطعی شدن و اتمام تراکنش مالی، رزرو
                            کالا/خدمات برای خریدار صورت خواهد پذیرفت و پس از
                            مراجعه و ارائه کد تحویل برای دریافت کالا/خدمات،
                            فاکتور مربوطه حسب مورد توسط کارپایا یا به نیابت از
                            تامین کننده صادر می گردد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-2) هر خریدار با ثبت‌نام در سامانه کارپایا و ایجاد
                            حساب کاربری به نام خود صحت انتساب تمام پیام‌‌های
                            صادره ازحساب کاربری خویش را پذیرفته و در نتیجه حق
                            هرگونه اعتراض یا ادعای آتی (مبنی بر انکار، تردید یا
                            جعل داده‌ی پیام‌های ارسالی) را از خویش سلب و اسقاط
                            می‌‌نماید
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-2) در صورت عدم همکاری خریداران و ارائه نکردن
                            اطلاعات مربوطه در شرایط خاص که ممکن است ارائه
                            اطلاعات بیشتری مورد نیاز باشد یا در شرایطی که ثبت
                            نام مجدد لازم باشد، شرکت حق مسدود سازی و توقف ثبت
                            سفارش را خواهد داشت
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 3- حقوق و مسئولیت‌های خریداران در استفاده از
                              سامانه کارپایا
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-3)با توجه به این‌که اتصال به اینترنت برای استفاده
                            از سامانه کارپایا ضروری است، خریدار می‌‌بایست
                            اینترنت مورد نیاز را به ‌انضمام سایر لوازم استفاده
                            از سامانه کارپایا تدارک ببیند و مخارج آن‌‌ها را
                            شخصاً تأمین نماید. بدین‌‌وصف، هزینه‌ای که به‌عنوان
                            هزینه‌ خرید کالا و خدمات محاسبه و از خریدار دریافت
                            می‌‌شود، مشتمل بر مخارج اینترنت مصرفی و موارد مشابه
                            نبوده و تنها بهای کالاها و خدمات ارائه‌شده در ذیل
                            سامانه کارپایا می‌باشد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-3) هزینه‌ی خرید کالاها و خدمات ذیل سامانه کارپایا
                            از طریق سامانه مزبور محاسبه و به خریدار اعلام گردیده
                            و وی موظف است این هزینه را صرفاً از طریق درگاه
                            پرداخت اینترنتی به حساب شرکت پرداخت نماید. نظر به
                            اینکه خریداران از طریق سامانه کارپایا به تأمین‌کننده
                            معرفی گردیده و اقدام به خرید کالاها یا خدمات می
                            نمایند، از مجموع هزینه پرداختی حق بهره برداری متعلق
                            به شرکت کسر شده و باقی مانده در وجه تأمین کننده
                            کارسازی می‌گردد. لازم به ذکر است تأمین کنندگان حق
                            اخذ هیچ گونه مبلغی بابت کالاها و خدمات خریداری شده
                            در سامانه کارپایا را نداشته و خریدار در صورت مواجه
                            شدن با درخواست وجه اضافی، باید مراتب را به شرکت
                            اطلاع رسانی نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-3 )در مواردی به تشخیص و صلاحدید شرکت، بسته‌‌های
                            تشویقی (به‌صورت عمومی برای همه‌ی خریداران یا به
                            ‌صورت اختصاصی برای برخی از آنها) به ‌عنوان هدیه و
                            بدون دریافت هزینه برای خریداران در نظر گرفته می‌‌شود
                            که در قالب آن یا مبلغ مشخصی به‌عنوان هدیه به اعتبار
                            خریداران افزوده می‌‌شود یا تخفیف مشخصی به ایشان
                            اختصاص می‌یابد. در صورتی که بسته‌‌ها دارای تاریخ
                            اعتبار مشخصی باشند، پس از آن تاریخ بلااعتبار خواهند
                            بود. مضاف بر آن و با توجه به هدیه بودن بسته های
                            مذکور، به تشخیص شرکت این بسته‌ها در هر زمانی قابل
                            تغییر، تعلیق یا ابطال خواهند بود و شرکت این حق را
                            برای خود محفوظ می‌‌دارد که بدون تدارک هیچ دلیلی هر
                            یک از این بسته‌ها را غیرفعال نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-3 )پس از پایان فرآیند فروش کالاها یا خدمات در
                            سامانه کارپایا، خریدار در بازه زمانی انتخابی در
                            سامانه مزبور (1 الی 3 روز کاری پس از خرید) به محل
                            فعالیت تأمین‌کننده مراجعه نموده و تأمین‌کننده موظف
                            است پس از تطبیق شماره موبایل خریدار با شماره موجود
                            در سامانه کارپایا و همچنین چک نمودن و تایید پلاک
                            خودرو ، کالاها و خدمات خریداری شده مطابق اطلاعات ثبت
                            شده در سامانه مزیور را به خریدار ارائه کرده و در
                            پایان، کد تحویل دریافت شده از خریدار را در سامانه
                            ثبت نماید که به منزله خاتمه کار مربوط به خریدار
                            مربوطه می باشد
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-3 )همزمان با ثبت کد تحویل در سامانه و دریافت
                            کالا/خدمات توسط خریدار، فرآیند خرید قطعی می گردد و
                            خریدار حق مسترد نمودن کالا یا تقاضای استرداد وجه
                            برای خدمات دریافتی را نخواهد داشت. بنابراین ارائه کد
                            تحویل به تامین کننده به منزله رویت، اطمینان از صحت
                            کالا، مطابقت کالا با سفارش ثبت شده و حسب مورد تحویل
                            ضمانت نامه می باشد
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-3 )ماهیت روابط میان شرکت با تأمین کنندگان کالا و
                            خدمات،&nbsp; حق العمل کاری شرکت برای تأمین کنندگان
                            می باشد که به موجب آن شرکت به تأمین کنندگان ، خدمات
                            نرم افزاری در زمینه معرفی و بازاریابی خریداران جهت
                            عرضه و فروش کالاها و خدمات ارائه داده و در ازای آن،
                            از تأمین کنندگان حق بهره برداری (کمیسیون) دریافت می
                            کند بنابراین، شرکت فاقد هر گونه رابطه استخدامی،
                            مشاوره، نمایندگی، مشاركت، سرمایه‌گذاری مشترك یا
                            شراكت با تأمین کنندگان می‌باشد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-3) در صورتی که خریداران ادعای عدم تحویل کالا یا
                            خدمات، مغایرت کالا و خدمات ارائه شده با موارد
                            خریداری در سامانه کارپایا یا ادعای آسیب و نقص
                            کالاهای دریافتی را داشته باشند می‌بایست مراتب را
                            فوراً با پشتیبانی شرکت مطرح نماید. پشتیبانی با بررسی
                            و پیگیری موضوع نسبت به رفع مشکل ایجاد شده مساعدت
                            می‌نماید بدون آنکه مستقیماً مسئولیتی در قبال طرفین
                            اختلاف یا پرداخت هزینه کالاها و خدمات خریداری شده
                            داشته باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-3) تأمین کننده ضامن اصل و سالم بودن کالاهای متعلق
                            به خود می باشد و در صورتی که خلاف این امر ثابت شود،
                            وی منحصراً مسوول پاسخگویی به خریدارخواهد بود.
                            همچنین، تأمین کننده موظف به تحویل ضمانت نامه معتبر
                            کالاهای خریداری شده به خریدار می باشد. در خصوص این
                            موارد، شرکت هیچ مسؤولیتی ندارد
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-3)با توجه به اینکه خریدار و تأمین کننده از طریق
                            سامانه کارپایا به یکدیگر معرفی می شوند، هر گونه خرید
                            و فروش کالاها و خدمات موجود در سامانه کارپایا از
                            طریقی به غیر از سامانه مزبور ممنوع بوده و در صورت
                            احراز تخلف، شرکت حق تعلیق و مسدود سازی دسترسی
                            خریداران به سامانه را برای خود محفوظ داشته و مطابق
                            با شرایط و ضوابط با متخلف برخورد خواهد کرد
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-3)شرکت مسئولیتی در قبال خرابی‌ها و یا عدم سرویس
                            ‌دهی به دلیل اختلال در سرویس اینترنت و سایر زیرساخت
                            های مورد نیاز ندارد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده4-حقوق و مسئولیت های شرکت
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-4)شرکت متعهد به تلاش برای ارائه‌ی خدمات نرم‌افزاری
                            باکیفیت است و در این راه تلاش می‌‌کند با به‌روزرسانی
                            سامانه کارپایا متناسب با نیاز کاربران سطح خدمات
                            ارائه‌شده را ارتقا بخشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-4) شرکت متعهد است با اطلاع از بروز نقص در سامانه
                            کارپایا، نسبت به رفع آن اقدام نماید و در تمام طول
                            قرارداد، موظف به پشتیبانی فنی از این سامانه می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-4) شرکت از طریق تیم پشتیبانی خود نسبت به ارائه
                            خدمات پشتیبانی طبق شرایط و ضوابط اعلام‌شده اقدام
                            می‌نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            ‏4-4) شرکت امکان استفاده از سامانه کارپایا را با
                            شرایط فوق‌الذکر برای کاربران فراهم می‌نماید. با این
                            حال، شرکت نمی‌‌تواند اجرا شدن سامانه کارپایا را در
                            تمامی سخت‌افزارها، دستگاه‌های تلفن همراه یا شبکه‌های
                            ارتباطی تضمین نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-4) خریدار می پذیرد قرارداد حاضر، یک قرارداد قابل
                            رجوع و جایز از سوی شرکت بوده و شرکت می تواند هر زمان
                            تنها به صلاحدید خود و بدون نیاز به تدارک هیچ گونه
                            دلیلی، حساب کاربری وی را مسدود نموده و مانع استفاده
                            خریدار از سامانه کارپایا گردد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            6-4) افزودن کالا به سبد خرید به معنی رزرو کالا نیست
                            و هیچ گونه حقی را برای خریداران ایجاد نمی‌کند.
                            همچنین تا پیش از پرداخت و نهایی شدن تراکنش مالی،
                            هرگونه تغییر از جمله تغییر در موجودی کالا یا قیمت،
                            روی کالای افزوده شده به سبد خرید اعمال خواهد شد
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            7-4)شرکت مجاز است بدون اطلاع قبلی نسبت به توقف
                            سفارش‌‏گیری جدید، اقدام و ثبت سفارش را متوقف کند و
                            کلیه سفارش‌‏های ثبت شده قبل از توقف سفارش‌‏گیری،
                            پردازش می‌‏شود. حق قطع فروش کلیه و یا بخشی از
                            محصولات به هر دلیلی مانند اتمام موجودی کالا بدون
                            اطلاع قبلی، برای شرکت محفوظ است
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            8-4)در صورت بروز مشکل در پردازش نهایی سفارش ثبت شده
                            مانند اتمام موجودی کالا یا انصراف خریدار، مبلغ
                            پرداخت شده طی 72 ساعت کاری به حساب خریدار واریز
                            خواهد شد
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            9-4)در صورت بروز تاخیر در پردازش سفارش ثبت شده توسط
                            خریداران یا هر گونه مشکلی که دریافت کالا و خدمات در
                            زمان معین شده از سوی خریداران را با ماتع مواجه
                            نماید، این موضوع از طریق پیامک به خریدار اطلاع رسانی
                            شده و شرکت تلاش خواهد کرد کالا/خدمات مورد نظر
                            خریداران در اسرع وقت در اختیار ایشان قرار داده شود
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            10-4)در صورت بروز هرگونه خطا نسبت به درج قیمت و ارزش
                            ریالی کالاهای موجود در سامانه کارپایا، حق بلا اثر
                            نمودن سفارش و خرید انجام شده توسط خریدار، برای شرکت
                            محفوظ است. شرکت در اسرع وقت وجوه دریافتی را به حساب
                            خریدار واریز و عودت می‌نماید و خریدار با ورود به
                            سامانه کارپایا می‌پذیرد از این امر آگاهی داشته و در
                            این خصوص ادعایی نخواهد داشت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>&nbsp;</p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 5- حفاظت از داده‌ها و اطلاعات خریداران
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-5)شرکت متعهد به حفظ و حراست از داده‌ها و اطلاعاتی
                            است که در نتیجه‌ی استفاده‌ی خریداران از خدمات
                            کارپایا در سامانه مزبور ثبت و ذخیره می‌‌شود. این
                            اطلاعات به‌شرح زیر است:
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            • 1)اطلاعاتی که خریداران در فرم مشخصات ثبت‌نام (نام،
                            نام خانوادگی، شماره‌ی تلفن همراه و پست الکترونیک)،
                            اطلاعات درخواست حمل و ... و سایر اطلاعات مذکور در
                            ماده 2 در اختیار شرکت قرار می‌‌دهد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            • 2)اطلاعاتی که به‌طور غیرمستقیم و در نتیجه‌ی
                            استفاده‌ی خریداران از خدمات کارپایا در این برنامه
                            ذخیره می‌‌شود؛ از جمله سبد خرید خریدار، تأمین کننده
                            منتخب، ، تراکنش‌های مالی صورت‌گرفته در حساب کاربری
                            جهت استفاده از خدمات کارپایا و اطلاعات مربوط به
                            سخت‌افزاری که خریدار با استفاده از آن از خدمات
                            کارپایا استفاده می‌‌کند (نظیر سیستم ‌عامل آن) و
                            نهایتاً شیوه‌ی اتصال کاربر به اینترنت و مانند آنها.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-5)شرکت در راستای حفظ حریم خصوصی خریداران با رعایت
                            اصل محرمانگی و التزام به قوانین و مقررات مربوطه،
                            داده‌ها و اطلاعات دریافتی از خریداران را در موارد
                            زیر مورد استفاده قرار داده و به شرح ذیل از آنها
                            حفاظت به عمل می‌آورد:
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1)داده‌هایی که هنگام ثبت نام مستقیماً از خریداران
                            أخذ می‌شود، شامل شماره تلفن همراه، مشخصات فردی (نام
                            و نام خانوادگی) و پست الکترونیک و شماره تلفن همراه،
                            صرفاً در جهت احراز هویت خریداران و امکان برخورداری
                            از تسهیلات هوشمند سامانه کارپایا مورد استفاده قرار
                            می‌گیرد. شرکت متعهد می‌گردد داده‌های مذکور را صرفا
                            در محدوده ارائه خدمات مذکور مورد استفاده قرار دهد.
                            در همین راستا، پس از ثبت نهایی درخواست خرید کالا یا
                            خدمات، داده‌های مزبور در جهت شناسایی خریدار و انجام
                            هماهنگی با تأمین¬کننده مربوطه به منظور تحویل کالا
                            و/یا ارائه خدمات به اشتراک گذاشته می‌شوند
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2)درخصوص داده‌ها و اطلاعاتی که به‌طور غیرمستقیم و در
                            نتیجه‌ی استفاده‌ی کاربر سفارش‌دهنده از سامانه
                            کارپایا در این برنامه ذخیره می‌‌شود، شرکت متعهد
                            می‌‌شود که اطلاعات ذخیره‌شده را تنها در جهت بهبود
                            کیفیت خدمات استفاده نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3)در مواردی که سایر اشخاص، حسب مورد، بخشی از فرایند
                            ارائه خدمات را تحت نظارت شرکت عهده‌دار شوند، شرکت
                            مطابق با اصول، قوانین و مقررات صیانت از حریم خصوصی و
                            حفاظت از داده‌ها نسبت به پیشبرد امور اقدام و بر این
                            امر نظارت می‌نماید
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4)شرکت متعهد می‌گردد داده‌ها و اطلاعات خریداران را
                            برای اشخاص ثالث اعم از حقیقی و یا حقوقی با مقاصد
                            تجاری و غیرتجاری خارج از حیطه خدمات فوق‌الذکر، بدون
                            کسب رضایت صاحبان آن افشا ننماید. در صورتی که مقامات
                            قضایی و یا اداری به حکم قانون، داده‌ها و یا اطلاعات
                            مربوط به خریدار یا خریداران خاصی را از شرکت مطالبه
                            نمایند، شرکت مطابق با قانون موظف به افشای آنها به
                            مقامات صالح می‌باشد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-5)اطلاعات محرمانه حساب بانکی به هیچ عنوان و به هیچ
                            نحوی در سامانه کارپایا نگهداری نمی‌شود. این اطلاعات
                            صرفاً در هنگام انجام تراکنش در نرم افزار از خریدار
                            گرفته شده و به صورت رمزگذاری شده و از کانال‌های امن
                            زیرساخت‌های بانکی به بانک مبدأ ارسال می‌گردد. در
                            نتیجه شرکت هیچگونه مسئولیتی در قبال سیاست‌های حفظ
                            حریم خصوصی بانک‌ها برای نحوه نگهداری و استفاده از
                            این اطلاعات ندارد. برای اطلاع از سیاست‌های بانک‌ها
                            باید مستندات مربوطه را از بانک مورد نظر درخواست
                            نمایید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 6- مالکیت حقوق معنوی سامانه کارپایا
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-6) مالکیت معنوی سامانه کارپایا و تمام ملحقات آن
                            (از جمله نام، علامت تجاری و خدمات ارائه‌شده تحت این
                            نام و ...) متعلق به شرکت &nbsp;آسان خودرو آینده
                            ایرانیان به شماره ثبت 603528 است و در نتیجه&nbsp;
                            خریداران تنها اجازه‌ی استفاده‌ی محدود و غیرانحصاری
                            از خدمات آن را تحت شرایط توافقات فیمابین دارند بدون
                            آن که این استفاده حقی برای آن‌ها نسبت به مالکیت
                            سامانه کارپایا یا سایر حقوق معنوی مربوطه ایجاد نماید
                            یا اجازه‌ی استفاده از نام، علامت تجاری، لوگو و غیره
                            را به آن‌ها اعطا نماید.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-6) خریداران نمی‌‌توانند سامانه کارپایا را تغییر
                            دهند، بازتولید یا بازنویسی کنند یا از آن برای تولید
                            یک برنامه‌ی مشابه استفاده نمایند
                          </span>
                        </span>
                      </span>{" "}
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-6)خریداران مجاز به استفاده از خدمات سامانه کارپایا
                            جز در شرایط مقرر در این سند نیستند و حق اجاره، فروش
                            و به‌طور کلی انتقال سامانه کارپایا و حقوق ناشی از آن
                            یا نمایش عمومی آن را نخواهند داشت.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-6)خریداران مجاز نیستند به هیچ ‌یک از سرویس‌‌ها و
                            برنامه‌ها و شبکه‌ی مرتبط با سرورها به‌صورت غیرمجاز
                            دسترسی پیدا کنند یا در این راستا تلاشی انجام دهند و
                            نیز نمی‌‌توانند با استفاده از مهندسی معکوس یا مترجم
                            وارون به کد سطح بالا یا زبان ماشین دست پیدا کنند.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            4-6)همه مطالب در دسترس از طریق هر یک از خدمات ذیل
                            سامانه کارپایا، مانند متن، گرافیک، آرم، آیکون دکمه،
                            تصاویر، ویدئوهای تصویری، موارد قابل دانلود و کپی،
                            داده‌ها و کلیه محتوای تولید شده توسط در سامانه یا
                            مربوط به شرکت جزئی از اموال شرکت محسوب می‏‌شود و حق
                            استفاده و نشر تمامی مطالب موجود و در دسترس در انحصار
                            شرکت می باشد و هرگونه استفاده بدون کسب مجوز کتبی، حق
                            پیگرد قانونی را برای شرکت محفوظ می‏‌دارد. علاوه بر
                            این، اسکریپت‌ها، و اسامی خدمات قابل ارائه از طریق هر
                            یک از خدمات ایجاد شده توسط شرکت و علائم تجاری ثبت
                            شده نیز در انحصار شرکت است و هر گونه استفاده با
                            مقاصد تجاری پیگرد قانونی دارد. خریداران مجاز به
                            بهره‌‏برداری و استفاده از لیست محصولات، مشخصات فنی،
                            قیمت و هر گونه استفاده از مشتقات سامانه کارپایا و یا
                            هر یک از خدمات و یا مطالب، دانلود یا کپی کردن
                            اطلاعات با مقاصد تجاری، هر گونه استفاده از داده
                            کاوی، روبات، یا روش‌‏های مشابه مانند جمع آوری
                            داده‌‏ها و ابزارهای استخراج نیستند و کلیه این حقوق
                            به صراحت برای شرکت محفوظ است. در صورت استفاده از هر
                            یک از خدمات ذیل سامانه کارپایا، خریداران مسئول حفظ
                            محرمانه بودن حساب و رمز عبور خود هستند و تمامی
                            مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز
                            ورود انجام می‏‌پذیرد به عهده خریداران است
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            5-6) در مواردی شرکت به خریداران اجازه می‌‌دهد عکس،
                            فایل صوتی یا تصویری، اطلاعات، دست‌نوشته یا نظرات خود
                            را در سامانه کارپایا منتشر کنند، محتوای تولیدشده و
                            نه کپی‌شده توسط خریداران به‌شیوه‌ی مذکور در مالکیت
                            وی قرار دارد، اما خریداران با بارگذاری این موارد روی
                            سامانه کارپایا اجازه‌ی استفاده، تغییر و انتشار آن را
                            به هر نحو و در هر زمان به‌صورت رایگان، غیرقابل‌رجوع
                            و قابل انتقال به شرکت واگذار می‌‌کنند
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 7- قانون حاکم و شیوه حل اختلاف
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            شرایط استفاده از سامانه کارپایا از هر نظر تابع
                            قوانین جمهوری اسلامی ایران خواهد بود و در صورت بروز
                            اختلاف، طرفین تلاش خواهند کرد تا اختلاف خود را
                            به‌صورت مسالمت‌آمیز و از راه گفت‌وگو حل‌وفصل نمایند.
                            در صورت عدم موفقیت، اختلاف از طریق مراجعه به مراجع
                            قضایی تهران حل‌وفصل خواهد شد.
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>.</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <strong>
                        <span style={{ fontSize: "14.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#ed7d31" }}>
                              ماده 8- توافقات نهائی
                            </span>
                          </span>
                        </span>
                      </strong>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            1-8) خریداران تصدیق می‌نمایند که شرایط استفاده حاضر
                            را به‌طور کامل مطالعه نموده، از مفاد و شرایط آن
                            آگاهی کامل داشته، نسبت به اعمال تمامی این شرایط
                            رضایت دارند و نسبت به مفاد آن ملتزم می‌باشند
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            تبصره: هرگونه علامت، عدد، کلمه، تصویر یا نشان
                            الکترونیک که مثبِت هویت امضاکننده باشد و به این سند
                            یا سایر اسناد صادره در این زمینه ملحق شود به‌منزله
                            امضای الکترونیک و همانند امضای دست‌نویس واجد اعتبار
                            خواهد بود و امضاکننده را به مفاد سند ملتزم می‌‌نماید
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            2-8) در مواردی که شرایط استفاده حاضر، صراحتاً یا
                            ضمناً حاوی حکمی نباشد، مراتب تابع قانون یا عرف رایج
                            در این صنعت می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ fontFamily: "Calibri,sans-serif" }}>
                      <span style={{ fontSize: "15.0pt" }}>
                        <span style={{ fontFamily: '"Arial",sans-serif' }}>
                          <span style={{ color: "#202021" }}>
                            3-8)در صورتی که شرایط استفاده حاضر تغییر یابد، شرکت
                            مراتب را با یکی از شیوه‌های ارسال پیامک، ایمیل،
                            بارگذاری شرایط جدید در وبسایت و اپلیکیشن اطلاع‌رسانی
                            می‌نماید. صرف استفاده خریداران از سامانه کارپایا پس
                            از تغییر شرایط استفاده و اطلاع‌رسانی آن به منزله
                            پذیرش شرایط جدید استفاده می‌باشد.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            ),
            2: (
              <div className="flex items-start flex-col">
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "16.0pt" }}>
                      <span style={{ fontFamily: '"Arial",sans-serif' }}>
                        <span style={{ color: "#ed7d31" }}>
                          شرایط استفاده از سامانه خرید باتری کارپایا
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              1-خدمات تحویل در محل فقط برای استان تهران توسط
                              کارپایا ارائه می‌شود
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              2-تحویل باتری فرسوده با آمپر برابر باتری
                              خریداری‌شده الزامی است. در صورت تفاوت آمپر، هزینه
                              اضافی به عهده مشتری است
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              3-در صورت عدم تطابق آمپر باتری قدیمی و جدید، هزینه
                              اضافی در مرکز کارپایا از مشتری دریافت می‌شود
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              4-اگر مشکلی در تولید یا تحویل باتری از سوی شرکت
                              تأمین‌کننده ایجاد شود، کارپایا و مشتری مسئولیتی
                              ندارند و مبلغ پرداختی کامل بازگردانده می‌شود
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              5-در صورت عدم مراجعه تا{" "}
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>۷</span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              {" "}
                              روز پس از تحویل، با کسر{" "}
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>۵٪</span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              {" "}
                              از مبلغ کالا، باقیمانده به کیف پول حساب کاربری شما
                              در کارپایا واریز می‌شود
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              6-هزینه تست و تعویض باتری در کارپایا رایگان است
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              7-بازگشت وجه در صورت خرید اشتباه امکان‌پذیر نیست،
                              لطفاً در خرید خود دقت کنید
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11pt" }}>
                    <span style={{ backgroundColor: "white" }}>
                      <span style={{ fontFamily: "Calibri,sans-serif" }}>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>
                              8-اگر تامین کالا توسط تأمین‌کنندگان انجام نشود،
                              مبلغ پرداختی به کیف پول حساب کاربری شما در کارپایا
                              بازگردانده خواهد شد
                            </span>
                          </span>
                        </span>
                        <span style={{ fontSize: "16.0pt" }}>
                          <span style={{ fontFamily: '"Arial",sans-serif' }}>
                            <span style={{ color: "#222222" }}>.</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            ),
            3: <div className="flex items-start flex-col"></div>,
          }[state]
        }
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-col gap-6 p-4">
  //     <p className="text-[#F66B34] text-lg text-center my-6">
  //       شرایط استفاده از سامانه سرویس دوره ای کارپایا
  //     </p>
  //     <p className="text-justify">
  //       قرارداد حاضر جهت بیان شرایط و مقررات حاکم بر استفاده از سامانه کارپایا
  //       برای خریداران تنظیم شده است. خریداران میبایست پیش از هر گونه ثبت سفارش،
  //       کلیه مقررات و شرایط ذیل را مطالعه و تأیید نموده و از آن پیروی نمایند
  //       زیرا این شرایط و مقررات به منزله یک قرارداد الکترونیک معتبر و
  //       لازم‌الاتباع میان شرکت و خریداران می‌باشد. استفاده از سامانه کارپایا و
  //       نیز ثبت سفارش در هر زمان به معنی پذیرفتن کلیه شرایط و قوانین سامانه
  //       کارپایا از سوی خریدار است و هرگونه ادعا یا اعتراض آتی در این خصوص را
  //       بلااعتبار می‌‌نماید. لازم به ذکر است کلیه اصول و رویه‏‌های کارپایا منطبق
  //       با قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از
  //       حقوق مصرف کننده است و متعاقباً خریدار نیز موظف به رعایت قوانین مرتبط با
  //       خریدار است. در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های کارپایا
  //       تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می گردد،
  //       لذا مسئولیت مطالعه و آگاهی از این تغییرات بر عهده خریداران می باشد..
  //     </p>
  //     <span className="font-medium text-[#F66B34]">ماده 1- تعاریف</span>
  //     <p className="text-justify">
  //       واژگان و اصطلاحاتی که در شرایط و مقررات حاضر مورد استفاده قرار گرفته‌اند
  //       دارای معانی به شرح ذیل می‌باشند 1) حق العمل کار/شرکت: شرکت آسان خودرو
  //       آینده ایرانیان (سهامی خاص) با شماره ثبت 603528 و شناسۀ ملی 14011593151
  //       به‌عنوان مالک سامانه و نام تجاری کارپایا که به ‌عنوان واسط میان خریداران
  //       و تأمین کنندگان از طریق سامانه مزبور امکان سفارش کالا و خدمات به درخواست
  //       خریدار و ارائه آن توسط تأمین کنندگان را فراهم می سازد. 2) کارپایا: نام و
  //       علامت تجاری متعلق به شرکت می‌باشد که از طریق سامانه کارپایا برای
  //       خریداران امکان ثبت سفارش کالا و خدمات مرتبط با خودرو و موتورسیکلت را
  //       فراهم می سازد 3) سامانه کارپایا: عبارت است از سامانه متعلق به شرکت آسان
  //       خودرو آینده ایرانیان در قالب وبسایت به آدرس https://carpaya.com که شرکت
  //       از طریق آن ارتباط بین خریدار و تأمین کننده را برقرار و تسهیل می کند تا
  //       خریداران بتوانند کالاها و خدمات مورد نیاز خود را خریداری و دریافت
  //       نمایند. 4) سرویس سفارش کالا و خدمات کارپایا: عبارت است از خدمات هوشمند
  //       ذیل سامانه کارپایا که به موجب آن خریداران کالا و خدمات مرتبط با خودرو و
  //       موتورسیکلت را ثبت سفارش و خریداری می‌نمایند که این درخواست از طریق
  //       سامانه کارپایا به تأمین¬کنندگان منتقل شده و خریدار می¬تواند با ارائه کد
  //       تحویل نسبت به دریافت کالا و خدمات اقدام نماید. 5) حساب کاربری: عبارت است
  //       از حسابی که خریداران جهت استفاده و ثبت سفارش با وارد نمودن اطلاعات مورد
  //       نظر در سامانه کارپایا ایجاد می‌نمایند و از طریق آن از خدمات سامانه مزبور
  //       بهره‌مند می‌گردند. 6) خریدار یا خریداران: عبارت است از اشخاصی که از طریق
  //       سامانه کارپایا مبادرت به خرید کالاها و خدمات از تأمین-کنندگان معرفی شده
  //       در سامانه می¬نمایند.. 7)کالاها: کلیه لوازم، قطعات یدکی و اقلام کالایی
  //       مربوط به خودرو و موتورسیکلت اعم از اینکه در مالکیت شرکت یا تأمین‌کننده
  //       باشد. 8) خدمات: کلیه خدمات نصب یا تعویض کالاها و تعمیرات خودرو و
  //       موتورسیکلت که از سوی تأمین‌کننده ارائه می شود و در سامانه کارپایا ثبت
  //       گردیده است 9) حق العمل: حق الزحمه شرکت که حسب مورد (بسته به کالا و خدمات
  //       خریداری شده) در سامانه کارپایا محاسبه می-شود و توسط تامین کننده به شرکت
  //       پرداخت می شود 10)آمر/تامین کننده: کلیه مراکز ارائه خدمات مربوط به کالاها
  //       و خدمات قابل ارائه به خریداران که در سامانه کارپایا فعالیت می نمایند..
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده 2- ایجاد حساب کاربری و شرایط آن
  //     </span>
  //     <p className="text-justify">
  //       1-2) برای عضویت در سامانه کارپایا و استفاده از تمامی خدمات آن، لازم است
  //       خریدار اقدام به ایجاد یک حساب کاربری در این سامانه نماید. برای ایجاد
  //       حساب کاربری داشتن ۱۸ سال تمام شمسی الزامی است هر شخص تنها مجاز به افتتاح
  //       یک حساب کاربری در سامانه کارپایا است.2-2) 3-2) خریدار مسئولیت صحت
  //       اطلاعات مندرج در حساب کاربری را می‌‌پذیرد و متعهد می‌‌شود که در صورت
  //       تغییر در هر بخش از این اطلاعات، حساب کاربری خود را در سامانه کارپایا را
  //       بروز نماید. وارد کردن اطلاعات نادرست و غیردقیق ممکن است منجر به محرومیت
  //       خریدار از خدمات سامانه کارپایا شود و وی نمی‌‌تواند به این موضوع معترض
  //       گردد. 4-2) همزمان با قطعی شدن و اتمام تراکنش مالی، رزرو کالا/خدمات برای
  //       خریدار صورت خواهد پذیرفت و پس از مراجعه و ارائه کد تحویل برای دریافت
  //       کالا/خدمات، فاکتور مربوطه حسب مورد توسط کارپایا یا به نیابت از تامین
  //       کننده صادر می گردد.. 5-2) هر خریدار با ثبت‌نام در سامانه کارپایا و ایجاد
  //       حساب کاربری به نام خود صحت انتساب تمام پیام‌‌های صادره ازحساب کاربری
  //       خویش را پذیرفته و در نتیجه حق هرگونه اعتراض یا ادعای آتی (مبنی بر انکار،
  //       تردید یا جعل داده‌ی پیام‌های ارسالی) را از خویش سلب و اسقاط می‌‌نماید
  //       6-2) در صورت عدم همکاری خریداران و ارائه نکردن اطلاعات مربوطه در شرایط
  //       خاص که ممکن است ارائه اطلاعات بیشتری مورد نیاز باشد یا در شرایطی که ثبت
  //       نام مجدد لازم باشد، شرکت حق مسدود سازی و توقف ثبت سفارش را خواهد داشت.
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده 3- حقوق و مسئولیت‌های خریداران در استفاده از سامانه کارپایا
  //     </span>
  //     <p className="text-justify">
  //       1-3)با توجه به این‌که اتصال به اینترنت برای استفاده از سامانه کارپایا
  //       ضروری است، خریدار می‌‌بایست اینترنت مورد نیاز را به ‌انضمام سایر لوازم
  //       استفاده از سامانه کارپایا تدارک ببیند و مخارج آن‌‌ها را شخصاً تأمین
  //       نماید. بدین‌‌وصف، هزینه‌ای که به‌عنوان هزینه‌ خرید کالا و خدمات محاسبه و
  //       از خریدار دریافت می‌‌شود، مشتمل بر مخارج اینترنت مصرفی و موارد مشابه
  //       نبوده و تنها بهای کالاها و خدمات ارائه‌شده در ذیل سامانه کارپایا
  //       می‌باشد.. 2-3) هزینه‌ی خرید کالاها و خدمات ذیل سامانه کارپایا از طریق
  //       سامانه مزبور محاسبه و به خریدار اعلام گردیده و وی موظف است این هزینه را
  //       صرفاً از طریق درگاه پرداخت اینترنتی به حساب شرکت پرداخت نماید. نظر به
  //       اینکه خریداران از طریق سامانه کارپایا به تأمین‌کننده معرفی گردیده و
  //       اقدام به خرید کالاها یا خدمات می نمایند، از مجموع هزینه پرداختی حق بهره
  //       برداری متعلق به شرکت کسر شده و باقی مانده در وجه تأمین کننده کارسازی
  //       می‌گردد. لازم به ذکر است تأمین کنندگان حق اخذ هیچ گونه مبلغی بابت کالاها
  //       و خدمات خریداری شده در سامانه کارپایا را نداشته و خریدار در صورت مواجه
  //       شدن با درخواست وجه اضافی، باید مراتب را به شرکت اطلاع رسانی نماید. 3-3
  //       )در مواردی به تشخیص و صلاحدید شرکت، بسته‌‌های تشویقی (به‌صورت عمومی برای
  //       همه‌ی خریداران یا به ‌صورت اختصاصی برای برخی از آنها) به ‌عنوان هدیه و
  //       بدون دریافت هزینه برای خریداران در نظر گرفته می‌‌شود که در قالب آن یا
  //       مبلغ مشخصی به‌عنوان هدیه به اعتبار خریداران افزوده می‌‌شود یا تخفیف
  //       مشخصی به ایشان اختصاص می‌یابد. در صورتی که بسته‌‌ها دارای تاریخ اعتبار
  //       مشخصی باشند، پس از آن تاریخ بلااعتبار خواهند بود. مضاف بر آن و با توجه
  //       به هدیه بودن بسته های مذکور، به تشخیص شرکت این بسته‌ها در هر زمانی قابل
  //       تغییر، تعلیق یا ابطال خواهند بود و شرکت این حق را برای خود محفوظ
  //       می‌‌دارد که بدون تدارک هیچ دلیلی هر یک از این بسته‌ها را غیرفعال نماید.
  //       4-3 )پس از پایان فرآیند فروش کالاها یا خدمات در سامانه کارپایا، خریدار
  //       در بازه زمانی انتخابی در سامانه مزبور (1 الی 3 روز کاری پس از خرید) به
  //       محل فعالیت تأمین‌کننده مراجعه نموده و تأمین‌کننده موظف است پس از تطبیق
  //       شماره موبایل خریدار با شماره موجود در سامانه کارپایا و همچنین چک نمودن و
  //       تایید پلاک خودرو ، کالاها و خدمات خریداری شده مطابق اطلاعات ثبت شده در
  //       سامانه مزیور را به خریدار ارائه کرده و در پایان، کد تحویل دریافت شده از
  //       خریدار را در سامانه ثبت نماید که به منزله خاتمه کار مربوط به خریدار
  //       مربوطه می باشد. 5-3 )همزمان با ثبت کد تحویل در سامانه و دریافت
  //       کالا/خدمات توسط خریدار، فرآیند خرید قطعی می گردد و خریدار حق مسترد نمودن
  //       کالا یا تقاضای استرداد وجه برای خدمات دریافتی را نخواهد داشت. بنابراین
  //       ارائه کد تحویل به تامین کننده به منزله رویت، اطمینان از صحت کالا، مطابقت
  //       کالا با سفارش ثبت شده و حسب مورد تحویل ضمانت نامه می باشد. 6-3 )ماهیت
  //       روابط میان شرکت با تأمین کنندگان کالا و خدمات، حق العمل کاری شرکت برای
  //       تأمین کنندگان می باشد که به موجب آن شرکت به تأمین کنندگان ، خدمات نرم
  //       افزاری در زمینه معرفی و بازاریابی خریداران جهت عرضه و فروش کالاها و
  //       خدمات ارائه داده و در ازای آن، از تأمین کنندگان حق بهره برداری (کمیسیون)
  //       دریافت می کند بنابراین، شرکت فاقد هر گونه رابطه استخدامی، مشاوره،
  //       نمایندگی، مشاركت، سرمایه‌گذاری مشترك یا شراكت با تأمین کنندگان می‌باشد..
  //       7-3) در صورتی که خریداران ادعای عدم تحویل کالا یا خدمات، مغایرت کالا و
  //       خدمات ارائه شده با موارد خریداری در سامانه کارپایا یا ادعای آسیب و نقص
  //       کالاهای دریافتی را داشته باشند می‌بایست مراتب را فوراً با پشتیبانی شرکت
  //       مطرح نماید. پشتیبانی با بررسی و پیگیری موضوع نسبت به رفع مشکل ایجاد شده
  //       مساعدت می‌نماید بدون آنکه مستقیماً مسئولیتی در قبال طرفین اختلاف یا
  //       پرداخت هزینه کالاها و خدمات خریداری شده داشته باشد. 8-3) تأمین کننده
  //       ضامن اصل و سالم بودن کالاهای متعلق به خود می باشد و در صورتی که خلاف این
  //       امر ثابت شود، وی منحصراً مسوول پاسخگویی به خریدارخواهد بود. همچنین،
  //       تأمین کننده موظف به تحویل ضمانت نامه معتبر کالاهای خریداری شده به خریدار
  //       می باشد. در خصوص این موارد، شرکت هیچ مسؤولیتی ندارد. 9-3)با توجه به
  //       اینکه خریدار و تأمین کننده از طریق سامانه کارپایا به یکدیگر معرفی می
  //       شوند، هر گونه خرید و فروش کالاها و خدمات موجود در سامانه کارپایا از
  //       طریقی به غیر از سامانه مزبور ممنوع بوده و در صورت احراز تخلف، شرکت حق
  //       تعلیق و مسدود سازی دسترسی خریداران به سامانه را برای خود محفوظ داشته و
  //       مطابق با شرایط و ضوابط با متخلف برخورد خواهد کرد 10-3)شرکت مسئولیتی در
  //       قبال خرابی‌ها و یا عدم سرویس ‌دهی به دلیل اختلال در سرویس اینترنت و سایر
  //       زیرساخت های مورد نیاز ندارد.
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده4-حقوق و مسئولیت های شرکت
  //     </span>
  //     <p className="text-justify">
  //       1-4)شرکت متعهد به تلاش برای ارائه‌ی خدمات نرم‌افزاری باکیفیت است و در
  //       این راه تلاش می‌‌کند با به‌روزرسانی سامانه کارپایا متناسب با نیاز
  //       کاربران سطح خدمات ارائه‌شده را ارتقا بخشد. 2-4) شرکت متعهد است با اطلاع
  //       از بروز نقص در سامانه کارپایا، نسبت به رفع آن اقدام نماید و در تمام طول
  //       قرارداد، موظف به پشتیبانی فنی از این سامانه می‌باشد. 3-4) شرکت از طریق
  //       تیم پشتیبانی خود نسبت به ارائه خدمات پشتیبانی طبق شرایط و ضوابط
  //       اعلام‌شده اقدام می‌نماید. ‏4-4) شرکت امکان استفاده از سامانه کارپایا را
  //       با شرایط فوق‌الذکر برای کاربران فراهم می‌نماید. با این حال، شرکت
  //       نمی‌‌تواند اجرا شدن سامانه کارپایا را در تمامی سخت‌افزارها، دستگاه‌های
  //       تلفن همراه یا شبکه‌های ارتباطی تضمین نماید. 5-4) خریدار می پذیرد قرارداد
  //       حاضر، یک قرارداد قابل رجوع و جایز از سوی شرکت بوده و شرکت می تواند هر
  //       زمان تنها به صلاحدید خود و بدون نیاز به تدارک هیچ گونه دلیلی، حساب
  //       کاربری وی را مسدود نموده و مانع استفاده خریدار از سامانه کارپایا گردد.
  //       6-4) افزودن کالا به سبد خرید به معنی رزرو کالا نیست و هیچ گونه حقی را
  //       برای خریداران ایجاد نمی‌کند. همچنین تا پیش از پرداخت و نهایی شدن تراکنش
  //       مالی، هرگونه تغییر از جمله تغییر در موجودی کالا یا قیمت، روی کالای
  //       افزوده شده به سبد خرید اعمال خواهد شد 7-4)شرکت مجاز است بدون اطلاع قبلی
  //       نسبت به توقف سفارش‌‏گیری جدید، اقدام و ثبت سفارش را متوقف کند و کلیه
  //       سفارش‌‏های ثبت شده قبل از توقف سفارش‌‏گیری، پردازش می‌‏شود. حق قطع فروش
  //       کلیه و یا بخشی از محصولات به هر دلیلی مانند اتمام موجودی کالا بدون اطلاع
  //       قبلی، برای شرکت محفوظ است 8-4)در صورت بروز مشکل در پردازش نهایی سفارش
  //       ثبت شده مانند اتمام موجودی کالا یا انصراف خریدار، مبلغ پرداخت شده طی 72
  //       ساعت کاری به حساب خریدار واریز خواهد شد 9-4)در صورت بروز تاخیر در پردازش
  //       سفارش ثبت شده توسط خریداران یا هر گونه مشکلی که دریافت کالا و خدمات در
  //       زمان معین شده از سوی خریداران را با ماتع مواجه نماید، این موضوع از طریق
  //       پیامک به خریدار اطلاع رسانی شده و شرکت تلاش خواهد کرد کالا/خدمات مورد
  //       نظر خریداران در اسرع وقت در اختیار ایشان قرار داده شود 10-4)در صورت بروز
  //       هرگونه خطا نسبت به درج قیمت و ارزش ریالی کالاهای موجود در سامانه
  //       کارپایا، حق بلا اثر نمودن سفارش و خرید انجام شده توسط خریدار، برای شرکت
  //       محفوظ است. شرکت در اسرع وقت وجوه دریافتی را به حساب خریدار واریز و عودت
  //       می‌نماید و خریدار با ورود به سامانه کارپایا می‌پذیرد از این امر آگاهی
  //       داشته و در این خصوص ادعایی نخواهد داشت.
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده 5- حفاظت از داده‌ها و اطلاعات خریداران
  //     </span>
  //     <p className="text-justify">
  //       1-5)شرکت متعهد به حفظ و حراست از داده‌ها و اطلاعاتی است که در نتیجه‌ی
  //       استفاده‌ی خریداران از خدمات کارپایا در سامانه مزبور ثبت و ذخیره می‌‌شود.
  //       این اطلاعات به‌شرح زیر است: • 1)اطلاعاتی که خریداران در فرم مشخصات
  //       ثبت‌نام (نام، نام خانوادگی، شماره‌ی تلفن همراه و پست الکترونیک)، اطلاعات
  //       درخواست حمل و ... و سایر اطلاعات مذکور در ماده 2 در اختیار شرکت قرار
  //       می‌‌دهد. • 2)اطلاعاتی که به‌طور غیرمستقیم و در نتیجه‌ی استفاده‌ی
  //       خریداران از خدمات کارپایا در این برنامه ذخیره می‌‌شود؛ از جمله سبد خرید
  //       خریدار، تأمین کننده منتخب، ، تراکنش‌های مالی صورت‌گرفته در حساب کاربری
  //       جهت استفاده از خدمات کارپایا و اطلاعات مربوط به سخت‌افزاری که خریدار با
  //       استفاده از آن از خدمات کارپایا استفاده می‌‌کند (نظیر سیستم ‌عامل آن) و
  //       نهایتاً شیوه‌ی اتصال کاربر به اینترنت و مانند آنها. 2-5)شرکت در راستای
  //       حفظ حریم خصوصی خریداران با رعایت اصل محرمانگی و التزام به قوانین و
  //       مقررات مربوطه، داده‌ها و اطلاعات دریافتی از خریداران را در موارد زیر
  //       مورد استفاده قرار داده و به شرح ذیل از آنها حفاظت به عمل می‌آورد:
  //       1)داده‌هایی که هنگام ثبت نام مستقیماً از خریداران أخذ می‌شود، شامل شماره
  //       تلفن همراه، مشخصات فردی (نام و نام خانوادگی) و پست الکترونیک و شماره
  //       تلفن همراه، صرفاً در جهت احراز هویت خریداران و امکان برخورداری از
  //       تسهیلات هوشمند سامانه کارپایا مورد استفاده قرار می‌گیرد. شرکت متعهد
  //       می‌گردد داده‌های مذکور را صرفا در محدوده ارائه خدمات مذکور مورد استفاده
  //       قرار دهد. در همین راستا، پس از ثبت نهایی درخواست خرید کالا یا خدمات،
  //       داده‌های مزبور در جهت شناسایی خریدار و انجام هماهنگی با تأمین¬کننده
  //       مربوطه به منظور تحویل کالا و/یا ارائه خدمات به اشتراک گذاشته می‌شوند.
  //       2)درخصوص داده‌ها و اطلاعاتی که به‌طور غیرمستقیم و در نتیجه‌ی استفاده‌ی
  //       کاربر سفارش‌دهنده از سامانه کارپایا در این برنامه ذخیره می‌‌شود، شرکت
  //       متعهد می‌‌شود که اطلاعات ذخیره‌شده را تنها در جهت بهبود کیفیت خدمات
  //       استفاده نماید. 3)در مواردی که سایر اشخاص، حسب مورد، بخشی از فرایند ارائه
  //       خدمات را تحت نظارت شرکت عهده‌دار شوند، شرکت مطابق با اصول، قوانین و
  //       مقررات صیانت از حریم خصوصی و حفاظت از داده‌ها نسبت به پیشبرد امور اقدام
  //       و بر این امر نظارت می‌نماید. 4)شرکت متعهد می‌گردد داده‌ها و اطلاعات
  //       خریداران را برای اشخاص ثالث اعم از حقیقی و یا حقوقی با مقاصد تجاری و
  //       غیرتجاری خارج از حیطه خدمات فوق‌الذکر، بدون کسب رضایت صاحبان آن افشا
  //       ننماید. در صورتی که مقامات قضایی و یا اداری به حکم قانون، داده‌ها و یا
  //       اطلاعات مربوط به خریدار یا خریداران خاصی را از شرکت مطالبه نمایند، شرکت
  //       مطابق با قانون موظف به افشای آنها به مقامات صالح می‌باشد.. 3-5)اطلاعات
  //       محرمانه حساب بانکی به هیچ عنوان و به هیچ نحوی در سامانه کارپایا نگهداری
  //       نمی‌شود. این اطلاعات صرفاً در هنگام انجام تراکنش در نرم افزار از خریدار
  //       گرفته شده و به صورت رمزگذاری شده و از کانال‌های امن زیرساخت‌های بانکی به
  //       بانک مبدأ ارسال می‌گردد. در نتیجه شرکت هیچگونه مسئولیتی در قبال
  //       سیاست‌های حفظ حریم خصوصی بانک‌ها برای نحوه نگهداری و استفاده از این
  //       اطلاعات ندارد. برای اطلاع از سیاست‌های بانک‌ها باید مستندات مربوطه را از
  //       بانک مورد نظر درخواست نمایید.
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده 6- مالکیت حقوق معنوی سامانه کارپایا
  //     </span>
  //     <p className="text-justify">
  //       1-6) مالکیت معنوی سامانه کارپایا و تمام ملحقات آن (از جمله نام، علامت
  //       تجاری و خدمات ارائه‌شده تحت این نام و ...) متعلق به شرکت آسان خودرو
  //       آینده ایرانیان به شماره ثبت 603528 است و در نتیجه خریداران تنها اجازه‌ی
  //       استفاده‌ی محدود و غیرانحصاری از خدمات آن را تحت شرایط توافقات فیمابین
  //       دارند بدون آن که این استفاده حقی برای آن‌ها نسبت به مالکیت سامانه
  //       کارپایا یا سایر حقوق معنوی مربوطه ایجاد نماید یا اجازه‌ی استفاده از نام،
  //       علامت تجاری، لوگو و غیره را به آن‌ها اعطا نماید. 2-6) خریداران
  //       نمی‌‌توانند سامانه کارپایا را تغییر دهند، بازتولید یا بازنویسی کنند یا
  //       از آن برای تولید یک برنامه‌ی مشابه استفاده نمایند 3-6)خریداران مجاز به
  //       استفاده از خدمات سامانه کارپایا جز در شرایط مقرر در این سند نیستند و حق
  //       اجاره، فروش و به‌طور کلی انتقال سامانه کارپایا و حقوق ناشی از آن یا
  //       نمایش عمومی آن را نخواهند داشت. 3-6)خریداران مجاز نیستند به هیچ ‌یک از
  //       سرویس‌‌ها و برنامه‌ها و شبکه‌ی مرتبط با سرورها به‌صورت غیرمجاز دسترسی
  //       پیدا کنند یا در این راستا تلاشی انجام دهند و نیز نمی‌‌توانند با استفاده
  //       از مهندسی معکوس یا مترجم وارون به کد سطح بالا یا زبان ماشین دست پیدا
  //       کنند. 4-6)همه مطالب در دسترس از طریق هر یک از خدمات ذیل سامانه کارپایا،
  //       مانند متن، گرافیک، آرم، آیکون دکمه، تصاویر، ویدئوهای تصویری، موارد قابل
  //       دانلود و کپی، داده‌ها و کلیه محتوای تولید شده توسط در سامانه یا مربوط به
  //       شرکت جزئی از اموال شرکت محسوب می‏‌شود و حق استفاده و نشر تمامی مطالب
  //       موجود و در دسترس در انحصار شرکت می باشد و هرگونه استفاده بدون کسب مجوز
  //       کتبی، حق پیگرد قانونی را برای شرکت محفوظ می‏‌دارد. علاوه بر این،
  //       اسکریپت‌ها، و اسامی خدمات قابل ارائه از طریق هر یک از خدمات ایجاد شده
  //       توسط شرکت و علائم تجاری ثبت شده نیز در انحصار شرکت است و هر گونه استفاده
  //       با مقاصد تجاری پیگرد قانونی دارد. خریداران مجاز به بهره‌‏برداری و
  //       استفاده از لیست محصولات، مشخصات فنی، قیمت و هر گونه استفاده از مشتقات
  //       سامانه کارپایا و یا هر یک از خدمات و یا مطالب، دانلود یا کپی کردن
  //       اطلاعات با مقاصد تجاری، هر گونه استفاده از داده کاوی، روبات، یا روش‌‏های
  //       مشابه مانند جمع آوری داده‌‏ها و ابزارهای استخراج نیستند و کلیه این حقوق
  //       به صراحت برای شرکت محفوظ است. در صورت استفاده از هر یک از خدمات ذیل
  //       سامانه کارپایا، خریداران مسئول حفظ محرمانه بودن حساب و رمز عبور خود
  //       هستند و تمامی مسئولیت فعالیت‌‏هایی که تحت حساب کاربری و یا رمز ورود
  //       انجام می‏‌پذیرد به عهده خریداران است 5-6) در مواردی شرکت به خریداران
  //       اجازه می‌‌دهد عکس، فایل صوتی یا تصویری، اطلاعات، دست‌نوشته یا نظرات خود
  //       را در سامانه کارپایا منتشر کنند، محتوای تولیدشده و نه کپی‌شده توسط
  //       خریداران به‌شیوه‌ی مذکور در مالکیت وی قرار دارد، اما خریداران با
  //       بارگذاری این موارد روی سامانه کارپایا اجازه‌ی استفاده، تغییر و انتشار آن
  //       را به هر نحو و در هر زمان به‌صورت رایگان، غیرقابل‌رجوع و قابل انتقال به
  //       شرکت واگذار می‌‌کنند
  //     </p>
  //     <span className="font-medium text-[#F66B34]">
  //       ماده 7- قانون حاکم و شیوه حل اختلاف
  //     </span>
  //     <p className="text-justify">
  //       شرایط استفاده از سامانه کارپایا از هر نظر تابع قوانین جمهوری اسلامی
  //       ایران خواهد بود و در صورت بروز اختلاف، طرفین تلاش خواهند کرد تا اختلاف
  //       خود را به‌صورت مسالمت‌آمیز و از راه گفت‌وگو حل‌وفصل نمایند. در صورت عدم
  //       موفقیت، اختلاف از طریق مراجعه به مراجع قضایی تهران حل‌وفصل خواهد شد..
  //     </p>
  //     <span className="font-medium text-[#F66B34]">ماده 8- توافقات نهائی</span>
  //     <p className="text-justify">
  //       1-8) خریداران تصدیق می‌نمایند که شرایط استفاده حاضر را به‌طور کامل
  //       مطالعه نموده، از مفاد و شرایط آن آگاهی کامل داشته، نسبت به اعمال تمامی
  //       این شرایط رضایت دارند و نسبت به مفاد آن ملتزم می‌باشند تبصره: هرگونه
  //       علامت، عدد، کلمه، تصویر یا نشان الکترونیک که مثبِت هویت امضاکننده باشد و
  //       به این سند یا سایر اسناد صادره در این زمینه ملحق شود به‌منزله امضای
  //       الکترونیک و همانند امضای دست‌نویس واجد اعتبار خواهد بود و امضاکننده را
  //       به مفاد سند ملتزم می‌‌نماید 2-8) در مواردی که شرایط استفاده حاضر،
  //       صراحتاً یا ضمناً حاوی حکمی نباشد، مراتب تابع قانون یا عرف رایج در این
  //       صنعت می‌باشد. 3-8)در صورتی که شرایط استفاده حاضر تغییر یابد، شرکت مراتب
  //       را با یکی از شیوه‌های ارسال پیامک، ایمیل، بارگذاری شرایط جدید در وبسایت
  //       و اپلیکیشن اطلاع‌رسانی می‌نماید. صرف استفاده خریداران از سامانه کارپایا
  //       پس از تغییر شرایط استفاده و اطلاع‌رسانی آن به منزله پذیرش شرایط جدید
  //       استفاده می‌باشد.
  //     </p>
  //     <p className="text-[#F66B34] text-lg text-center my-6">
  //       شرایط استفاده از سامانه کارشناسی کارپایا
  //     </p>
  //     <p className="text-justify">
  //       این سند به‌ عنوان یک قرارداد الزام‌آور بر روابط بین شرکت خودرو پردازش
  //       هوشمند (سهامی خاص) و کاربران حاکم است و کلیه حقوق و تعهدات کارپایا و
  //       کاربر را در قبال یکدیگر تعیین می‌کند. استفاده از خدمات کارپایا به این
  //       معنی است که کاربران از کلیه شرایط، حقوق و تعهدات مندرج در این سند آگاهی
  //       کامل دارند و همه آن‌ها را قبول می‌کنند و هرگونه ادعا یا اعتراض آتی را در
  //       این خصوص بلا اعتبار می‌‌نماید. بنابراین ضروری است پیش از استفاده از
  //       خدمات کارپایا، این شرایط و مقررات به‌ دقت مطالعه شوند.
  //     </p>
  //     <p className="text-justify">
  //       ماده یک) تعاریف و اصطلاحات: واژگان و اصطلاحاتی که در شرایط و مقررات حاضر
  //       مورد استفاده قرار گرفته‌اند، دارای معانی به شرح ذیل می‌باشند:  شرکت:
  //       منظور شرکت آسان خودرو آینده ایرانیان (سهامی خاص) با شناسه ملی
  //       14011593151است.  کارپایا نام و علامت تجاری متعلق به شرکت آسان خودرو
  //       آینده ایرانیان و بستر آنلاین (پلتفرم) متعلق به این شرکت برای ارائه خدمات
  //       کارشناسی خودرو و موتورسیکلت، سرویس دوره‌ای خودرو و تسهیل فرایند خرید و
  //       فروش خودرو و موتورسیکلت می‌باشد که از طریق سایت و‌ اپلیکیشن کارپایا قابل
  //       استفاده است.  خدمات کارپایا این خدمات شامل کارشناسی خودرو و موتورسیکلت،
  //       در محل مشتری و نمایندگیهای کارپایا می باشد.  کاربر: منظور اشخاصی هستند
  //       که از طریق روش‌های پیش‌بینی شده مانند مراجعه به سایت کارپایا به نشانی
  //       carpaya.com و تماس تلفنی با کارپایا، درخواست خود مبنی بر استفاده از
  //       خدمات کارپایا را ثبت می‌نمایند.  خودرو: منظور خودرویی است که در زمان
  //       ثبت درخواست توسط کاربر، اطلاعات آن جهت استفاده از انواع خدمات کارپایا
  //       اعلام می‌گردد و در واقع موضوع درخواست کاربر می‌باشد.  کارشناسی ویژه:
  //       یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر، خودروی مشخص از نظر
  //       وضعیت بدنه، فنی و مکانیکی توسط کارشناس فنی بررسی می‌شود.  کارشناسی
  //       استاندارد: یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر، خودروی
  //       مشخص از نظر وضعیت فنی و بدنه توسط کارشناس فنی بررسی می‌شود.  کارشناسی
  //       رنگ و بدنه: یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر، خودروی
  //       مشخص از نظر وضعیت بدنه توسط کارشناس فنی بررسی می‌شود.  کارشناسی
  //       موتورسیکلت: یکی از خدمات کارپایا که با ثبت درخواست توسط کاربر،
  //       موتورسیکلت مشخص از نظر وضعیت فنی و بدنه توسط کارشناس فنی بررسی می‌شود. 
  //       کارشناس فنی: اشخاصی که برای انجام عملیات کارشناسی خودرو و موتورسیکلت و
  //       سرویس دوره‌ای خودرو توسط کارپایا اختصاص داده می‌شوند.  موضوع کارشناسی:
  //       موضوع کارشناسی، خودرو یا موتورسیکلتی است که مشخصات آن در درخواست
  //       کارشناسی مربوطه توسط کاربر اعلام و ثبت شده است.  گزارش کارشناسی: گزارشی
  //       است که بعد بازدید از موضوع کارشناسی حسب مورد در خصوص وضعیت فنی و بدنه آن
  //       توسط کارشناس فنی تهیه می‌شود و کاربر می‌تواند این گزارش را به‌ صورت
  //       آنلاین از طریق لینک ارسالی توسط کارپایا مشاهده نماید و یا از طریق اوراق
  //       گزارش کارشناسی از آن مطلع شود.  ضمانت‌نامه ویژه کارپایا:‌ سندی متضمن
  //       شرایط و حدود استفاده از تضمین کارشناسی بدنه و یا فنی و بدنه خودرو است که
  //       مطابق با شرایط و مقررات سند حاضر و مندرجات ضمانت‌نامه مذکور، به خریدار
  //       خودرو تحویل می‌گردد.  خودروی صفر: خودرو با کارکرد حداکثر 1000 کیلومتر
  //       یا ظرف ۶ ماه از تولید، صفر محسوب می‌شود.  دارایی‌های فکری: دارایی‌های
  //       فکری شامل متون، طرح‌های گرافیکی، عکس، علایم تجاری، لوگو، کد‌های
  //       نرم‌افزار، ساختار و نحوه بیان و تنظیم مطالب و محتوای موجود در سایت
  //       کارپایا و غیره است.  فورس ماژور: منظور از فورس ماژور، وقوع هرگونه حادثه
  //       خارجی، غیر قابل دفع و غیر قابل پیش‌بینی است که مستند به فعل یا ترک فعل
  //       هیچ‌ یک از طرفین (کارپایا و کاربر) نباشد. از جمله مصادیق آن می‌توان به
  //       سیل، زلزله، آتش‌سوزی، جنگ، اعتصاب، بیماری‌های واگیردار و یا حوادث دیگر
  //       اشاره نمود که موجب توقف در ارائه خدمات گردد یا به‌ رغم اعمال سعی و تلاش
  //       لازم، اجرای آن‌ها را به تاخير اندازد. ماده دو) شرایط عمومی استفاده از
  //       خدمات کارپایا: 1-2- به منظور دریافت خدمات کارپایا، کاربر می‌تواند از
  //       طریق هر یک از راه‌های سایت کارپایا، اپلیکیشن کارپایا و تماس با شماره
  //       پشتیبانی کارپایا (58919-021) نسبت به ثبت درخواست خود برابر با شرایط و
  //       مقررات این سند اقدام نماید. 2-2- طبق توافق کارپایا و دیوار، کاربر
  //       می‌تواند از طریق اپلیکیشن/سایت دیوار نیز درخواست کارشناسی خودرو را ثبت
  //       نماید. بنابراین امکان ثبت درخواست کارشناسی به وسیله اپلیکیشن/سایت دیوار
  //       به‌ هیچ‌ عنوان دلیل بر مسئولیت دیوار در خصوص خدمات کارپایا نیست. 3-2- به
  //       منظور استفاده از خدمات کارپایا، کاربر (شخص حقیقی) باید دارای اهلیت
  //       قانونی باشد. 4-2- کاربر باید گذرواژه‌ای را كه به صورت رمز یکبار مصرف
  //       (OTP: One-time Password) جهت استفاده از سایت کارپایا برای ایشان ارسال
  //       می‌شود، به صورت محرمانه حفظ نماید و آن را در اختیار دیگران قرار ندهد.
  //       5-2- کاربر با اعلام شماره همراه خود به کارپایا می‌پذیرد که کارپایا
  //       پیامک‌های اطلاع‌رسانی رویدادها، خدمات و سرویس‌های ویژه را برای وی ارسال
  //       نماید. در صورت تمایل، کاربر می‌تواند از طریق تماس با مرکز پشتیبانی
  //       کارپایا درخواست نماید که ارسال این پیامک‌ها به وی قطع شود. 6-2- بازدید
  //       حضوری از خودرو یا موتورسیکلت به هر جهتی اعم از کارشناسی یا بازرسی برای
  //       تعیین خسارت، فقط در محدوده جغرافیایی مشخص در سایت کارپایا انجام می‌شود و
  //       خارج از محدوده سرویس‌دهی، امکان ارائه خدمات توسط کارپایا وجود ندارد.
  //       7-2- کاربر متعهد است از اطلاعاتی که در نتیجه‌ استفاده از خدمات کارپایا
  //       کسب نموده است (مانند اطلاعات تماس کارشناس فنی، خریدار و فروشنده)، خارج
  //       از چارچوب کارپایا استفاده ننماید و همچنین در راستای حفاظت از داده‌ها و
  //       اطلاعات افراد، از ذخیره اطلاعات تماس افرادی که از طریق کارپایا به آن‌ها
  //       معرفی شده‌ و نیز برقراری ارتباط با ایشان خارج از چارچوب کارپایا، اجتناب
  //       نماید. 8-2- کاربر متعهد می‌شود که در خصوص خدمات کارپایا فقط با شرکت در
  //       ارتباط بوده و با کارشناسان فنی کارپایا و همچنین فروشندگان و خریدارانی که
  //       به واسطه خدمات کارپایا معرفی شده‌اند، به صورت جداگانه و مستقیم هیچ‌گونه
  //       ارتباطی برقرار نکند. همچنین بعد از اتمام فرایند خدمات، برقراری هرگونه
  //       ارتباط مستقیم با کارشناسان فنی به هر دلیلی مجاز نخواهد بود و ضروری است
  //       که کلیه ارتباطات از طریق کارپایا صورت پذیرد. در صورتی که کاربر خارج از
  //       مندرجات این سند با آن کارشناسان ارتباط برقرار کند و یا کاربر بخواهد
  //       کارپایا را از فرایند خدمات حذف کرده و مستقیماً اقدام به اتمام فرایند
  //       نماید، کارپایا مجاز و محق می‌باشد ضمن لغو خدمات، در صورت وجود مبلغ
  //       پرداخت شده توسط کاربر، آن را به عنوان خسارات قراردادی ضبط نماید. 9-2-
  //       پرداخت هرگونه وجهی مازاد بر مبلغ کارمزد اعلامی کارپایا، در هر قالبی اعم
  //       از هدیه، انعام، پاداش و امثال آن‌‌ها توسط کاربران به کارشناسان فنی یا
  //       دستیاران معامله ممنوع است. 10-2- هرگونه علامت، عدد، کلمه، تصویر یا نشان
  //       الکترونیک که مثبِت هویت امضا کننده باشد و به این سند یا سایر اسناد صادره
  //       در این زمینه ملحق شود، به منزله امضای الکترونیک و همانند امضای دست‌نویس
  //       دارای آثار حقوقی و واجد اعتبار است و امضا کننده را متعهد و ملتزم به مفاد
  //       سندی می‌نماید که به طرق مزبور امضا نموده است. ماده سه) حقوق و تعهدات
  //       عمومی کارپایا: 1-3- کارپایا متعهد به تلاش برای ارائه‌ خدمات با کیفیت است
  //       و در این راستا با به‌ روزرسانی ابزارها و روش‌ها متناسب با نیاز کاربران،
  //       سطح خدمات ارائه‌ شده به آنان را ارتقا می‌دهد. 2-3- کارپایا متعهد است
  //       کارشناسان فنی را برای انجام عملیات کارشناسی و سرویس دوره‌ای خودرو و
  //       همچنین کارشناسی موتورسیکلت اختصاص دهد که از دقت، تجربه و مهارت کافی
  //       برخوردار بوده و در حین بازدید از خودرو یا موتورسیکلت و انجام عملیات
  //       مربوطه از ابزارهای متناسب استفاده نماید. 3-3- کارپایا با تمام امکانات
  //       خود از جمله مرکز پشتیبانی، بازرسی، نظارت و میانجیگری، جهت جلب رضایت
  //       کاربران، رفع اختلافات ایجاد شده بین کاربران با افراد دیگر و ایجاد صلح و
  //       سازش مابین آن‌ها اقدام می‌نماید. 4-3- کارپایا محق است در هر زمانی شرایط
  //       و مقررات حاضر را تغییر دهد. استفاده کاربر از خدمات کارپایا، پس از هر بار
  //       تغییر در سند حاضر، به معنی اطلاع و پذیرش این تغییرات است. بنابراین کاربر
  //       با ثبت هر درخواست خود مبنی بر استفاده از خدمات کارپایا، اعلام می‌دارد که
  //       شرایط و قوانین حاضر را به صورت کامل و دقیق مطالعه نموده و پذیرفته و
  //       هرگونه اعتراض و یا ایراد آتی در خصوص بی اطلاعی و یا مخالفت با شرایط و
  //       مقررات کارپایا بی اعتبار است. ماده چهار) شرایط اختصاصی کارشناسی خودرو:
  //       1-4- کارشناسی خودرو به سه صورت ویژه، استاندارد و رنگ و بدنه توسط کارپایا
  //       ارائه می‌شود که درخواست هر یک پس از پرداخت کارمزد مربوطه توسط کاربر، ثبت
  //       و فقط برای خودرویی که مشخصات آن در درخواست کارشناسی درج شده، در محل
  //       کاربر یا مراکز معرفی شده، توسط کارشناسان فنی انجام می‌شود. 2-4- کاربر در
  //       هنگام ثبت درخواست کارشناسی از طرق پیش‌بینی شده، باید محل مورد نظر خود
  //       برای کارشناسی خودرو را به صورت دقیق مشخص و اعلام نماید. در صورت درخواست
  //       تغییر آدرس توسط کاربر، درخواست جدید محسوب شده و مبلغی به میزان دو میلیون
  //       ریال از کارمزد پرداخت شده ایشان کسر و مابقی مبلغ در قالب کد تخفیف به
  //       کاربر عودت داده می‌شود. بدیهی است اعزام کارشناس به آدرس جدید درخواستی،
  //       مستلزم پرداخت کارمزد و انجام هماهنگی مجدد است. 3-4- در صورت هرگونه
  //       مغایرت در اطلاعات پیامک ثبت نهایی درخواست کارشناسی خودرو مانند مغایرت در
  //       مشخصات خودرو و زمان کارشناسی، ضروری است که کاربر ظرف 15 دقیقه از ارسال
  //       پیامک، مغایرت در اطلاعات را به پشتیبانی کارپایا اعلام نماید. در غیر این
  //       صورت اطلاعات پیامک، مورد تأیید کاربر محسوب می‌شود و کارشناس فنی در زمان
  //       و تاریخ مندرج در پیامک در محل حضور خواهد داشت. 4-4- کاربر متعهد است
  //       حداقل ۳۰ دقیقه قبل از حضور کارشناس فنی در محل اعلامی جهت انجام کارشناسی
  //       خودرو، پاسخگوی تماس کارشناس فنی اعزامی باشد. 5-4- تاخیر در آغاز فرایند
  //       کارشناسی خودرو به دلایل غیر منتسب به کارشناس فنی مانند دیر رسیدن کاربر
  //       به محل مورد نظر برای انجام فرایند کارشناسی بر عهده کاربر است و موجب لغو
  //       درخواست کارشناسی می‌شود. 6-4- کاربر باید برای لغو نمودن کارشناسی خودرو
  //       حداقل ۲ ساعت پیش از ساعت تعیین شده، درخواست لغو را از طریق شماره تماس
  //       مرکز پشتیبانی به اطلاع کارپایا برساند. فقط در این صورت کل کارمزد پرداخت
  //       شده، به کاربر عودت داده می‌شود. در صورت عدم رعایت مهلت ۲ ساعته برای لغو
  //       درخواست کارشناسی خودرو و یا به هر دلیلی که کاربر موجب لغو آن درخواست
  //       شود، مبلغی به میزان دو میلیون ریال از کارمزد پرداخت شده کسر و مابقی مبلغ
  //       در قالب کد تخفیف به کاربر عودت داده می‌شود. 7-4- در صورت شروع فرایند
  //       کارشناسی و انصراف کاربر از ادامه فرایند، کارمزد پرداخت شده توسط کاربر
  //       قابل عودت به ایشان نمی‌باشد. 8-4- در صورتی که برای انجام عملیات کارشناسی
  //       در بازه زمانی توافق شده، اتفاقی حادث شود که مشمول عنوان فورس ماژور گردد،
  //       زمان کارشناسی مجدداً مورد توافق کارپایا و کاربر قرار خواهد گرفت. 9-4-
  //       کارشناسی فنی و بدنه خودرو منوط به حضور و همکاری کاربر و ارائه مدارک
  //       خودرو (اصل کارت/سند خودرو، مدارک شناسایی مالک و اصل بیمه‌نامه) می‌باشد.
  //       در صورتی که کاربر، مالک خودرو نباشد، حضور و همکاری مالک خودرو در هنگام
  //       کارشناسی فنی خودرو نیز ضروری است و در صورت روشن نشدن خودرو، عدم حضور
  //       مالک آن یا ارائه مدارک خودرو، با رویت شماره شاسی آن، فقط کارشناسی بدنه
  //       انجام می‌شود.  10-4- به منظور بررسی و کارشناسی، خودرو باید در مکان مناسب
  //       قرار گرفته باشد؛ به نحوی که اطراف خودرو از هر سمت حداقل یک متر فضای خالی
  //       باشد. همچنین باید شرایطی مانند خشک و تمیز بودن خودرو، نور مناسب محیط،
  //       قرار دادن خودرو در محل سرپوشیده هنگام بارندگی در زمان کارشناسی و غیره
  //       فراهم باشد. در غیر این صورت، کارشناسی بدنه خودرو امکان‌پذیر نمی‌باشد. در
  //       این صورت با رضایت مالک خودرو فقط می‌توان کارشناسی فنی انجام داد، ولی
  //       قیمت‌گذاری خودرو انجام نمی‌شود. کاربران می‌توانند جهت اطلاع کامل از
  //       شرایط خودرو برای کارشناسی، بلاگ «کارشناسی خودرو در چه شرایطی انجام می
  //       شود» را مطالعه نمایند. 11-4- کاربر متعهد است که شرایط لازم برای انجام
  //       فرایند کارشناسی خودرو را فراهم کند. در صورت فراهم نبودن شرایط، کارشناس
  //       فنی از زمان حضور در آدرس اعلامی کاربر در زمان توافق شده، ۱۵ دقیقه برای
  //       فراهم شدن شرایط لازم منتظر می‌ماند. در صورت فراهم نشدن شرایط بعد از این
  //       مدت، درخواست کارشناسی لغو شده و کارشناس فنی محل را ترک می‌‌کند. در این
  //       صورت مبلغی به میزان دو میلیون ریال از کارمزد پرداخت شده کاربر کسر و
  //       مابقی مبلغ در قالب کد تخفیف به کاربر عودت داده می‌شود. 12-4- در صورت
  //       اطلاع کاربر از عیوب و نواقص خودرو، ضروری است که به کارشناس فنی اطلاع دهد
  //       که فرایند کارشناسی سریع‌تر و دقیق‌تر انجام شود. 13-4- در کارشناسی ویژه،
  //       وضعیت بدنه، فنی و مکانیکی خودرو توسط کارشناس فنی بررسی می‌گردد و پس از
  //       اتمام فرایند کارشناسی، قیمت‌گذاری خودرو انجام می‌شود و در نهایت به منظور
  //       اطلاع کاربر از وضعیت سلامت خودرو، گزارش کارشناسی توسط کارشناس فنی صادر
  //       می‌گردد که آن گزارش ظرف مدت ۴۸ ساعت پس از تاریخ صدور معتبر است. 14-4- در
  //       کارشناسی استاندارد، وضعیت فنی و بدنه خودرو توسط کارشناس فنی بررسی
  //       می‌گردد و پس از اتمام فرایند کارشناسی، قیمت‌گذاری خودرو انجام می‌شود و
  //       در نهایت به منظور اطلاع کاربر از وضعیت سلامت خودرو، گزارش کارشناسی توسط
  //       کارشناس فنی صادر می‌گردد که آن گزارش ظرف مدت ۴۸ ساعت پس از تاریخ صدور
  //       معتبر است. 15-4- در صورتی که کاربر ظرف ۴۸ ساعت از زمان صدور گزارش
  //       کارشناسی ویژه و استاندارد، ادعایی مبنی بر مغایرت شرایط بدنه خودرو با
  //       گزارش کارشناس فنی را به مرکز پشتیبانی کارپایا اطلاع دهد، با ارسال کلیه
  //       مستندات و تصاویر مربوط به ادعای مذکور توسط کاربر، موضوع توسط بازرسان و
  //       کارشناسان فنی کارپایا بررسی می‌گردد. در صورت احراز مغایرت مورد ادعای
  //       کاربر توسط کارپایا، خسارت وارده به کاربر مطابق با مبلغ برآورد شده توسط
  //       کارشناسان فنی کارپایا با دریافت رضایت‌نامه از کاربر، در وجه وی پرداخت
  //       می‌گردد. در این مورد سقف خسارت قابل پرداخت به کاربر، در کارشناسی
  //       استاندارد مبلغ دو و نیم میلیارد ریال معادل دویست و پنجاه میلیون تومان و
  //       در کارشناسی ویژه مبلغ پنج میلیارد ریال معادل پانصد میلیون تومان می‌باشد.
  //       ادعای مغایرت شرایط فنی خودرو با گزارش کارشناسی، مشمول ضمانت 48 ساعته
  //       مندرج در این ماده نمی‌باشد. 16-4- هرگونه تغییر و یا تعمیر خودرو پس از
  //       کارشناسی کارپایا، مانع مطالبه خسارات توسط کاربر می‌باشد. 17-4- در
  //       کارشناسی رنگ و بدنه خودرو، فقط وضعیت بدنه خودرو توسط کارشناس فنی بررسی
  //       می‌گردد و پس از اتمام فرایند، به منظور اطلاع کاربر از وضعیت سلامت بدنه
  //       خودرو، گزارش کارشناسی توسط کارشناس فنی صادر می‌شود که این گزارش کارشناسی
  //       بر خلاف کارشناسی ویژه و استاندارد، مشمول ضمانت کارپایا نمی‌باشد. 18-4-
  //       در صورت فراهم نبودن شرایط مناسب برای انجام کارشناسی و یا عدم اجازه کاربر
  //       به منظور بررسی هر یک از موارد قابل بررسی در خودرو، مورد مذکور به دلیل
  //       عدم بررسی از سوی کارشناس فنی، خارج از هرگونه ضمانت و مسئولیت کارپایا
  //       قرار می‌گیرد. 19-4- هرگونه گزارش کارشناسی یا بیان اطلاعات به صورت شفاهی
  //       از جانب کارشناسان فنی به کاربر فاقد اعتبار بوده و در برابر کارپایا قابل
  //       استناد نخواهد بود و گزارش کارپایا صرفاً در صورتی مورد تایید و قابل
  //       استناد در برابر کارپایا است که لینک گزارش کارشناسی برای کاربر ارسال
  //       گردد. در غیر این صورت هیچ‌گونه مسئولیتی متوجه کارپایا نخواهد بود. 20-4-
  //       کاربر درخواست‌دهنده خدمات کارشناسی می‌تواند در حین کارشناسی، درخواست خود
  //       مبنی بر تنظیم و انعقاد قرارداد خرید و فروش خودرو را اعلام و کارمزد
  //       مربوطه را از طریق پیش‌بینی شده پرداخت نماید که در این صورت اقدامات لازم
  //       جهت انعقاد قرارداد مابین فروشنده و خریدار خودروی موضوع کارشناسی توسط
  //       کارشناسان مربوطه انجام می‌شود. کارشناس فنی برای ثبت درخواست تنظیم و
  //       انعقاد قرارداد خرید و فروش خودرو توسط کاربر حداکثر 30 دقیقه پس از اتمام
  //       فرایند کارشناسی منتظر می‌ماند و در صورت عدم اقدام کاربر، محل کارشناسی را
  //       ترک می‌کند. 21-4- کارپایا با هدف فراهم نمودن شرایط مطلوب برای معامله
  //       خودرو، اطلاعات گزارش کارشناسی خودرو را ذخیره و جمع‌آوری می‌نماید و از
  //       طریق سایت خود یا سایت دیوار به خریداران خودرو که متقاضی مشاهده گزارش
  //       کارشناسی هستند، نمایش می‌دهد و کاربر درخواست‌دهنده برای کارشناسی خودرو
  //       با رضایت به این مورد نسبت به ثبت درخواست خود اقدام می‌نماید. 22-4- در
  //       صورتی که مالک اقدام به ثبت درخواست کارشناسی خودرو می‌نماید، با آگاهی از
  //       بند بالا به جهت شفافیت در معامله خودرو نسبت به ارائه گزارش کارشناسی و
  //       اطلاعات خودروی خود به خریداران احتمالی اعلام رضایت کرده و به همین علت
  //       ایراد عدم آگاهی و ضرر و زیان در معامله آن خودرو مورد پذیرش نمی‌باشد. .
  //       ماده پنج) شرایط اختصاصی مشاهده گزارش کارشناسی خودرو: 1-5- کارپایا با هدف
  //       فراهم نمودن شرایط مطلوب برای خرید و فروش خودرو، در سایت خود یا آگهی‌های
  //       سایت دیوار برای معامله خودرو، گزارش کارشناسی مربوطه را به متقاضیان ارائه
  //       می‌دهد. 2-5- با توجه به اینکه ممکن است وضعیت خودرو پس از انجام کارشناسی
  //       و ثبت گزارش کارشناسی تغییر کند و متقاضی مشاهده گزارش کارشناسی خودرو، ضمن
  //       مشاهده تاریخ انجام کارشناسی کارپایا نسبت به پرداخت کارمزد مشخص اقدام
  //       می‌نماید، بنابراین ایراد عدم آگاهی و مغایرت وضعیت خودرو با گزارش
  //       کارشناسی مورد پذیرش نمی‌باشد. 3-5- همچنین با توجه به احتمال تغییر وضعیت
  //       خودرو پس از انجام کارشناسی و ثبت گزارش کارشناسی، گزارش کارشناسی خودرو که
  //       به متقاضی مشاهده آن ارائه می‌شود، فاقد ضمانت کارپایا می‌باشد. ماده شش)
  //       شرایط اختصاصی کارشناسی موتورسیکلت: 1-6- کاربر می‌تواند درخواست کارشناسی
  //       موتورسیکلت را از روش‌های پیش‌‌بینی شده و با پرداخت کارمزد مربوطه ثبت
  //       نماید و کارشناسی فقط برای موتورسیکلتی که مشخصات آن در درخواست کارشناسی
  //       درج شده، در محل کاربر توسط کارشناسان فنی انجام می‌شود. 2-6- کاربر در
  //       هنگام ثبت درخواست کارشناسی موتورسیکلت، باید محل مورد نظر خود برای
  //       کارشناسی را به صورت دقیق مشخص و اعلام نماید. در صورت درخواست تغییر آدرس
  //       توسط کاربر، درخواست جدید محسوب شده و مبلغی به میزان دو میلیون ریال از
  //       کارمزد پرداخت شده ایشان کسر و مابقی مبلغ در قالب کد تخفیف به کاربر عودت
  //       داده می‌شود. بدیهی است اعزام کارشناس به آدرس جدید درخواستی، مستلزم
  //       پرداخت کارمزد و انجام هماهنگی مجدد است. 3-6- در صورت هرگونه مغایرت در
  //       اطلاعات پیامک ثبت نهایی درخواست کارشناسی موتورسیکلت مانند مغایرت در
  //       مشخصات موتورسیکلت و زمان کارشناسی، ضروری است که کاربر ظرف 15 دقیقه از
  //       ارسال پیامک، مغایرت در اطلاعات را به پشتیبانی کارپایا اعلام نماید. در
  //       غیر این صورت اطلاعات پیامک، مورد تأیید کاربر محسوب می‌شود و کارشناس فنی
  //       در زمان و تاریخ مندرج در پیامک در محل حضور خواهد داشت. 4-6- کاربر متعهد
  //       است حداقل ۳۰ دقیقه قبل از حضور کارشناس فنی در محل اعلامی جهت انجام
  //       کارشناسی موتورسیکلت، پاسخگوی تماس کارشناس فنی اعزامی باشد. 5-6- تاخیر در
  //       آغاز فرایند کارشناسی موتورسیکلت به دلایل غیر منتسب به کارشناس فنی مانند
  //       دیر رسیدن کاربر به محل مورد نظر برای انجام فرایند کارشناسی بر عهده کاربر
  //       است و موجب لغو درخواست کارشناسی می‌شود. 6-6- کاربر باید برای لغو نمودن
  //       کارشناسی موتورسیکلت حداقل ۲ ساعت پیش از ساعت تعیین شده، درخواست لغو را
  //       از طریق شماره تماس مرکز پشتیبانی به اطلاع کارپایا برساند. فقط در این
  //       صورت کل کارمزد پرداخت شده، به کاربر عودت داده می‌شود. در صورت عدم رعایت
  //       مهلت ۲ ساعته برای لغو درخواست کارشناسی موتورسیکلت و یا به هر دلیلی که
  //       کاربر موجب لغو آن درخواست شود، مبلغی به میزان دو میلیون ریال از کارمزد
  //       پرداخت شده کسر و مابقی مبلغ در قالب کد تخفیف به کاربر عودت داده می‌شود.
  //       7-6- در صورت شروع فرایند کارشناسی موتورسیکلت و انصراف کاربر از ادامه
  //       فرایند، کارمزد پرداخت شده توسط کاربر قابل عودت به ایشان نمی‌باشد. 8-6-
  //       در صورتی که برای انجام عملیات کارشناسی در بازه زمانی توافق شده، اتفاقی
  //       حادث شود که مشمول عنوان فورس ماژور گردد، زمان کارشناسی مجدداً مورد توافق
  //       کارپایا و کاربر قرار خواهد گرفت. 9-6- کارشناسی فنی و بدنه موتورسیکلت
  //       منوط به حضور و همکاری کاربر و ارائه مدارک موتورسیکلت (اصل کارت/سند
  //       موتورسیکلت، مدارک شناسایی مالک و اصل بیمه‌نامه) می‌باشد. در صورتی که
  //       کاربر، مالک موتورسیکلت نباشد، حضور و همکاری مالک آن در هنگام کارشناسی
  //       فنی موتورسیکلت نیز ضروری است و در صورت روشن نشدن موتورسیکلت، عدم حضور
  //       مالک آن یا ارائه مدارک موتورسیکلت، با رویت شماره شاسی آن فقط کارشناسی
  //       بدنه انجام می‌شود. 10-6- به منظور بررسی و کارشناسی، موتورسیکلت باید در
  //       مکان مناسب قرار گرفته باشد؛ به نحوی که اطراف موتورسیکلت از هر سمت حداقل
  //       یک متر فضای خالی باشد. همچنین باید شرایطی مانند خشک و تمیز و عاری از
  //       هرگونه گرد و غبار بودن موتورسیکلت، نور مناسب محیط، قرار دادن موتورسیکلت
  //       در محل سرپوشیده هنگام بارندگی در زمان کارشناسی و غیره فراهم باشد. در غیر
  //       این صورت کارشناسی بدنه موتورسیکلت امکان‌پذیر نمی‌باشد و با رضایت مالک
  //       موتورسیکلت فقط می‌توان کارشناسی فنی انجام داد، ولی قیمت‌گذاری موتورسیکلت
  //       انجام نمی‌شود. شرایط کارشناسی موتورسیکلت مشابه کارشناسی خودرو است و
  //       کاربران می‌توانند جهت اطلاع کامل از آن شرایط، بلاگ «کارشناسی خودرو در چه
  //       شرایطی انجام می شود» را مطالعه نمایند. 11-6- کاربر متعهد است که شرایط
  //       لازم برای انجام فرایند کارشناسی موتورسیکلت را فراهم کند. در صورت فراهم
  //       نبودن شرایط، کارشناس فنی از زمان حضور در آدرس اعلامی کاربر در زمان توافق
  //       شده، ۱۵ دقیقه برای فراهم شدن شرایط لازم منتظر می‌ماند. در صورت فراهم
  //       نشدن شرایط بعد از این مدت، درخواست کارشناسی لغو شده و کارشناس فنی محل را
  //       ترک می‌‌کند. در این صورت مبلغی به میزان دو میلیون ریال از کارمزد پرداخت
  //       شده کاربر کسر و مابقی مبلغ در قالب کد تخفیف به کاربر عودت داده می‌شود.
  //       12-6- در صورت اطلاع کاربر از عیوب و نواقص موتورسیکلت، ضروری است که به
  //       کارشناس فنی اطلاع دهد که فرایند کارشناسی سریع‌تر و دقیق‌تر انجام شود.
  //       13-6- در کارشناسی موتورسیکلت وضعیت فنی و بدنه موتورسیکلت توسط کارشناس
  //       فنی بررسی می‌گردد و پس از اتمام فرایند کارشناسی، قیمت‌گذاری موتورسیکلت
  //       انجام می‌شود و در نهایت به منظور اطلاع کاربر از وضعیت سلامت موتورسیکلت،
  //       گزارش کارشناسی توسط کارشناس فنی صادر می‌گردد که آن گزارش ظرف 24 ساعت پس
  //       از تاریخ صدور در حدود شرایط مندرج در آن معتبر است. 14-6- در صورتی که
  //       کاربر ظرف 24 ساعت از زمان صدور گزارش کارشناسی موتورسیکلت، ادعایی مبنی بر
  //       مغایرت شرایط بدنه موتورسیکلت با گزارش کارشناس فنی را به مرکز پشتیبانی
  //       کارپایا اطلاع دهد، با ارسال کلیه مستندات و تصاویر مربوط به ادعای مذکور
  //       توسط کاربر، موضوع توسط بازرسان و کارشناسان فنی کارپایا بررسی می‌گردد. در
  //       صورت احراز مغایرت مورد ادعای کاربر توسط کارپایا، خسارت وارده به کاربر
  //       مطابق با مبلغ برآورد شده توسط کارشناسان فنی کارپایا با دریافت رضایت‌نامه
  //       از کاربر، در وجه وی پرداخت می‌گردد. در این مورد سقف خسارت قابل پرداخت به
  //       کاربر، مبلغ پانصد میلیون ریال معادل پنجاه میلیون تومان می‌باشد. ادعای
  //       مغایرت شرایط فنی موتورسیکلت با گزارش کارشناسی، مشمول ضمانت 24 ساعته
  //       مندرج در این ماده نمی‌باشد. 15-6- صرفاً اعلام مغایرت توسط کاربر در بدنه
  //       موتورسیکلت با گزارش کارشناسی قابل بررسی و در صورت احراز، مشمول پرداخت
  //       خسارت تا سقف مندرج در بند فوق است و وضعیت فنی و اقلام مصرفی موتورسیکلت
  //       مانند لنت ترمز،‌ روغن ترمز، فیلترها و لاستیک را در برنمی‌گیرد. 16-6- در
  //       صورت فراهم نبودن شرایط مناسب برای انجام کارشناسی و یا عدم اجازه کاربر به
  //       منظور بررسی هر یک از موارد قابل بررسی در موتورسیکلت، مورد مذکور به دلیل
  //       عدم بررسی از سوی کارشناس فنی، خارج از هرگونه ضمانت و مسئولیت قرار
  //       می‌گیرد. 17-6- هرگونه تغییر و یا تعمیر موتورسیکلت پس از کارشناسی
  //       کارپایا، مانع مطالبه خسارات توسط کاربر می‌باشد. 18-4- هرگونه گزارش
  //       کارشناسی یا بیان اطلاعات به صورت شفاهی از جانب کارشناسان فنی به کاربر
  //       فاقد اعتبار بوده و در برابر کارپایا قابل استناد نخواهد بود. گزارش
  //       کارشناسی کارپایا صرفاً در صورتی مورد تایید و قابل استناد در برابر
  //       کارپایا است که به صورت مکتوب در اوراق تخصیص یافته از سوی کارپایا با
  //       رعایت شرایط مندرج در آن اوراق تنظیم شود. در غیر این صورت هیچ‌گونه
  //       مسئولیتی متوجه کارپایا نخواهد بود. ماده ده) خدمات آنلاین کارپایا: 1-10-
  //       کاربر می‌تواند از طریق سایت کارپایا با وارد نمودن مندرجات لازم و کارمزد
  //       مربوطه، اقدام به تهیه فایل مبایعه‌نامه خودرو/موتورسیکلت نماید که در آن
  //       مبایعه‌نامه ریسک‌های احتمالی فروشنده و خریدار پوشش داده شده و برای هر یک
  //       ضمانت اجرای مناسبی پیش‌بینی شده است. در این خدمات، تکمیل مبایعه‌نامه و
  //       پیگیری و انجام فرایند معامله توسط کارپایا انجام نمی‌شود. 2-10- کاربر
  //       می‌تواند از طریق سایت کارپایا با وارد نمودن مندرجات لازم و کارمزد
  //       مربوطه، اقدام به تهیه گزارش تخمین قیمت خودرو کارکرده نماید که آن گزارش
  //       با استفاده از موتور قیمت‌گذاری کارپایا بر اساس معیارهای مختلف مانند
  //       آگهی‌ها و معاملات اخیر خودرو، تهیه و ارائه می‌شود. 3-10- کاربر می‌تواند
  //       از طریق سایت کارپایا با وارد نمودن مندرجات لازم و کارمزد مربوطه، اقدام
  //       به تهیه گزارش قیمت خودروی مدنظر خود نماید که بر اساس آگهی‌ها و معاملات
  //       اخیر خودرو تهیه و ارائه می‌شود. 4-10- کاربر می‌تواند از طریق سایت
  //       کارپایا با وارد نمودن مندرجات لازم و کارمزد مربوطه، اقدام به استعلام
  //       سوابق و اصالت خودروی مدنظر خود نماید که با استفاده از اطلاعات مراجع
  //       مربوطه تهیه و ارائه می‌شود. ماده یازده) حدود مسئولیت کارپایا: 1-11- در
  //       صورتی که کاربر درخواست‌دهنده خدمات کارشناسی، مالک موضوع کارشناسی نباشد،
  //       مسئولیت هرگونه هماهنگی لازم بر عهده کاربر است و کارپایا مسئولیتی در این
  //       خصوص نداشته است. 2-11- کارشناس فنی فقط در زمینه سلامت فنی و بدنه موضوع
  //       کارشناسی اقدام به بررسی و اعلام نظر می‌نماید؛ بنابراین مسئولیت تشخیص
  //       اصالت و تطبیق شماره شاسی و تعویضی بودن موتور موضوع کارشناسی بر عهده
  //       کارشناسان راهنمایی‌ و رانندگی مستقر در مراکز تعویض پلاک می‌باشد و
  //       کارپایا در این زمینه هیچ‌گونه مسئولیتی بر عهده ندارد. در صورت معامله
  //       خودرو به واسطه دستیار معامله کارپایا و متعاقباً عدم تایید اصالت خودرو در
  //       آن مراکز، کارمزد کارپایا قابل عودت به خریدار خودرو می‌باشد. 3-11-
  //       کارپایا در قبال آن دسته از ایرادات و عیوب موضوع کارشناسی که قابل رویت
  //       توسط کارشناس فنی نمی‌باشند؛ مانند مواد غیر استاندارد در روغن موتور یا
  //       گیربکس و قسمت‌هایی که برای کارشناسی و تشخیص عیوب، نیاز به باز کردن
  //       لوازم، کاور، فلاپ‌، پیچ و پرچ دارند؛ مانند ایراد در زیر شاسی، ایراد در
  //       کفی صندوق‌هایی که کف‌پوش آن‌ها پیچ و یا پرچ شده است، مسئولیتی بر عهده
  //       ندارد. همچنین کارپایا در خصوص مواردی که توسط کاربر قابل رویت است مانند
  //       خط‌ و خش بدنه و ایرادات مربوط به آج لاستیک، مسئولیتی بر عهده ندارد.
  //       4-11- در هرگونه کارشناسی خودرو/موتورسیکلت، کارشناس فنی فقط عملکرد
  //       سیستم‌های فنی و امکانات (آپشن‌ها) را ارزیابی می‌کند و بررسی مواردی از
  //       قبیل فول و یا نیمه‌ فول بودن آپشن‌ها، وجود قطعات یا لوازم دست‌ دوم
  //       (استوک) یا غیر اصل به جای قطعات اصلی و مواردی از این قبیل خارج از تعهدات
  //       و حدود مسئولیت کارپایا است. 5-11- کارپایا مسئولیتی در خصوص عیوب بدون
  //       تأثیر در قیمت خودرو/موتورسیکلت، نداشته است و هرگونه تعویض، تعمیر یا
  //       رنگ‌شدگی سپرها، جلوپنجره، آینه بغل‌ها، چراغ‌ها و سینی فن که طبق عرف
  //       تاثیری در افت قیمت خودرو ندارند، در حدود مسئولیت کارپایا نیست و اعلام
  //       نکردن آن عیوب توسط کارشناس فنی فاقد ایراد است. 6-11- هرگونه تست رانندگی
  //       موضوع کارشناسی فقط با اجازه کاربر و در صورتی که به تشخیص کارشناس فنی،
  //       شرایط زمانی و مکانی مساعد باشد، انجام خواهد گرفت. برای انجام تست رانندگی
  //       توسط کارشناس فنی، موضوع کارشناسی باید دارای بیمه‌نامه شخص ثالث معتبر
  //       بوده و به صورت فیزیکی یا آنلاین به رویت کارشناس فنی برسد. همچنین حضور
  //       مالک در خودرو، حین انجام تست رانندگی الزامی است. در صورت جمع شرایط فوق،
  //       خودرو حداکثر تا دنده سه و تا سرعت 60 کیلومتر بر ساعت تست می‌شود و نتیجه‌
  //       بررسی فنی در گزارش کارشناسی درج می‌گردد. 7-11- کارشناسی کارپایا ممکن است
  //       تحت تأثیر آب‌ و هوا، شرایط نور و تمیزی داخل خودرو و بدنه موضوع کارشناسی
  //       در زمان کارشناسی قرار بگیرد. این عوامل که از کنترل کارشناس فنی خارج است،
  //       می‌‌تواند دقت کارشناسی را کاهش داده و تشخیص مواردی مانند رنگ‌شدگی را
  //       برای چشم غیر مسلح سخت کند. بدین منظور برای جلوگیری از بروز خطاهای
  //       احتمالی و از آنجایی که ایجاد شرایط مطلوب کارشناسی بر عهده کاربر است،
  //       ضروری می‌باشد کاربر قبل از ثبت درخواست کارشناسی، ابتدا با مالک موضوع
  //       کارشناسی در خصوص شست و شوی آن، خشک و تمیز بودن بدنه، قرار دادن آن در
  //       مکانی که اطراف موضوع کارشناسی از هر سمت حداقل یک متر خالی باشد و فراهم
  //       کردن محیطی امن و به دور از آفتاب مستقیم و بارش برف و باران و دارای نور
  //       مناسب هماهنگی نماید. همچنین کارشناسی در شب فقط در صورت وجود نور کافی
  //       برای انجام عملیات کارشناسی، صورت خواهد گرفت. در صورت عدم تحقق شرایط
  //       مذکور، کارشناسی لغو می‌گردد. 8-11- مسئولیت صحت اطلاعات اعلامی اعم از مدل
  //       و تیپ موضوع کارشناسی و غیره به صورت آنلاین با کاربر است و کارپایا در این
  //       زمینه مسئولیتی نخواهد داشت. همچنین کارپایا امکان تغییر هیچ یک از اطلاعات
  //       وارد شده توسط کاربر را ندارد. 9-11- هرگونه کارشناسی کارپایا به منظور
  //       تشخیص عیوب خودرو/موتورسیکلت است و تعیین هزینه رفع عیوب مذکور بر عهده
  //       کارشناس فنی نیست. همچنین کارپایا نسبت به قیمت موضوع کارشناسی، اختلافات
  //       قضایی مربوط به آن، مخدوش بودن پلاک (تقلب در پلاک)، تغییر کارکرد موضوع
  //       کارشناسی (ملاک درج و ثبت کارکرد توسط کارشناس فنی، فقط عدد کیلومتر شمار
  //       خودرو/موتورسیکلت می‌باشد) و مشکلات حقوقی سند موضوع کارشناسی در خصوص نقل‌
  //       انتقال مالکیت، ممنوع‌ المعامله بودن موضوع کارشناسی یا مالک آن و امثال
  //       آن‌ها، مسئولیتی ندارد و کاربر، کارپایا را از هرگونه ادعایی (اعم از حقوقی
  //       و کیفری) مبری دانسته و حق هرگونه شکایت در این خصوص را از خود سلب و ساقط
  //       نمود. 10-11- هرگونه قیمت‌گذاری خودرو/موتورسیکلت توسط کارپایا صرفاً با
  //       توجه به شرایط و وضعیت بدنه خودرو/موتورسیکلت انجام می‌شود و در واقع در
  //       قیمت‌گذاری، وضعیت فنی و مکانیکی آن به صورت سالم فرض می‌شود. همچنین
  //       هرگونه اعلام قیمت، فقط در صورت انجام عملیات کارشناسی به صورت کامل،
  //       امکان‌پذیر است و در شرایطی که به هر دلیلی عملیات کارشناسی به صورت ناقص
  //       انجام شود و یا در کارشناسی رنگ و بدنه خودرو، کارپایا امکان قیمت‌گذاری را
  //       نخواهد داشت. 11-11- هرگونه اعلام قیمت خودرو/موتورسیکلت توسط کارپایا،
  //       صرفاً به صورت مشاوره بوده و مسئولیتی در خصوص قیمت نهایی معامله آن و یا
  //       عدم انجام معامله، متوجه کارپایا نخواهد بود. 12-11- کارپایا در مورد
  //       مشکلات احتمالی مابین خریدار و فروشنده پس از امضای مبایعه‌نامه (مانند عدم
  //       انتقال خودرو/موتورسیکلت توسط فروشنده و یا عدم پرداخت مبلغ مبایعه‌نامه
  //       توسط خریدار) مسئولیتی ندارد. 13-11- کاربر حق هرگونه ادعا و اعتراض در
  //       خصوص موارد موضوع این ماده را از خود سلب و ساقط نموده است. ماده دوازده)
  //       مالکیت دارایی‌های فکری: کلیه حقوق مادی و معنوی متصور در خصوص دارایی‌های
  //       فکری انحصاراً در مالکیت کارپایا بوده و حق انحصاری بهره‌برداری از آن
  //       متعلق به کارپایا است و استفاده از خدمات کارپایا، هیچ‌گونه حق مالکیت مادی
  //       و معنوی برای کاربر به وجود نمی‌آورد. هرگونه نقض این مالکیت از قبیل
  //       استفاده از علامت، استفاده از نام و عنوان اثر و سایر حقوق، حسب مورد موجب
  //       طرح دعوای حقوقی و کیفری خواهد بود. ماده سیزده) مرجع حل اختلاف: در صورت
  //       بروز هرگونه اختلاف فیمابین کاربر و کارپایا، طرفین حتی الامکان موضوع را
  //       از طریق مذاکره حل و فصل می‌نمایند. در این خصوص کاربر متعهد به همکاری با
  //       کارپایا و ارائه اطلاعات لازم و عنداللزوم حضور در جلسات حضوری یا آنلاین
  //       می‌باشد. در صورت عدم حصول توافق از این طریق، هر یک از طرفین مختار خواهد
  //       بود که به مراجع قضایی شهر تهران مراجعه نماید. ماده چهارده) سایر شرایط:
  //       1-14- سوءاستفاده از خدمات کارپایا به هر شکل، سوءاستفاده از اختلال خدمات،
  //       استفاده از برنامه‌های مخرب و جاسوسی، تبانی به منظور اخذ خسارت و یا عودت
  //       هزینه کارشناسی، استفاده از ربات‌ها و هر نوع روش مخرب برای دسترسی به
  //       اطلاعات سایت و محتویات آن از طریق هر سیستم و شبکه، ایجاد اختلال و تحمیل
  //       بار اضافی به هر یک از سرویس‌ها و سرورهای کارپایا ممنوع است و کارپایا در
  //       صورت مشاهده چنین فعالیت‌هایی از راه‌های قانونی، مورد را پیگیری می‌کند.
  //       تأخیر در پیگیری موارد حاضر، به معنی انصراف از احقاق حقوق کارپایا نیست و
  //       کارپایا در هر زمان می‌تواند موارد مذکور در این بند را پیگیری و اقدامات
  //       لازم را به منظور احقاق حقوق خویش برابر با قانون انجام دهد. 2-14- اگر
  //       بخشی از مفاد، شرایط، حقوق یا تعهدات مندرج در این سند نامعتبر، غیر قانونی
  //       یا غیر قابل اجرا شود یا به واسطه مقررات قانونی و ضوابط حاکم، اجرای بخشی
  //       از سند حاضر ناممکن گردد، تنها همان بخش از مفاد سند نامعتبر، غیر قانونی،
  //       غیر قابل اجرا و ناممکن شده و با امکان قابلیت تفکیک در مفاد آن، سایر
  //       بخش‌های سند مانند قبل قابل الاجرا است. 3-14- عدم اعمال یا تاخیر در اعمال
  //       هر یک از حقوق و اختیارات مندرج در این سند، تحت هیچ عنوانی به منزله
  //       انصراف از آن حقوق یا اختیارات و همچنین اعمال برخی از حقوق و اختیارات به
  //       منزله انصراف از سایر حقوق و اختیارات تلقی نمی‌گردد و کارپایا می‌تواند هر
  //       زمان مطابق با مندرجات این سند، حقوق و اختیارات خود را اعمال نماید. ماده
  //       پانزده) تغییرات سند حاضر: 1-15- محتوای این سند دائمی نیست و ممکن است
  //       مطابق شرایط و اوضاع‌ و احوال و صلاحدید کارپایا تغییر کند. کاربر می‌تواند
  //       با مراجعه به سایت کارپایا از آخرین نسخه این سند آگاهی یابد. بدیهی است
  //       ادامه استفاده کاربر از کارپایا به منزله پذیرش این تغییرات است. در صورت
  //       عدم موافقت کاربر با شرایط استفاده جدید، وی باید به استفاده‌ خود پایان
  //       دهد و بدین ترتیب عدم موافقت خود را اعلام نماید. 2-15- کاربران تصدیق
  //       می‌نمایند که «شرایط و مقررات استفاده از خدمات کارپایا» را به‌ طور کامل
  //       مطالعه نموده، از مفاد و شرایط آن آگاهی کامل داشته و نسبت به اعمال تمامی
  //       این شرایط رضایت دارند و نسبت به مفاد آن ملتزم می‌باشند. 3-15- در مواردی
  //       که شرایط و مقررات حاضر، صراحتاً یا ضمناً حاوی حکمی نباشد، مراتب تابع عرف
  //       رایج در این صنعت می‌باشد.
  //     </p>
  //     <p className="text-[#F66B34] text-lg text-center my-6">
  //       شرایط استفاده از سامانه خرید باتری کارپایا
  //     </p>
  //     <p className="text-justify">
  //        خدمات تحویل در محل فقط برای استان تهران توسط کارپایا ارائه می‌شود. 
  //       تحویل باتری فرسوده با آمپر برابر باتری خریداری‌شده الزامی است. در صورت
  //       تفاوت آمپر، هزینه اضافی به عهده مشتری است.  در صورت عدم تطابق آمپر
  //       باتری قدیمی و جدید، هزینه اضافی در مرکز کارپایا از مشتری دریافت می‌شود.
  //        اگر مشکلی در تولید یا تحویل باتری از سوی شرکت تأمین‌کننده ایجاد شود،
  //       کارپایا و مشتری مسئولیتی ندارند و مبلغ پرداختی کامل بازگردانده می‌شود. 
  //       در صورت عدم مراجعه تا ۷ روز پس از تحویل، با کسر ۵٪ از مبلغ کالا،
  //       باقیمانده به کیف پول حساب کاربری شما در کارپایا واریز می‌شود.  هزینه
  //       تست و تعویض باتری در کارپایا رایگان است.  بازگشت وجه در صورت خرید
  //       اشتباه امکان‌پذیر نیست، لطفاً در خرید خود دقت کنید.  اگر تامین کالا
  //       توسط تأمین‌کنندگان انجام نشود، مبلغ پرداختی به کیف پول حساب کاربری شما
  //       در کارپایا بازگردانده خواهد شد.
  //     </p>
  //   </div>
  // );
};

export default Ruls;
