import { useEffect, useRef, useState } from "react";
import photoGroups from "../data/photos.js";

const GAP = 20; // pixels; keep in step with --gap in index.css

const ratio = (photo) => photo.width / photo.height;
const slug = (text) => text.replace(/\s+/g, "-").toLowerCase();

function Photo({ photo, onOpen, style }) {
  return (
    <figure className="photo" style={{ "--ratio": ratio(photo).toFixed(4), ...style }}>
      <button
        type="button"
        className="gallery-button"
        onClick={() => onOpen(photo)}
        aria-label={`View larger: ${photo.caption}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
        />
      </button>
    </figure>
  );
}

// A row of photos that all share one height. With a rowHeight, the row stops
// at the width where its photos reach that height.
function Row({ block, onOpen }) {
  const { photos, rowHeight } = block;
  const maxWidth = rowHeight
    ? Math.round(photos.reduce((sum, p) => sum + ratio(p), 0) * rowHeight + GAP * (photos.length - 1))
    : undefined;
  return (
    <div className="photo-row" style={{ maxWidth }}>
      {photos.map((photo) => (
        <Photo key={photo.src} photo={photo} onOpen={onOpen} />
      ))}
    </div>
  );
}

// One tall photo beside two wide photos stacked. The widths below are worked
// out so that the tall photo and the stack end up exactly the same height with
// no cropping: the stack's height is (width / ratio of top) + (width / ratio of
// bottom) + gap, and the tall photo's height is its width / its ratio.
function Trio({ block, onOpen }) {
  const [tall, top, bottom] = block.photos;
  const rTall = ratio(tall);
  const stackRatio = 1 / (1 / ratio(top) + 1 / ratio(bottom));
  const total = rTall + stackRatio;
  const calc = (share, gaps) =>
    `calc(${(share).toFixed(5)} * 100% + ${gaps.toFixed(5)} * var(--gap))`;
  const tallWidth = calc(rTall / total, (rTall * (stackRatio - 1)) / total);
  const stackWidth = calc(stackRatio / total, (-(1 + rTall) * stackRatio) / total);

  return (
    <div className={block.flip ? "photo-trio photo-trio-flip" : "photo-trio"}>
      <Photo photo={tall} onOpen={onOpen} style={{ "--w": tallWidth }} />
      <div className="photo-stack" style={{ "--w": stackWidth }}>
        <Photo photo={top} onOpen={onOpen} />
        <Photo photo={bottom} onOpen={onOpen} />
      </div>
    </div>
  );
}

export default function PhotographyPage() {
  const [active, setActive] = useState(null); // the photo shown larger, if any
  const dialogRef = useRef(null);

  // The viewer is a native <dialog>: Escape closes it and focus is handled for us.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <div className="photo-page">
      <div className="container">
        <h1>Photography</h1>
        <p className="photo-page-intro">
          Sports, portraits, and places. Select a photo to see it larger.
        </p>

        {photoGroups.map((group) => (
          <section
            className="photo-group"
            key={group.title}
            aria-labelledby={`group-${slug(group.title)}`}
          >
            <h2 id={`group-${slug(group.title)}`}>{group.title}</h2>
            {group.blocks.map((block, index) =>
              block.layout === "trio" ? (
                <Trio key={index} block={block} onOpen={setActive} />
              ) : (
                <Row key={index} block={block} onOpen={setActive} />
              )
            )}
          </section>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={active ? active.caption : "Photo viewer"}
        onClose={() => setActive(null)}
        onClick={(event) => {
          // A click on the dark area around the photo closes the viewer.
          if (event.target === event.currentTarget) setActive(null);
        }}
      >
        {active && (
          <>
            <img src={active.src} alt={active.alt} />
            <div className="lightbox-bar">
              <p>
                {active.caption}
                {active.details && <span>{active.details}</span>}
              </p>
              <button type="button" onClick={() => setActive(null)}>Close</button>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
