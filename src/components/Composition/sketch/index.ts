import paper from 'paper';

export const init = ({canvas}: {canvas: HTMLCanvasElement}) => {
  paper.setup(canvas);

  const circle = new paper.Path.Circle(paper.view.center, 24);

  circle.fillColor = new paper.Color('red');
};
