import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    price: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    price?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    price: true;
  }
}
