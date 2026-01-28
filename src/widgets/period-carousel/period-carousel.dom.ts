export const getSource = (svg: SVGSVGElement, sourceId: string) => {
  return svg.querySelector<SVGGraphicsElement>(`#${sourceId}`);
};

export const getExistingPath = (svg: SVGSVGElement, pathId: string) => {
  return svg.querySelector<SVGPathElement>(`#${pathId}`);
};

export const getcarouselItems = (wrapper: HTMLDivElement, selector: string) => {
  return wrapper.querySelectorAll<HTMLDivElement>(selector);
};
