import NextLink from "next/link";
import React from "react";

const Link = ({ href, children }) => (
  <NextLink href={href} passHref>
    <a>{children}</a>
  </NextLink>
);

export default Link;
