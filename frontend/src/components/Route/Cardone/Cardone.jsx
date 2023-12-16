
import React from 'react';

const Cardone = () => {
  return (
    <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
      <Card
        color="#5B72EE"
        title="Online Billing, Invoicing, & Contracts"
        description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
        icon={
          <svg className="w-6 h-6 text-white" viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Path for the first card icon */}
          </svg>
        }
      />
      <Card
        color="#F48C06"
        title="Easy Scheduling & Attendance Tracking"
        description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        icon={
          <svg className="w-6 h-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Path for the second card icon */}
          </svg>
        }
      />
      <Card
        color="#29B9E7"
        title="Customer Tracking"
        description="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization"
        icon={
          <svg className="w-6 h-6 text-white" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Path for the third card icon */}
          </svg>
        }
      />
    </div>
  );
};

const Card = ({ color, title, description, icon }) => {
  return (
    <div data-aos="fade-up" className="bg-white shadow-xl p-6 text-center rounded-xl">
      <div style={{ background: color }} className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
        {icon}
      </div>
      <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">{title}</h1>
      <p className="px-4 text-gray-500">{description}</p>
    </div>
  );
};

export default Cardone;



