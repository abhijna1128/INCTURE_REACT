import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

import Personal from "./Form/Personal";
import Job from "./Form/Job";
import Bank from "./Form/Bank";
import Emergency from "./Form/Emergency";
import Documents from "./Form/Documents";
import Review from "./Form/Review";

const App = () => (
  <FormProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/form/personal" replace />} />
        <Route path="/form/personal" element={<Personal />} />
        <Route path="/form/job" element={<Job />} />
        <Route path="/form/bank" element={<Bank />} />
        <Route path="/form/emergency" element={<Emergency />} />
        <Route path="/form/documents" element={<Documents />} />
        <Route path="/form/review" element={<Review />} />
        <Route path="*" element={<Navigate to="/form/personal" replace />} />
      </Routes>
    </BrowserRouter>
  </FormProvider>
);

export default App;
