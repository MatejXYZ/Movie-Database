import { FC } from "react";
import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";

const FullscreenSpinner: FC<SpinnerProps> = (props) => (
  <Flex w="100vw" h="100vh" justify="center" align="center">
    <Spinner {...props} />
  </Flex>
);

export default FullscreenSpinner;
