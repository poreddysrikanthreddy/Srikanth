// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7tTSNWitJe6Z5iHR4V1pK
// Component: h3jf89-O0Y-Qq7
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
import sty from "./PlasmicCollapse.module.css"; // plasmic-import: h3jf89-O0Y-Qq7/css
import ChevronIcon from "./icons/PlasmicIcon__Chevron"; // plasmic-import: 1DWqIXwWA7s0iY/icon

export const PlasmicCollapse__VariantProps = new Array("isOpen");

export const PlasmicCollapse__ArgProps = new Array("title", "content");

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCollapse__RenderFunc(props) {
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
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__hPqJ4, {
          [sty.freeBoxisOpen__hPqJ46M6Cx]: hasVariant(
            $state,
            "isOpen",
            "isOpen"
          )
        })}
      >
        <ChevronIcon
          className={classNames(projectcss.all, sty.svg__mSkeW, {
            [sty.svgisOpen__mSkeW6M6Cx]: hasVariant($state, "isOpen", "isOpen")
          })}
          role={"img"}
        />

        <div className={classNames(projectcss.all, sty.freeBox__nJgJe)}>
          {p.renderPlasmicSlot({
            defaultContents: "Title",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      </div>
      {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___2Oo0B, {
            [sty.freeBoxisOpen___2Oo0B6M6Cx]: hasVariant(
              $state,
              "isOpen",
              "isOpen"
            )
          })}
        >
          {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__i6M8O, {
                [sty.freeBoxisOpen__i6M8O6M6Cx]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
                <ChevronIcon
                  className={classNames(projectcss.all, sty.svg__pxz22, {
                    [sty.svgisOpen__pxz226M6Cx]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    )
                  })}
                  role={"img"}
                />
              ) : null}
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__fVf5U)}>
            {p.renderPlasmicSlot({
              defaultContents: "Content",
              value: args.content,
              className: classNames(sty.slotTargetContent, {
                [sty.slotTargetContentisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })
            })}
          </div>
        </div>
      ) : null}
    </p.Stack>
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
          internalArgPropNames: PlasmicCollapse__ArgProps,
          internalVariantPropNames: PlasmicCollapse__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollapse__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollapse";
  } else {
    func.displayName = `PlasmicCollapse.${nodeName}`;
  }
  return func;
}

export const PlasmicCollapse = Object.assign(
  // Top-level PlasmicCollapse renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCollapse
    internalVariantProps: PlasmicCollapse__VariantProps,
    internalArgProps: PlasmicCollapse__ArgProps
  }
);

export default PlasmicCollapse;
/* prettier-ignore-end */
