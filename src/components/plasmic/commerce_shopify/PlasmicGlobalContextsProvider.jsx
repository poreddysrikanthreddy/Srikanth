// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i3z63WaCLuRiSZRBwZC8d1
import * as React from "react";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-shopify"; // plasmic-import: jKXfoEXfU9R/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, commerceProviderComponentProps } = props;
  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      accessToken={
        commerceProviderComponentProps &&
        "accessToken" in commerceProviderComponentProps
          ? commerceProviderComponentProps.accessToken
          : "ef7d41c7bf7e1c214074d0d3047bcd7b"
      }
      storeDomain={
        commerceProviderComponentProps &&
        "storeDomain" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeDomain
          : "next-js-store.myshopify.com"
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}
