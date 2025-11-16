import { colorAttributes } from "./utils/color-attributes.js";
import { newVariantWrapper } from "./views/new-variant-layout.js";
import { mainStyle } from "./utils/style.js";

(() => {
  // Apply style for variant products
  const mainStyleElement = document.createElement("style");
  mainStyleElement.innerHTML = mainStyle;
  document.head.append(mainStyleElement);

  //Apply main layout for variant products
  const newVariantLayout = document.createElement("div");
  newVariantLayout.classList = "new-variant-layout";
  newVariantLayout.setAttribute("role", "row-section");
  const zoneTop = document.querySelector(".zonetop");
  newVariantLayout.innerHTML = newVariantWrapper;
  let breadcrumbs;
  breadcrumbs = zoneTop.querySelector('div[role="row-section"]:has(#breadcrumb)');
  if (!breadcrumbs) {
    const tempBreadcrumbs = document.querySelector(".row-breadcrumb:has(#breadcrumb)");
    tempBreadcrumbs.classList.add("col", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
    breadcrumbs = document.createElement("div");
    breadcrumbs.setAttribute("role", "row-section");
    breadcrumbs.innerHTML = `
    <div class="container">
      <div role="row-wrapper">
        <div class="row">
        ${tempBreadcrumbs.innerHTML}
        </div>
      </div>
    </div>
    `;
  }
  const productLayout = zoneTop.querySelector('div[role="row-section"]:has(.productsummary_container)');
  const catalogSingle = document.querySelectorAll(".catalog-single");
  catalogSingle.forEach((e) => {
    e.classList.add("hide");
  });
  if (productLayout) productLayout.classList.add("hide");
  zoneTop.prepend(breadcrumbs, newVariantLayout);
})();
