"use client";

//  even if the client side component wraps a server side component, server side component will
// still be rendered on server side
const ClientSideProviderTest = ({ children }) => {
  return <div>{children}</div>;
};

export default ClientSideProviderTest;
