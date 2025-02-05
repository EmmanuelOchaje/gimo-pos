import React from "react";

const Content = (props) => {
  return (
    <div className="py-8 px-4 lg:px-[6rem]">
      <h2 className="font-bold text-2xl md:text-[30px] md:leading-[50px]">
        <span className="bg font-bold text-2xl md:text-4xl">
          Privacy Policy
        </span>
      </h2>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:pb-5 text-[#6665ff]">
        1. Information We Collect
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        1.1 Personal Information: We may collect personal information such as
        names, addresses, phone numbers, and email addresses during the
        registration and usage of our{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span> POS
        system.
      </p>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        1.2 Transaction Data:{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span> may
        collect transaction data, including purchase history, sales data, and
        other related information.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        2. How We Use Your Information
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        {" "}
        2.1 Improving Services: We use the information collected to enhance and
        improve the functionality, features, and user experience of{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span>.
      </p>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        2.2 Communication: We may use your contact information to send important
        updates, announcements, and promotional materials. You can opt-out of
        promotional emails.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        3. Information Sharing
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        {" "}
        3.1 Third-Party Partners:{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span> may
        share information with trusted third-party partners for the purpose of
        providing and improving our services. These partners are obligated to
        keep your information confidential.
      </p>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        3.2 Legal Compliance: We may disclose your information when required by
        law, regulation, or legal process.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        4. Data Security
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        {" "}
        4.1 Security Measures:{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span> employs
        industry-standard security measures to protect your information from
        unauthorized access, disclosure, alteration, and destruction.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        5. Your Choices
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        5.1 Access and Correction: You can access and update your personal
        information through the{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span>{" "}
        platform. Contact support for assistance.
      </p>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        5.2 Opt-Out: You can opt-out of promotional communications by following
        the instructions in the communication or contacting our support team.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        6. Changes to this Privacy Policy
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        6.1 Updates:{" "}
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span> may
        update this Privacy Policy to reflect changes in our practices. Check
        the policy periodically for the latest information.
      </p>

      <h3 className="mt-2 text-[20px] font-bold md:ml-3 py-2 md:py-5 text-[#6665ff]">
        {" "}
        7. Contact Us
      </h3>
      <p className="px-2 md:px-5 text-[16px] font-medium">
        {" "}
        7.1 Questions: If you have any questions or concerns about this Privacy
        Policy, please contact us at info@
        <span className="font-medium text-[#6665ff]">GimoPOS.com</span>
      </p>
    </div>
  );
};

export default Content;
