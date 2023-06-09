// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7tTSNWitJe6Z5iHR4V1pK
// Component: eKi6I8TPrVMENc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { CartComponent } from "@plasmicpkgs/commerce"; // plasmic-import: UGhhaf1AiUhF/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_vercel_commerce_theme.module.css"; // plasmic-import: q7tTSNWitJe6Z5iHR4V1pK/projectcss
import sty from "./PlasmicCart.module.css"; // plasmic-import: eKi6I8TPrVMENc/css
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: SVDrDOXoMCErQ2/icon

export const PlasmicCart__VariantProps = new Array("editOnly");

export const PlasmicCart__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCart__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "editOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.editOnly
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return true ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <CartIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <CartComponent
        data-plasmic-name={"cart"}
        data-plasmic-override={overrides.cart}
        className={classNames("__wab_instance", sty.cart)}
        field={"Size"}
        hideIfIsEmpty={true}
      />
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "cart"],
  svg: ["svg"],
  cart: ["cart"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCart__ArgProps,
          internalVariantPropNames: PlasmicCart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    cart: makeNodeComponent("cart"),
    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps
  }
);

export default PlasmicCart;
/* prettier-ignore-end */
