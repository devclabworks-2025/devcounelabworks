import type {
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "auto-rotate"?: boolean;
          "rotation-per-second"?: string;
          "camera-controls"?: boolean;
          "disable-zoom"?: boolean;
          "disable-tap"?: boolean;
          "touch-action"?: string;
          "environment-image"?: string;
          exposure?: number;
          scale?: string;
          "field-of-view"?: string;
          "shadow-intensity"?: number;
          "tone-mapping"?: string;
          "camera-target"?: string;
        },
        HTMLElement
      >;
    }
  }
}
