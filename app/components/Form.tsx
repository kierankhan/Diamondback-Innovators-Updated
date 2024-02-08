'use client';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

function Form() {
  return (
    <div className="w-max h-max" style={{
      width: 370,
      height: "100%"
    }}>
      <FilloutStandardEmbed filloutId="tsNVeRBdwpus"/>
    </div>
  );
}

export default Form;