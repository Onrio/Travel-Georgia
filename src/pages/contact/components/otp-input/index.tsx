import React, { useState } from "react";
import style from "../../style.module.css";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]$/.test(value) && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      const lastInput = document.getElementById(`otp-${length - 1}`);
      lastInput?.blur();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("Text");
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("").slice(0, length);
    setOtp(newOtp);
    onChange(newOtp.join(""));

    const lastIndex = Math.min(newOtp.length, length) - 1;
    const lastInput = document.getElementById(`otp-${lastIndex}`);
    lastInput?.focus();

    if (newOtp.length === length && newOtp.every((digit) => digit !== "")) {
      lastInput?.blur();
    }
  };

  return (
    <div className={style["otpinput-block"]}>
      <span>Verify From Email</span>
      <label>
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </label>
    </div>
  );
};

export default OTPInput;
