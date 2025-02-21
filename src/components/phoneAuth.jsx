import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase/setup";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Setup reCAPTCHA
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        console.log("reCAPTCHA solved");
      },
    });
  };

  // Send OTP
  const sendOtp = async () => {
    if (!phoneNumber.startsWith("+")) {
      alert("Phone number must start with country code (e.g., +91 for India)");
      return;
    }

    setupRecaptcha();
    try {
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setVerificationId(confirmation.verificationId);
      setIsOtpSent(true);
      alert("OTP Sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      const credential = window.firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
      const user = await auth.signInWithCredential(credential);
      alert("Phone Verified! User ID: " + user.user.uid);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <div id="recaptcha-container"></div>

      {!isOtpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter phone number (+91XXXXXXXXXX)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default PhoneAuth;
