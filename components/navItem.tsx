import Link from "next/link";
import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  to?: "/";
}

const MenuItem = ({ children, to = "/", ...rest }: Props) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
