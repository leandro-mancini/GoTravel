import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { TextProps } from "react-native";

type SubHeadingVariants = 'style1' | 'style2' | 'style3' | 'style4';

interface SubHeadingProps extends TextProps {
  children: React.ReactNode;
  variant?: SubHeadingVariants;
}

const sizeMap: Record<SubHeadingVariants, number> = {
  style1: 18,
  style2: 16,
  style3: 14,
  style4: 12,
};

const lineHeightMap: Record<SubHeadingVariants, number> = {
    style1: 20,
    style2: 18,
    style3: 16,
    style4: 14,
};

export const SubHeading: React.FC<SubHeadingProps> = ({ children, variant = 'style4', style, ...rest }) => {
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
    variant: SubHeadingVariants;
}>(({ variant, theme }) => ({
  fontSize: sizeMap[variant],
  lineHeight: lineHeightMap[variant],
  fontFamily: theme.typography.fontFamily.medium,
  color: theme.colors.text.primary[100],
}));