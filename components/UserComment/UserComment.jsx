import React from "react";
import StarRating from "@/components/StarRating";
import ProfileEditeInput from "@/components/ProfileEditeInput/ProfileEditeInput";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button";
import Image from "next/image";

const fakeArray = [0, 0, 0, 0];

const UserComment = () => {
  return (
    <div className={"flex-1 flex flex-col"}>
      <form>
        <section className={"flex items-center justify-between"}>
          <p className={"text-[22px]"}>دیدگاهتان را بنویسید</p>
          <div className={"flex items-center gap-1"}>
            <StarRating size={23} />
            <span className={"text-[#aaa] text-[12px]"}>امتیاز دهید</span>
          </div>
        </section>
        <section className={"mt-[26px]"}>
          <TextArea
            rows={8}
            title={"اولین نفری باشید که نظر میدهید!"}
            className={"p-2"}
          />
        </section>
        <section className={"mt-[24px] flex justify-between gap-[33px]"}>
          <div className={"flex-1"}>
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"ایمیل"}
              // value={name}
              name={"name"}
              id={"name"}
            />
          </div>
          <div className={"flex-1"}>
            <ProfileEditeInput
              icon={"dt-user-o"}
              className={"pr-[4px]"}
              title={"نام کاربری"}
              // value={name}
              name={"name"}
              id={"name"}
            />
          </div>
          <Button
            class_name={
              "flex items-center justify-center gap-2 border border-[#354597] text-[#354597] px-[10px] rounded-5 w-[174px] h-[48px]"
            }
          >
            <i className={"cc-messages text-[24px]"} />
            <span>ثبت نظر</span>
          </Button>
        </section>
      </form>
      <div className={"mt-[40px]"}>
        <div className={"flex items-center justify-between mb-[16px]"}>
          <span className={"text-[22px]"}>نظرات</span>
          <div className={"text-[#5E5E5E] text-[14px]"}>
            <span>3</span>
            <span>دیدگاه</span>
          </div>
        </div>
        <div className={"flex flex-col gap-[16px]"}>
          {fakeArray.map((item, index) => (
            <section
              key={index}
              className={"bg-[#FFFFFF] shadow p-[16px] rounded-[5px]"}
            >
              <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-[16px]"}>
                  <div>
                    <i
                      className={
                        "cc-user bg-[#D9DDF2] text-[48px] text-white rounded-full"
                      }
                    />
                  </div>
                  <span className={"text-[#354597]"}>شیدا</span>
                </div>
                <div
                  className={
                    "flex items-center gap-[16px] text-[#A5A0A0] text-[14px]"
                  }
                >
                  <span>14:31</span>
                  <span>1402/10/10</span>
                </div>
              </div>
              <div className={"px-[64px]"}>
                <p
                  className={
                    "text-[14px] leading-7 text-[#303030] text-justify"
                  }
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <div
                  className={
                    "flex items-center gap-[8px] text-[14px] text-[#303030]"
                  }
                >
                  <Image
                    src={"/assets/icons/undo.svg"}
                    alt={"icon"}
                    width={24}
                    height={24}
                    className={"self-start mt-1"}
                  />
                  <span className={"self-start mt-1"}>پاسخ:</span>
                  <p className={"leading-7 text-justify"}>
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                  </p>
                </div>
              </div>
              <div
                className={
                  "flex flex-row-reverse items-center gap-[31px] mt-[16px]"
                }
              >
                <div className={"flex items-center gap-[9px] text-[#E73C33]"}>
                  <span className={"inline-block"}>1</span>
                  <div
                    className={
                      "flex items-center justify-center cursor-pointer"
                    }
                  >
                    <i className={"cc-dislike text-[26px]"} />
                  </div>
                </div>
                <div className={"flex items-center gap-[9px] text-[#5EB35C]"}>
                  <span>0</span>
                  <div
                    className={
                      "rotate-[180deg] flex items-center cursor-pointer"
                    }
                  >
                    <i className={"cc-dislike text-[26px]"} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserComment;
