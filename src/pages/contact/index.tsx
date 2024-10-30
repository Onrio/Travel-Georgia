import { useState, useEffect } from "react";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import OtpInput from "./components/otp-input";

interface FormValues {
  Name: string;
  LastName: string;
  Email: string;
  Message: string;
}

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    Name: "",
    LastName: "",
    Email: "",
    Message: "",
  });

  const [, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  useEffect(() => {
    const savedValues: FormValues = {
      Name: localStorage.getItem("Name") || "",
      LastName: localStorage.getItem("LastName") || "",
      Email: localStorage.getItem("Email") || "",
      Message: localStorage.getItem("Message") || "",
    };
    setFormValues(savedValues);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    localStorage.setItem(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);

    localStorage.removeItem("Name");
    localStorage.removeItem("LastName");
    localStorage.removeItem("Email");
    localStorage.removeItem("Message");

    setFormValues({
      Name: "",
      LastName: "",
      Email: "",
      Message: "",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["contact-body"]}>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
          >
            <label>
              Name
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                value={formValues.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                placeholder="Your Last Name"
                name="LastName"
                value={formValues.LastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="Your Email"
                name="Email"
                value={formValues.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              />
            </label>
            <label>
              Message
              <textarea
                name="Message"
                placeholder="Message"
                value={formValues.Message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style["contact-input"]}
              ></textarea>
            </label>
            <div className={style["otp-section"]}>
              <OtpInput length={8} onChange={handleOtpChange} />
            </div>
            <button type="submit" className={style["submit-button"]}>
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
