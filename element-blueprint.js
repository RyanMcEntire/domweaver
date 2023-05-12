import Element from './element-maker';

export default function bp(type, className) {
  return new Element(type).addAttributes({
    class: className,
  });
}
