export const newVariantWrapper = `
<div class="new-variant-wrapper">
  <section class="hm-left-section">
    <div class="hm-left-top"><div class="hm-main-image">
      <img class="main-image" src="" alt="">
    </div></div>
    <div class="hm-left-bottom"><div class="hm-summary-wrapper">
      <h3>Order Summary</h3>
      <table class="summary-table">
        <colgroup>
          <col style="width: 35%">
          <col style="width: 15%">
          <col style="width: 25%">
          <col style="width: 25%">
        </colgroup>
        <thead>
          <tr>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody><tr class="t-item t-item-placeholder"><td>No elements</td></tr></tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th></th>
            <th><span class="table-quantity">0</span> pcs</th>
            <th><span class="table-currency">£</span><span class="table-total">0.00</span></th>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="hm-customisation-wrapper">
      <h3>Order Customisation</h3>
      <div class="customisation-summary">
        <div class="logo-position">Logo position: <span></span></div>
        <div class="application-method">Application method: <span></span></div>
        <div class="upload-image">Image: <span><em>Please, choose an image</em></span></div>
      </div>
      <div class="customisation-box-wrapper">
        <div class="logo-box"><img src="https://eu.evocdn.io/dealer/1021/content/media/My_Theme/variant-products/icons/workwear-placeholder.png"></div>
        <div class="application-box"><img src="https://eu.evocdn.io/dealer/1021/content/media/My_Theme/variant-products/icons/workwear-placeholder.png"></div>
        <div class="upload-box"><img src="https://eu.evocdn.io/dealer/1021/content/media/My_Theme/variant-products/icons/no-logo-uploaded.png"></div>
      </div>
    </div>
    <div class="hm-button-wrapper">
      <button class="btn btn-sm btn-primary btn-add-variants-to-cart addcartqueue">Add to Basket</button>
    </div></div>
  </section>
  <section class="hm-right-section">
    <div class="hm-top">
      <div class="hm-product-title-wrapper">
        <h1 class="hm-title"></h1>
        <div class="hm-total-price"><span class="currency">£</span><span class="total-price">0.00</span></div>
      </div>
      <div class="hm-product-brand-wrapper">
        <p class="hm-product-brand">Brand: <a href="#" class="hm-product-brand-link"></a></p>
      </div>
      <div class="hm-product-category-wrapper">
        <p class="hm-product-category">
          Category:
          <a href="#" class="hm-product-category-link"></a>
        </p>
      </div>
    </div>
    <div class="hm-description">
      <h3 class="hm-description-title">Description</h3>
      <p class="hm-description-content"></p>
    </div>
    <div class="hm-config">
      <div class="hm-color-config">
        <div class="color-name">Color: <span></span></div>
        <div class="color-box-wrapper"></div>
      </div>
      <div class="hm-size-config">
        <div class="hm-size-guide">
          <p>Choose your sizes <a href="#">(size guide)</a></p>
        </div>
        <div class="size-box-wrapper"></div>
      </div>
      <div class="hm-logo-position-config">
        <div class="logo-position">Logo position: <span></span></div>
        <div class="logo-position-box-wrapper"></div>
      </div>
      <div class="hm-application-method-config">
        <div class="application-method">Application method: <span></span></div>
        <div class="application-method-box-wrapper"></div>
      </div>
      <div class="hm-upload-image-config">
        <div class="upload-image">Upload image</div>
        <div class="upload-image-box-wrapper">
          <div class="drop-zone" id="dropZone">
            <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <h3>Drop image here or click to upload</h3>
            <p>Supports: JPG, PNG, GIF, WebP</p>
            <input type="file" id="fileInput" class="file-input" accept="image/*">
          </div>
          <div class="image-preview" id="imagePreview">
            <div class="image-container">
              <img id="previewImg" src="" alt="Preview">
              <button class="remove-btn" id="removeBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div class="image-name" id="imageName"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
`;
