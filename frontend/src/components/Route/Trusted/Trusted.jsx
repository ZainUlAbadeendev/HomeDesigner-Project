import React from 'react'

const Trusted = () => {
  return (
    <div className="lg:w-2/3 text-center mx-auto" style={{ background: '#ffff' }}>
      <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://www.sunonglobal.com/bocstatic/web/img/logo.png?v=v1" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://seeklogo.com/images/H/hisense-logo-9DCC5ED02F-seeklogo.com.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://wpassets.graana.com/blog/wp-content/uploads/2022/03/logo.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://www.zoominfo.com/ge-assets/common/zoominfo_logo_black_2023.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
          <img src="https://zolak.tech/hubfs/logo-3.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </div>
      </div>
    </div>

  );
};

export default Trusted;
