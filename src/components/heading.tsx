import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { TextProps } from "react-native";

type HeadingVariants = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

interface HeadingProps extends TextProps {
  children: React.ReactNode;
  variant?: HeadingVariants;
}

const sizeMap: Record<HeadingVariants, number> = {
  style1: 28,
  style2: 26,
  style3: 24,
  style4: 22,
  style5: 20
};

const lineHeightMap: Record<HeadingVariants, number> = {
    style1: 30,
    style2: 28,
    style3: 26,
    style4: 24,
    style5: 22
};

export const Heading: React.FC<HeadingProps> = ({ children, variant = 'style4', style, ...rest }) => {
  const theme = useTheme();

  return (
    <StyledText
      style={style}
      variant={variant}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
    variant: HeadingVariants;
}>(({ variant, theme }) => ({
  fontSize: sizeMap[variant],
  lineHeight: lineHeightMap[variant],
  fontFamily: theme.typography.fontFamily.medium,
  color: theme.colors.text.primary[100],
}));