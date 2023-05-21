import invariant from "invariant";
import Confetti from "./Confetti";
import { UpdatableVector2Value, UpdatableVector3Value } from "./UpdatableValue";
import {
  LinearUpdatableValue,
  StaticUpdatableValue,
} from "./UpdatableValueImplementations";
import {
  SPRITE_SPACING,
  SpriteCanvasProps,
  SpriteProp,
} from "./react/SpriteCanvas";

interface StaticConfigConstant<T> {
  type: "static";
  value: T;
}

interface StaticConfigRandom<T> {
  type: "static-random";
  minValue: T;
  maxValue: T;
}

type StaticConfig<T> = StaticConfigConstant<T> | StaticConfigRandom<T>;

interface LinearConfigConstant<T> {
  type: "linear";
  value: T;
  addValue: T;
}

interface LinearConfigRandom<T> {
  type: "linear-random";
  minValue: T;
  maxValue: T;
  minAddValue: T;
  maxAddValue: T;
}

type LinearConfig<T> = LinearConfigConstant<T> | LinearConfigRandom<T>;

interface Vector2 {
  x: number;
  y: number;
}
interface Vector3 extends Vector2 {
  z: number;
}

type StaticConfigNumber = StaticConfig<number>;
type StaticConfigVector2 = StaticConfig<Vector2>;
type StaticConfigVector3 = StaticConfig<Vector3>;

type LinearConfigNumber = LinearConfig<number>;
type LinearConfigVector2 = LinearConfig<Vector2>;
type LinearConfigVector3 = LinearConfig<Vector3>;

type UpdatableValueConfigNumber = StaticConfigNumber | LinearConfigNumber;
type UpdatableValueConfigVector2 = StaticConfigVector2 | LinearConfigVector2;
type UpdatableValueConfigVector3 = StaticConfigVector3 | LinearConfigVector3;

export interface CreateConfettiArgs {
  position: UpdatableValueConfigVector2;
  velocity: UpdatableValueConfigVector2;
  rotation: UpdatableValueConfigVector3;
  dragCoefficient: UpdatableValueConfigNumber;
  width?: UpdatableValueConfigNumber;
  height?: UpdatableValueConfigNumber;
  size?: UpdatableValueConfigNumber;
  opacity: UpdatableValueConfigNumber;
  colors: string[];
}

type UpdatableValueConfigNumberAnnotated = UpdatableValueConfigNumber & {
  valueType: "number";
};
type UpdatableValueConfigVector2Annotated = UpdatableValueConfigVector2 & {
  valueType: "Vector2";
};
type UpdatableValueConfigVector3Annotated = UpdatableValueConfigVector3 & {
  valueType: "Vector3";
};

interface CreateConfettiArgsAnnotated extends CreateConfettiArgs {
  position: UpdatableValueConfigVector2Annotated;
  velocity: UpdatableValueConfigVector2Annotated;
  rotation: UpdatableValueConfigVector3Annotated;
  dragCoefficient: UpdatableValueConfigNumberAnnotated;
  width?: UpdatableValueConfigNumberAnnotated;
  height?: UpdatableValueConfigNumberAnnotated;
  size?: UpdatableValueConfigNumberAnnotated;
  opacity: UpdatableValueConfigNumberAnnotated;
}

function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomFromList<T>(list: T[]): [T, number] {
  const index = getRandomValue(0, list.length - 1);
  const value = list[index];
  return [value, index];
}

function getValueNumber(config: UpdatableValueConfigNumberAnnotated) {
  switch (config.type) {
    case "static":
      return new StaticUpdatableValue(config.value);
    case "static-random":
      return new StaticUpdatableValue(
        getRandomValue(config.minValue, config.maxValue)
      );
    case "linear":
      return new LinearUpdatableValue(config.value, config.addValue);
    case "linear-random":
      return new LinearUpdatableValue(
        getRandomValue(config.minValue, config.maxValue),
        getRandomValue(config.minAddValue, config.maxAddValue)
      );
  }
}

