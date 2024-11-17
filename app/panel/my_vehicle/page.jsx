'use client'

import PanelContainer from "@/layouts/PanelContainer";

const MyVehicle = () => {
    return (
        <PanelContainer>
            <div className="bg-[#fefefe] rounded-lg shadow-[0_0_8px_0_rgba(143,143,143,0.25)] min-h-[500px] flex flex-col gap-6 lg:gap-9 p-4 lg:p-12">
                <span className="text-[#0F0F0F] text-sm font-medium">شناسنامه و سوابق وسیله نقلیه</span>
            </div>
        </PanelContainer>
    );
}

export default MyVehicle;