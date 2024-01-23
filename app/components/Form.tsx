'use client';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

function Form() {
  return (
    <div style={{
      width: 450,
      height: 700
    }}>
      <FilloutStandardEmbed filloutId="tsNVeRBdwpus" />
    </div>
  );
}

export default Form;