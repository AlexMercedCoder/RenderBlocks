// RenderBlock => by Alex Merced

//////////////
//CaptureProps
/////////////

export const captureProps = (element) => {
  const att = [...element.attributes];
  const entries = att.map((value) => {
    return [value.name, value.value];
  });

  return Object.fromEntries(entries);
};

//////////////
//RenderBlock
/////////////

export class RenderBlock {
  constructor(options) {
    this.target = document.querySelector(options.target);
    this.info = options.info;
    this.methods = options.methods;
    this.props = captureProps(this.target);
    this.render = options.render;
    this.before = options.before;
    this.after = options.after;
    this.initialBefore = options.initialBefore;
    this.initialAfter = options.initialAfter;
    this.initialBefore ? this.initialBefore(this) : null;
    this.build(this);
    this.initialAfter ? this.initialAfter(this) : null;
  }

  build(block) {
    this.before ? this.before(this) : null;
    this.target.innerHTML = this.render(this);
    this.after ? this.after(this) : null;
  }

  useMethod(method) {
    this.methods[method](this);
  }

  updateInfo(key, value) {
    this.info[key] = value;
    this.build(this);
  }
}
