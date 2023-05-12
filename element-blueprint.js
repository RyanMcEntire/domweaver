import Element from './element-maker.js';

export default function bp(type, className) {
  return new Element(type).addAttributes({
    class: className,
  });
}
