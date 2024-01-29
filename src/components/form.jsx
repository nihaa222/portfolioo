import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { useReducer, useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2rem",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  footer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const initialErrors = {
  name: false,
  email: false,
  message: false,
};

const ContactForm = () => {
  const classes = useStyles();

  const reducer = (currentState, nextState) => ({
    ...currentState,
    ...nextState,
  });

  const [values, setValues] = useReducer(reducer, initialValues);
  const [errors, setErrors] = useReducer(reducer, initialErrors);
  const [successMessage, setSuccessMessage] = useState(false);

  const onChange = (e) => {
    setValues({ [e.target.id]: e.target.value });
  };

  const onFocus = (e) => {
    setErrors({ [e.target.id]: false });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    for (const key in values) {
      if (!values[key]) {
        setErrors({ [key]: true });
        return;
      }
      setErrors({ [key]: false });
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        console.log("success");
        setSuccessMessage(true);
        setValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => console.log("Error :", e));
  };

  return (
    <div>
      <Paper className={classes.paper} elevation={5}>
        <form
          onSubmit={onSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={onChange}
            onFocus={onFocus}
            error={errors.name}
            value={values.name}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={onChange}
            onFocus={onFocus}
            error={errors.email}
            value={values.email}
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            onChange={onChange}
            onFocus={onFocus}
            error={errors.message}
            value={values.message}
          />
          <footer className={classes.footer}>
            <Button type="submit" variant="contained" color="black">
              Send
              <SendIcon style={{ marginLeft: ".5rem", fontSize: "1rem" }} />
            </Button>
          </footer>
        </form>
      </Paper>
      {successMessage ? (
        <p>
          Your message has been successfully sent! Thank you. Wish you have a
          great day ahead!
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ContactForm;
