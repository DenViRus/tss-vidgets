import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionFormData } from "@interfaces/question-form-data.interface";
import React from "react";
import { SubmitHandler,useForm } from "react-hook-form";
import * as Yup from "yup";

import useStyles from "./question-form.styles";

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required("Name is required")
  .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
  .required("Email is required")
  .email("Email is invalid"),
  description: Yup.string()
  .required("Message is required")
  .min(10, "Description must be at least 10 characters"),
});

const QuestionForm: React.FC = () => {
  const { classes } = useStyles();

  const {
    register,
    handleSubmit,
    trigger,
    clearErrors,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<QuestionFormData>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const renderError = (error: string | undefined) =>
    error ? <span className={classes.error}>{error}</span> : null;

  const onSubmit: SubmitHandler<QuestionFormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleBlock}>
        <h2 className={classes.title}>Question form title</h2>
        <p className={classes.paragraph}>
        Be on the top 10 questions of the event
        </p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

        <div className={classes.formFieldsBlock}>
          <div className={classes.fieldRow}>
            <label className={classes.label} htmlFor="questionFormName">Full name</label>
            <input
            className={classes.input}
            id="questionFormName"
            type="text"
            {...register("name", {
              onChange: async () => {
                if (errors.name) clearErrors("name");
                await trigger("name");
              },
            })}
            autoComplete="off"
            placeholder="Enter your full name"
            maxLength={20}
            onBlur={async() => await trigger("name")}
            />
            {renderError(errors.name?.message)}
          </div>

          <div className={classes.fieldRow}>
            <label className={classes.label} htmlFor="questionFormEmail">Email</label>
            <input
            className={classes.input}
            id="questionFormEmail"
            type="email"
            {...register("email", {
              onChange: async () => {
                if (errors.email) clearErrors("email");
                await trigger("email");
              }
            })}
            autoComplete="off"
            placeholder="email@unicoin.com"
            maxLength={20}
            onBlur={async () => await trigger("email")}
            />
            {renderError(errors.email?.message)}
          </div>

          <div className={classes.fieldRow}>
            <label className={classes.label} htmlFor="questionFormDescription">Description</label>
            <textarea
            className={classes.textarea}
            id="questionFormDescription"
            {...register("description", {
              onChange: async () => {
                if (errors.description) clearErrors("description");
                await trigger("description");
              }
            })}
            placeholder="Enter a description"
            rows={5}
            maxLength={200}
            onBlur={async () => await trigger("description")}
            />
           {renderError(errors.description?.message)}
          </div>
        </div>

        <div className={classes.actionsBlock}>
          <button
          className={`${classes.button} ${!isValid || isSubmitting ? classes.disabledButton : ""}`}
          type="submit"
          disabled={!isValid || isSubmitting}>SEND</button>
        </div>
      </form>

    </div>
  );
}

export default QuestionForm;