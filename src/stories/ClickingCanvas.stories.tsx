import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ConfettiCanvas from "../react/ConfettiCanvas";
import SpriteCanvas from "../react/SpriteCanvas";
import useConfettiCannon from "../react/useConfettiCannon";
import { CreateConfettiArgs } from "../createConfetti";
import Environment from "../Environment";
import { getClickPosition } from "./Utils";
import SpriteCanvasStory from "./SpriteCanvas.stories";

import styles from "./ConfettiCannon.module.css";
import classNames from "classnames";
import Confetti from "../Confetti";

const SIZE = 40;

function ClickingCanvasStoryWrapper() {
  const confettiCanvas = React.useRef<React.ElementRef<
    typeof ConfettiCanvas
  > | null>(null);
  const spriteCanvas =
    React.useRef<React.ElementRef<typeof SpriteCanvas>>(null);
  const environment = React.useMemo(
    () => new Environment({ gravity: 0, wind: 0 }),
    []
  );
  const cannon = useConfettiCannon(confettiCanvas, spriteCanvas);
  const lastMousePosition = React.useRef({ x: 0, y: 0 });
  const draggingConfetti = React.useRef<Confetti | null>(null);

  const addConfetti = React.useCallback(
    (x: number, y: number) => {
      const spriteCanvasRef = spriteCanvas.current?.getCanvas();
      if (confettiCanvas.current == null || spriteCanvasRef == null) {
        return;
      }

      const createConfettiArgs: CreateConfettiArgs = {
        position: {
          type: "static",
          value: { x: x, y: y },
        },
        velocity: {
          type: "static",
          value: { x: 0, y: 0 },
        },
        rotation: {
          type: "static",
          value: { x: 0, y: 0, z: 0 },
        },
        dragCoefficient: {
          type: "static",
          value: 0.001,
        },
        opacity: {
          type: "static",
          value: 1,
        },
        size: {
          type: "static",
          value: SIZE,
        },
        colors: SpriteCanvasStory.args.colors,
      };

      cannon.addConfetti(createConfettiArgs);
    },
    [cannon]
  );

  const handleMouseDown = (e: React.MouseEvent, confetti: Confetti | null) => {
    if (confetti != null) {
      draggingConfetti.current = confetti;
      return;
    }
    const { x, y } = getClickPosition(e, confettiCanvas.current?.getCanvas());
    lastMousePosition.current = { x, y };
    addConfetti(x, y);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingConfetti.current != null) {
      const { x, y } = getClickPosition(e, confettiCanvas.current?.getCanvas());
      draggingConfetti.current.position.x = x;
      draggingConfetti.current.position.y = y;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (draggingConfetti.current == null) {
      return;
    }

    const { x, y } = getClickPosition(e, confettiCanvas.current?.getCanvas());
    const velocityX = x - lastMousePosition.current.x;
    const velocityY = y - lastMousePosition.current.y;
    draggingConfetti.current.velocity.x = velocityX;
    draggingConfetti.current.velocity.y = velocityY;
    draggingConfetti.current = null;
  };

  return (
    <>
      <SpriteCanvas
        ref={spriteCanvas}
        className={styles.bordered}
        sprites={SpriteCanvasStory.args.sprites}
        colors={SpriteCanvasStory.args.colors}
        spriteWidth={SIZE}
        spriteHeight={SIZE}
      />
      <ConfettiCanvas
        ref={confettiCanvas}
        className={classNames(styles.bordered, styles.sized)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        environment={environment}
      />
      <div>
        <button onClick={() => cannon.clearConfetti()}>Clear Canvas</button>
      </div>
    </>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ClickingCanvas",
  component: ClickingCanvasStoryWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof ClickingCanvasStoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
