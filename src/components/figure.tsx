import Image from 'next/image';

export default function Figure({
  src,
  alt,
  caption,
  float,
  href,
  external,
  aspectRatio = '16 / 9',
}: {
  src: string;
  float?: 'right' | 'left';
  aspectRatio?: string;
  href?: string;
  external?: boolean;
} & ({ alt: string; caption?: string } | { caption: string; alt?: string })) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{ aspectRatio }}
      src={src}
      alt={(alt ?? caption) as string}
      className="my-0 w-full rounded-xl object-cover"
    />
  );
  return (
    <figure
      className={`w-full select-none ${
        float !== undefined ? 'pb-3 md:my-0 md:max-w-[18rem]' : ''
      } ${float === 'left' ? 'float-left md:mr-6' : ''} ${
        float === 'right' ? 'float-right md:ml-6' : ''
      }`}
    >
      {href ? (
        <a href={href} target={external ? '_blank' : '_self'}>
          {img}
        </a>
      ) : (
        img
      )}
      {caption && (
        <figcaption className="mt-2 select-text">{caption}</figcaption>
      )}
    </figure>
  );
}
