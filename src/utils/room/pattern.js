export default class PatternMaker {
  constructor() {
    this.color = "#000000";
    this.pattern_01 = this.pattern_01.bind(this);
    this.pattern_02 = this.pattern_02.bind(this);
    this.pattern_03 = this.pattern_03.bind(this);
    this.pattern_04 = this.pattern_04.bind(this);
    this.pattern_05 = this.pattern_05.bind(this);
  }

  updateColor(color) {
    this.color = color;
  }

  getPattern(index) {
    const PATTERN = [
      this.pattern_01(),
      this.pattern_02(),
      this.pattern_03(),
      this.pattern_04(),
      this.pattern_05(),
    ];
    return PATTERN[index];
  }

  pattern_01() {
    let patternCanvas = document.createElement("canvas");
    patternCanvas.width = 6;
    patternCanvas.height = 6;
    const patternCtx = patternCanvas.getContext("2d");

    patternCtx.fillStyle = this.color;
    patternCtx.fillRect(1, 1, 1, 1);
    patternCtx.fillRect(4, 1, 1, 1);
    patternCtx.fillRect(1, 4, 1, 1);
    patternCtx.fillRect(4, 4, 1, 1);

    return patternCanvas;
  }

  pattern_02() {
    let patternCanvas = document.createElement("canvas");
    patternCanvas.width = 4;
    patternCanvas.height = 4;
    const patternCtx = patternCanvas.getContext("2d");

    patternCtx.fillStyle = this.color;
    patternCtx.fillRect(0, 0, 1, 1);
    patternCtx.fillRect(0, 2, 1, 1);
    patternCtx.fillRect(2, 0, 1, 1);
    patternCtx.fillRect(2, 2, 1, 1);

    return patternCanvas;
  }

  pattern_03() {
    let patternCanvas = document.createElement("canvas");
    patternCanvas.width = 2;
    patternCanvas.height = 2;
    const patternCtx = patternCanvas.getContext("2d");

    patternCtx.fillStyle = this.color;
    patternCtx.fillRect(0, 0, 1, 1);
    patternCtx.fillRect(1, 1, 1, 1);

    return patternCanvas;
  }

  pattern_04() {
    let patternCanvas = document.createElement("canvas");
    patternCanvas.width = 4;
    patternCanvas.height = 4;
    const patternCtx = patternCanvas.getContext("2d");

    patternCtx.fillStyle = this.color;
    patternCtx.fillRect(0, 0, 4, 4);
    patternCtx.fillStyle = "white";
    patternCtx.fillRect(0, 0, 1, 1);
    patternCtx.fillRect(0, 2, 1, 1);
    patternCtx.fillRect(2, 0, 1, 1);
    patternCtx.fillRect(2, 2, 1, 1);

    return patternCanvas;
  }

  pattern_05() {
    let patternCanvas = document.createElement("canvas");
    patternCanvas.width = 6;
    patternCanvas.height = 6;
    const patternCtx = patternCanvas.getContext("2d");

    patternCtx.fillStyle = this.color;
    patternCtx.fillRect(0, 0, 6, 6);
    patternCtx.fillStyle = "white";
    patternCtx.fillRect(1, 1, 1, 1);
    patternCtx.fillRect(4, 1, 1, 1);
    patternCtx.fillRect(1, 4, 1, 1);
    patternCtx.fillRect(4, 4, 1, 1);

    return patternCanvas;
  }
}
