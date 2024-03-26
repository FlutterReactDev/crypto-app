import { ChakraProvider } from "@chakra-ui/react";
import { Fonts } from "@components/atoms/fonts";
import { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};
