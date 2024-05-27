import React from "react";
import MapSelection from "@/components/MapSelection";
import SelectSearchInput from "@/components/vehicle-verification/SelectSearchInput";

const AddAddressModal = (props) => {
  const { setModalIsOpen } = props;
  return (
    <div
      className={
        "rounded-3xl bg-white py-6 px-10 w-full z-[10000000000] flex flex-col"
      }
    >
      <div className={"flex items-center justify-between mb-4"}>
        <h5 className={"font-medium"}>ویرایش آدرس</h5>
        <i
          className={"cc-close-circle text-24"}
          onClick={() => setModalIsOpen(false)}
        />
      </div>
      <div className="h-[280px] w-full rounded-[0.5rem] overflow-hidden mb-9">
        <MapSelection dragging={true} setLocation={null} />
      </div>
      <SelectSearchInput
        placeholder={"مثال: تهران پاسداران پایدار فرد کوچه گسلیتان 8"}
        label={"آدرس"}
      />
      <div
        className={
          "grid grid-cols-2 justify-items-stretch gap-x-10 gap-y-6 mt-9"
        }
      >
        <SelectSearchInput
          search={true}
          label={"استان"}
          placeholder={"تهران"}
        />
        <SelectSearchInput search={true} label={"شهر"} placeholder={"تهران"} />
        <SelectSearchInput
          search={true}
          label={"محله"}
          placeholder={"سعادت آباد"}
        />
        <SelectSearchInput label={"کدپستی"} placeholder={"1456789652"} />
        <SelectSearchInput label={"پلاک"} placeholder={"4"} />
        <SelectSearchInput label={"واحد"} placeholder={"6"} />
      </div>
      <button
        className={
          "bg-BLUE_700 self-end flex items-center gap-2 mt-4 size690:mt-3 w-fit text-12 size690:text-[16px] p-[8px] text-white rounded-[4px]"
        }
      >
        <p>تایید و ادامه</p>
        <i className={"cc-left text-[20px]"} />
      </button>
    </div>
  );
};

export default AddAddressModal;
