import React from "react";
import { SvgProps } from "react-native-svg";
import * as Icons from "../../assets/icons";

export interface IconProps extends SvgProps {
  size?: number;
  color?: string;
  name: keyof typeof Icons;
}

export const Icon: React.FC<IconProps> = React.memo(({ size = 24, color = "#000", name, ...props }) => {
  const SelectedIcon = Icons[name];

  if (!SelectedIcon) {
    console.warn(`Ícone "${name as string}" não encontrado em ../../assets/icons`);
    return null;
  }

  return (
    <SelectedIcon
      width={size}
      height={size}
      color={color}
      {...props}
    />
  );
});