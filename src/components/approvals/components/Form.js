import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      client: "",
      approved: "",
      rejected: "",
      hours_Worked: "",
      original_Approval: "",
      date: "",
      approver: ""
    },
    onSubmit: values => {
      formik.resetForm();
      axios
        .post(`https://lq-time-tracking.firebaseio.com/approvals.json`, values)
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <select
        id="approver"
        name="approver"
        type="approver"
        onChange={formik.handleChange}
        value={formik.values.name}
      >
        <option value=""> Select One...</option>
        <option value="Ryan">Ryan</option>
        <option value="Patrick">Patrick</option>
        <option value="Jennifer">Jennifer</option>
        <option value="Dan">Dan</option>
      </select>
      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label htmlFor="approved">Approved</label>
      <input
        id="approved"
        name="approved"
        type="approved"
        onChange={formik.handleChange}
        value={formik.values.approved}
      />
      <label htmlFor="rejected">Rejected</label>
      <input
        id="rejected"
        name="rejected"
        type="rejected"
        onChange={formik.handleChange}
        value={formik.values.rejected}
      />
      <label htmlFor="hours_Worked">Hours Worked</label>
      <input
        id="hours_Worked"
        name="hours_Worked"
        type="hours_Worked"
        onChange={formik.handleChange}
        value={formik.values.hours_Worked}
      />
      <label htmlFor="original_Approval">Original Approvals</label>
      <select
        id="original_Approval"
        name="original_Approval"
        type="original_Approval"
        onChange={formik.handleChange}
        value={formik.values.original_Approval}
      >
        <option value=""> Select One...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="client">Client</label>
      <input
        id="client"
        name="client"
        type="client"
        onChange={formik.handleChange}
        value={formik.values.client}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
