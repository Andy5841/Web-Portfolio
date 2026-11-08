// Photography page. Photos are grouped; each group gets a heading, and each
// group is made of blocks. Files live in public/images/.
//
// Block layouts:
//   "row"  - photos side by side, all the same height (any number of photos).
//   "trio" - three photos: one tall photo beside two wide photos stacked on top
//            of each other. Order matters: [tall, wide, wide].
//            Add flip: true to put the tall photo on the right.
//
// Per photo:
//   src, alt, caption  - the file, a description for screen readers, a label
//                        (the caption shows in the enlarged view)
//   width, height      - pixel size as the photo appears (keeps every photo uncropped)
//   details            - optional second caption line (for example camera settings)
// Per row block:
//   rowHeight          - optional, in pixels. Stops a row of only a few photos from
//                        stretching across the whole page. Leave it out for full width.
const photoGroups = [
  {
    title: "Sports",
    blocks: [
      {
        layout: "row",
        photos: [
          {
            src: "/images/Volleyball1.JPG",
            alt: "In black and white, a volleyball player in a number 2 jersey stands on the court with both hands on his head while spectators sit on the bleachers behind him",
            caption: "Volleyball, black and white",
            width: 777,
            height: 1169,
          },
          {
            src: "/images/Volleyball3.JPG",
            alt: "A volleyball player in a black number 24 jersey holds his head with both hands while spectators in the bleachers behind him cheer and react",
            caption: "Volleyball",
            width: 777,
            height: 1169,
          },
          {
            src: "/images/Volleyball2.PNG",
            alt: "A volleyball player in a black number 24 jersey jumps to hit the ball at the net while two opposing players reach up to block",
            caption: "Volleyball",
            details: "55mm f/4.0 1/640 ISO 6400",
            width: 716,
            height: 1078,
          },
          {
            src: "/images/Volleyball4.PNG",
            alt: "A volleyball player in a blue number 17 jersey jumps at the net to hit the ball while an opponent in a red jersey watches",
            caption: "Volleyball",
            details: "60mm f/4.0 1/800 ISO 3200",
            width: 716,
            height: 1078,
          },
        ],
      },
    ],
  },
  {
    title: "Portraits",
    blocks: [
      {
        layout: "row",
        rowHeight: 560,
        photos: [
          {
            src: "/images/Portrait1.JPG",
            alt: "A person in a floral dress looking toward the water, standing among tall golden grass and yellow leaves",
            caption: "Portrait by the water",
            width: 1713,
            height: 2576,
          },
          {
            src: "/images/Portrait2.JPG",
            alt: "A person with long hair seen from behind, looking out at the water from a field of autumn grass at sunset",
            caption: "Portrait at sunset",
            width: 1713,
            height: 2576,
          },
        ],
      },
    ],
  },
  {
    title: "Places",
    blocks: [
      {
        layout: "trio",
        photos: [
          {
            src: "/images/Duke.JPG",
            alt: "A Gothic stone chapel with a tall tower under a cloudy sky",
            caption: "Duke University",
            width: 1713,
            height: 2576,
          },
          {
            src: "/images/hero-nyc.JPG",
            alt: "The Brooklyn Bridge and the Manhattan skyline at dusk",
            caption: "Brooklyn Bridge, New York",
            width: 5998,
            height: 3988,
          },
          {
            src: "/images/hero-prudential.JPG",
            alt: "The Prudential Center in Boston against a pink and orange sunset sky",
            caption: "Prudential Center, Boston",
            width: 5279,
            height: 2969,
          },
        ],
      },
      {
        layout: "trio",
        flip: true,
        photos: [
          {
            src: "/images/IMG_8670.jpeg",
            alt: "A framed portrait painting above a marble-topped table with a flower arrangement, beside a tall candelabra lamp",
            caption: "Framed portrait and flowers",
            width: 1932,
            height: 2576,
          },
          {
            src: "/images/DSC_0165_2.JPG",
            alt: "Pink and purple sunset clouds over city rooftops and office buildings",
            caption: "Sunset over rooftops",
            width: 2576,
            height: 1449,
          },
          {
            src: "/images/photography-shadow.jpg",
            alt: "A photographer's shadow and palm tree shadows on a sunlit lawn",
            caption: "Shadows on a lawn",
            width: 2560,
            height: 1920,
          },
        ],
      },
    ],
  },
  {
    title: "Sky",
    blocks: [
      {
        layout: "row",
        photos: [
          {
            src: "/images/palm-tree.jpg",
            alt: "A palm tree against a blue sky with thin clouds",
            caption: "Palm tree",
            width: 1920,
            height: 2560,
          },
          {
            src: "/images/MyrtleBeach2.JPG",
            alt: "A gull flying against a blue sky with soft clouds",
            caption: "Gull, Myrtle Beach",
            width: 1713,
            height: 2576,
          },
          {
            src: "/images/MyrtleBeach1.JPG",
            alt: "Rays of sunlight breaking through clouds, with a small bird in flight",
            caption: "Sky at sunset, Myrtle Beach",
            width: 1713,
            height: 2576,
          },
        ],
      },
    ],
  },
];

export default photoGroups;
