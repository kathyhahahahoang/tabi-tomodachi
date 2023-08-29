import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Checkbox from "./Checkbox";
import styles from "./SurpriseForm.module.scss";

function SurpriseForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const categories = [
    { label: "Everything", category: "everything" },
    { label: "Nature", category: "nature" },
    { label: "Culture", category: "culture" },
    { label: "Shopping", category: "shopping" },
    { label: "Food", category: "food" },
    { label: "Nightlife", category: "nightlife" },
    { label: "Undecided", category: "undecided" },
  ];

  const tourTypes = [
    { label: "International trip" },
    { label: "Domestic trip" },
    { label: "Road trip" },
    { label: "Weekend getaway" },
    { label: "Day trip" },
    { label: "Undecided" },
  ];

  const childFriendly = [{ label: "Yes" }, { label: "No" }];

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nnxnl4p",
        "template_wrnr298",
        form.current,
        "M-heCyvRsVkznWfwP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSelect("");
    setMessage("");
  }
  return (
    <>
      <div className={styles.header}>Please fill out the form below</div>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles["form-row"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles["form-row"]}>
            <label>Category of interest (select all that apply)</label>
            <div className={styles["checkbox-container"]}>
              {categories.map((el, i) => (
                <Checkbox label={el.label} key={i} />
              ))}
            </div>
          </div>
          <div className={styles["form-row"]}>
            <label>Type of tour (select all that apply)</label>
            <div className={styles["checkbox-container"]}>
              {tourTypes.map((el, i) => (
                <Checkbox label={el.label} key={i} />
              ))}
            </div>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="duration">Duration</label>
            <select id="duration" name="duration">
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
              <option value="6">6 days</option>
              <option value="7">7 days</option>
              <option value="8">8 days</option>
              <option value="9">9 days</option>
              <option value="10">10 day</option>
              <option value="11">11 days</option>
              <option value="12">12 days</option>
              <option value="13">13 days</option>
              <option value="14">14 days</option>
              <option value="flexible">I'm flexible</option>
            </select>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="budget">Budget per person</label>
            <select id="budget" name="budget">
              <option value="1">$500 - $1000</option>
              <option value="2">$1000 - $1500</option>
              <option value="3">$1500 - $2000</option>
              <option value="4">$2000 - $2500</option>
              <option value="5">$2500 - $3000</option>
              <option value="6">$3000 - $3500</option>
              <option value="7">$3500 - $4000</option>
              <option value="8">$4000 - $4500</option>
              <option value="9">$4500 - $5000</option>
              <option value="10">No budget</option>
            </select>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="people">How many people</label>
            <select id="people" name="people">
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              <option value="6">6 </option>
              <option value="7">7 </option>
              <option value="8">8 </option>
              <option value="9">9 </option>
              <option value="10">10 </option>
            </select>
          </div>
          <div className={styles["form-row"]}>
            <label>Does it need to be child friendly?</label>
            <div
              className={`${styles["checkbox-container"]} ${styles.children}`}
            >
              {childFriendly.map((el, i) => (
                <Checkbox label={el.label} key={i} />
              ))}
            </div>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="freeform">List of hobbies</label>
            <textarea
              id="freeform"
              rows="3"
              cols="10"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="freeform">List of interests</label>
            <textarea
              id="freeform"
              rows="3"
              cols="10"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="freeform">Things to avoid</label>
            <textarea
              id="freeform"
              rows="3"
              cols="10"
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <label htmlFor="disabilities">
              Disabilities/concerns to be aware of
            </label>
            <textarea
              id="disabilities"
              rows="7"
              cols="10"
              required
              name="disabilities"
            ></textarea>
          </div>
          <div className={styles["form-row"]}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SurpriseForm;