function getValueVector2(config: UpdatableValueConfigVector2Annotated) {
  switch (config.type) {
    case "static":
      return new UpdatableVector2Value(
        new StaticUpdatableValue(config.value.x),
        new StaticUpdatableValue(config.value.y)
      );
    case "static-random":
      return new UpdatableVector2Value(
        new StaticUpdatableValue(
          getRandomValue(config.minValue.x, config.maxValue.x)
        ),
        new StaticUpdatableValue(
          getRandomValue(config.minValue.y, config.maxValue.y)
        )
      );
    case "linear":
      return new UpdatableVector2Value(
        new LinearUpdatableValue(config.value.x, config.addValue.x),
        new LinearUpdatableValue(config.value.y, config.addValue.y)
      );
    case "linear-random":
      return new UpdatableVector2Value(
        new LinearUpdatableValue(
          getRandomValue(config.minValue.x, config.maxValue.x),
          getRandomValue(config.minAddValue.x, config.maxAddValue.x)
        ),
        new LinearUpdatableValue(
          getRandomValue(config.minValue.y, config.maxValue.y),
          getRandomValue(config.minAddValue.x, config.maxAddValue.x)
        )
      );
  }
}

function getValueVector3(config: UpdatableValueConfigVector3Annotated) {
  switch (config.type) {
    case "static":
      return new UpdatableVector3Value(
        new StaticUpdatableValue(config.value.x),
        new StaticUpdatableValue(config.value.y),
        new StaticUpdatableValue(config.value.z)
      );
    case "static-random":
      return new UpdatableVector3Value(
        new StaticUpdatableValue(
          getRandomValue(config.minValue.x, config.maxValue.x)
        ),
        new StaticUpdatableValue(
          getRandomValue(config.minValue.y, config.maxValue.y)
        ),
        new StaticUpdatableValue(
          getRandomValue(config.minValue.z, config.maxValue.z)
        )
      );
    case "linear":
      return new UpdatableVector3Value(
        new LinearUpdatableValue(config.value.x, config.addValue.x),
        new LinearUpdatableValue(config.value.y, config.addValue.y),
        new LinearUpdatableValue(config.value.z, config.addValue.z)
      );
    case "linear-random":
      return new UpdatableVector3Value(
        new LinearUpdatableValue(
          getRandomValue(config.minValue.x, config.maxValue.x),
          getRandomValue(config.minAddValue.x, config.maxAddValue.x)
        ),
        new LinearUpdatableValue(
          getRandomValue(config.minValue.y, config.maxValue.y),
          getRandomValue(config.minAddValue.y, config.maxAddValue.y)
        ),
        new LinearUpdatableValue(
          getRandomValue(config.minValue.z, config.maxValue.z),
          getRandomValue(config.minAddValue.z, config.maxAddValue.z)
        )
      );
  }
}

function annotateArgs({
  position,
  velocity,
  rotation,
  dragCoefficient,
  width,
  height,
  size,
  opacity,
  ...args
}: CreateConfettiArgs): CreateConfettiArgsAnnotated {
  return {
    ...args,
    position: { ...position, valueType: "Vector2" },
    velocity: { ...velocity, valueType: "Vector2" },
    rotation: { ...rotation, valueType: "Vector3" },
    dragCoefficient: { ...dragCoefficient, valueType: "number" },
    width: width != null ? { ...width, valueType: "number" } : undefined,
    height: height != null ? { ...height, valueType: "number" } : undefined,
    size: size != null ? { ...size, valueType: "number" } : undefined,
    opacity: { ...opacity, valueType: "number" },
  };
}

function shouldColorizeSprite(sprite: SpriteProp) {
  if (typeof sprite === "string") {
    return true;
  }
  return sprite.colorize;
}

export default function createConfetti(
  rawArgs: CreateConfettiArgs,
  spriteCanvasProps: SpriteCanvasProps
) {
  const args = annotateArgs(rawArgs);

  const size = args.size != null ? getValueNumber(args.size) : null;
  const width = args.width != null ? getValueNumber(args.width) : size;
  const height = args.height != null ? getValueNumber(args.height) : size;

  invariant(width != null, "width or size is required");
  invariant(height != null, "height or size is required");

  const [sprite, spriteIndex] = getRandomFromList(spriteCanvasProps.sprites);
  const colorIndex = shouldColorizeSprite(sprite)
    ? getRandomValue(0, spriteCanvasProps.colors.length - 1)
    : 0;

  return new Confetti({
    ...args,
    position: getValueVector2(args.position),
    velocity: getValueVector2(args.velocity),
    rotation: getValueVector3(args.rotation),
    dragCoefficient: getValueNumber(args.dragCoefficient),
    width: width,
    height: height,
    opacity: getValueNumber(args.opacity),
    spriteX:
      colorIndex * spriteCanvasProps.spriteWidth + colorIndex * SPRITE_SPACING,
    spriteY:
      spriteIndex * spriteCanvasProps.spriteHeight +
      spriteIndex * SPRITE_SPACING,
    spriteWidth: spriteCanvasProps.spriteWidth,
    spriteHeight: spriteCanvasProps.spriteHeight,
  });
}
