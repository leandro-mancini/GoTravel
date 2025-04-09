import React from "react";
import { SvgProps } from "react-native-svg";
import * as Illustrations from "../../assets/illustrations";

export interface IllustrationProps extends SvgProps {
  width?: number | string;
  height?: number | string;
  name: keyof typeof Illustrations;
}

export const Illustration: React.FC<IllustrationProps> = React.memo(({ 
  width = "100%", height = 200, name, ...props
}) => {
  const SelectedIcon = Illustrations[name];

  if (!SelectedIcon) {
    console.warn(`Ícone "${name as string}" não encontrado em ../../assets/illustrations`);
    return null;
  }

  return (
    <SelectedIcon
      width={width}
      height={height}
      {...props}
    />
  );
});