const all_category_btns = document.querySelectorAll(".category_btn");
const all_products_category_mega_menu_container = document.querySelectorAll(".products_category_mega_menu_container");
all_category_btns.forEach((each_category_btn)=>{
  each_category_btn.addEventListener("mouseover",(e)=>{
    // ======================================= initially hide the mega menu contianerers & remove the active classes from the all the btns =======================================
    const current_category_btn = each_category_btn.dataset.product_category_btn;
    const current_category_mega_menu_box = document.getElementById(current_category_btn);
    all_category_btns.forEach((each_category_btn)=>{
      each_category_btn.classList.remove("active_category_btn");
    })
    all_products_category_mega_menu_container.forEach((each_product_category_mega_menu_container)=>{
      each_product_category_mega_menu_container.classList.remove("showhide_megamenu_container");
    })
    // ======================================= show the respective mega menu container whose id is matched with its respective btn's custom attribute's value =======================================
    current_category_mega_menu_box.classList.add("showhide_megamenu_container");
    each_category_btn.classList.add("active_category_btn");
  })
  all_products_category_mega_menu_container.forEach((each_product_category_mega_menu_container)=>{
    // ======================================= hide the mega menu as the user moves out of the mega menu container and reset everything =======================================
    each_product_category_mega_menu_container.addEventListener("mouseleave",(e)=>{
      each_product_category_mega_menu_container.classList.remove("showhide_megamenu_container");
      each_category_btn.classList.remove("active_category_btn");
    })
  })
})
