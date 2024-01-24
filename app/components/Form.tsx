'use client';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

function Form() {
  return (
    <div style={{
      width: 700,
      height: 670
    }}>
      <FilloutStandardEmbed filloutId="tsNVeRBdwpus" />
    </div>
  );
}

export default Form;