const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    growEditionSizeTo: 30,
    variation: 'input1',
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Pupil" },
      { name: "Mouth" },
      { name: "Right Hand" },
      { name: "Left Hand" },
      { name: "Leg" },
    ]
  },
  {
    growEditionSizeTo: 30,
    variation: 'input2',
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Lip" },
      { name: "Pupil" },
    ],
  }
];

const format = {
  width: 500,
  height: 500,
};

const background = {
  generate: true,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = " ";

const uniqueDnaTorrance = 15;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
