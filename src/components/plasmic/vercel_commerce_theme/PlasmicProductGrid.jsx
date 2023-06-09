// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7tTSNWitJe6Z5iHR4V1pK
// Component: CK8q57nTdTKF2b
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_vercel_commerce_theme.module.css"; // plasmic-import: q7tTSNWitJe6Z5iHR4V1pK/projectcss
import sty from "./PlasmicProductGrid.module.css"; // plasmic-import: CK8q57nTdTKF2b/css

export const PlasmicProductGrid__VariantProps = new Array("layout");

export const PlasmicProductGrid__ArgProps = new Array(
  "product0",
  "product1",
  "product2"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductGrid__RenderFunc(props) {
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
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
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
        sty.root,
        { [sty.rootlayout_b]: hasVariant($state, "layout", "b") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__ymwxj, {
          [sty.freeBoxlayout_b__ymwxjLzxH]: hasVariant($state, "layout", "b")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.product0
        })}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox___6NAa6, {
          [sty.freeBoxlayout_b___6NAa6LzxH]: hasVariant($state, "layout", "b")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.product1
        })}
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__wk4R, {
          [sty.freeBoxlayout_b__wk4RLzxH]: hasVariant($state, "layout", "b")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.product2
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductGrid__ArgProps,
          internalVariantPropNames: PlasmicProductGrid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductGrid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductGrid";
  } else {
    func.displayName = `PlasmicProductGrid.${nodeName}`;
  }
  return func;
}

export const PlasmicProductGrid = Object.assign(
  // Top-level PlasmicProductGrid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicProductGrid
    internalVariantProps: PlasmicProductGrid__VariantProps,
    internalArgProps: PlasmicProductGrid__ArgProps
  }
);

export default PlasmicProductGrid;
/* prettier-ignore-end */
