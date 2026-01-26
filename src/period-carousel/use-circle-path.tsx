import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { RefObject, useRef } from "react";

interface ICirclePathOptions {
  sourceId: string;
  pathId: string;
}

interface IUseCirclePath {
  svgRef: RefObject<SVGSVGElement | null>;
  options: ICirclePathOptions;
}

gsap.registerPlugin(MotionPathPlugin);

const getExistingPath = (svg: SVGSVGElement, pathId: string) => {
  return svg.querySelector<SVGPathElement>(`#${pathId}`);
};

const getSource = (svg: SVGSVGElement, sourceId: string) => {
  return svg.querySelector<SVGGraphicsElement>(`#${sourceId}`);
};

const createPath = ({ sourceId, pathId }: ICirclePathOptions) => {
  const [path] = MotionPathPlugin.convertToPath(`#${sourceId}`, false);
  if (!path) return;
  path.id = pathId;
  return path;
};

export const useCirclePath = ({ svgRef, options }: IUseCirclePath) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;

      const existingPath = getExistingPath(svg, options.pathId);
      if (existingPath) {
        pathRef.current = existingPath;
        return;
      }

      const source = getSource(svg, options.sourceId);
      if (!source) return;

      const path = createPath(options);
      if (!path) return;

      svg.prepend(path);
      pathRef.current = path;
      return () => {
        path.remove();
        pathRef.current = null;
      };
    },
    { scope: svgRef },
  );
  return pathRef;
};
