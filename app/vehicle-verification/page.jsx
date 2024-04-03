import VehicleVerificationPage from '@/components/vehicle-verification/VehicleVerificationPage';

export const metadata =  {
  title: 'کارشناسی خودرو',
  description: 'کارشناسی خودرو در مراکز کارچک یا در محل شما',
  metadataBase: new URL('https://ccme.ir/vehicle-verification'),
    alternates: {
        canonical: 'https://ccme.ir',
    },
    keywords: 'کارشناسی،خودرو',
    robots: 'index,follow',
    openGraph: {
        title: 'کارشناسی خودرو',
        description:'کارشناسی خودرو در مراکز کارچک یا در محل شما',
        locale: 'fa-ir',
        type: 'website',
        url: 'https://ccme.ir',
        images: [
            {
                url: 'https://ccme.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvehicle-verification.2d0deea8.png&w=64&q=75',
                width: 32, // Specify the width of the image
                height: 32, // Specify the height of the image
            }
        ]
    }

};

export const ldJsonData = {
  "@context": "https://schema.org",
  "@type": "website",
  "name": "دخترون",
  "url": "https://ccme.ir",
  "description": "کارشناسی خودرو در سریع ترین زمان در مراکز تخصصی کارچک",
  "logo": "https://ccme.ir/assets/icons/Image-1.svg"
};


const VehicleVerification = () => {
  const [step,setStep] = useState(1)

    const HowWorksMockUpData = [
        {
            title: "انتخاب وسیله نقلیه",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Perfect-Car-Service.png",
        },
        {
            title: "انتخاب خدمات مورد نیاز",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Doorstep-Pick-up.png",
        },
        {
            title: "انتخاب مکان دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/service-real-time.png",
        },
        {
            title: "انتخاب زمان دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Doorstep-Pick-up.png",
        },
        {
            title: "دریافت خدمات",
            description:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. ",
            img: "/assets/icons/Earn-While-We-Service.png",
        },
    ];
  const verificationData = [
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
    {
      option: "حضور همزمان کارشناس فنی و خودرو",
      description: [
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
        { descriptionList: "تعویض و آسیب دیدگی قطعات" },
      ],
    },
  ];
 



   
  const closeVerificationModal = () => {
    setModalIsOpen(false);
  };
 
  return (
    // <div className="w-[98%]  m-auto size1160:w-[95%]">
    //
    //
    //   {step === 1 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }
    //   {step === 2 && <VerificationSecondStep setStep={setStep}/>}
    //   {step === 3 && <VerificationThirdStep setStep={setStep}/>}
    //   {step === 4 && <VerificationFirstStep setStep={setStep} step={step} verificationData={verificationData}/> }
    //   <div>
    //     <CallAndConsult />
    //   </div>
    //   <HowWorks data={HowWorksMockUpData}/>
    // </div>
    <>
      <VehicleVerificationPage />
    </>
  );
};

export default VehicleVerification;
