/** The async functions for 11ty images don't work inside macros in nunjucks
 *  ------------------------------------------------------------------------------------------------
 *  see: https://github.com/mozilla/nunjucks/issues/1252
 *  they do work here though!
 *  this code scans frontmatter for images and processes any it finds
 *  image details are then available in the imagesComputed object keyed by their src
**/
const Image = require('@11ty/eleventy-img');
const fs = require('fs');

module.exports = async () => ({
  imagesComputed: async (data) => {
    const images = [];

    // find all images on the current page
    // checks in content blocks
    [
      ...(data.genericContentBlocks || []),
    ].forEach(
      (section) => {
        [
          ...(section.content || []),
          ...(section.leftColumnContent || []),
          ...(section.rightColumnContent || []),
        ].forEach(
          (contentBlock) => {
            if (contentBlock.type === 'image' && contentBlock.src) {
              images.push({
                src: contentBlock.src,
                alt: contentBlock.alt || '',
                sizes: contentBlock.sizes || '(min-width: 1800px) 1800px, 100vw',
              });
            }
          },
        );
      },
    );

    const imageDetails = {};

    await Promise.all((images || []).map(async (image) => {
      const metadata = await Image(image.src, {
        widths: [5, 300, 600, 1200, 1800, 2700],
        formats: ['webp', 'jpeg'],
        outputDir: './dist/images/',
        urlPath: '/images/',
      });

      const lowsrc = metadata.jpeg[2];

      const buff = fs.readFileSync(`./dist/${metadata.jpeg[0].url}`);
      const baseSixFour = buff.toString('base64');
      // const baseSixFour = '';

      const str = `<picture> ${Object.values(metadata).map(
        (imageFormat) => ` <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map((entry) => entry.srcset).join(', ')}" sizes="${image.sizes}">`,
      ).join('\n')}
            <img
              src="${lowsrc.url}"
              width="${lowsrc.width}"
              height="${lowsrc.height}"
              alt="${image.alt}"
              loading="lazy"
              decoding="async">
          </picture>
          <div
            class="PaddedImage__padder"
            style="
            padding-bottom: ${(lowsrc.height / lowsrc.width) * 100}%;
            background-image:url(data:image/png;base64,${baseSixFour});
            "
          ></div>`;
      imageDetails[image.src] = str;
    }));

    return imageDetails;
  },
});
