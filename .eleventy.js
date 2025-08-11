module.exports = function(eleventyConfig) {
  // Copy folder admin agar config.yml dan index.html ikut dibuild
  eleventyConfig.addPassthroughCopy("admin");

  // Copy folder static agar file upload media bisa diakses
  eleventyConfig.addPassthroughCopy("static");

  // Copy folder content agar bisa digunakan di CMS
  eleventyConfig.addPassthroughCopy("content");

  return {
    dir: {
      input: "src",          // Folder utama konten website
      includes: "_includes", // Template
      data: "_data",         // Data global
      output: "_site"        // Hasil build
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
