const all_category_btns = document.querySelectorAll(".category_btn");
const all_products_category_mega_menu_container = document.querySelectorAll(".products_category_mega_menu_container");
all_category_btns.forEach((each_category_btn)=>{
  each_category_btn.addEventListener("mouseover",(e)=>{
    const current_category_btn = each_category_btn.dataset.product_category_btn;
    const current_category_mega_menu_box = document.getElementById(current_category_btn);
    all_category_btns.forEach((each_category_btn)=>{
      each_category_btn.classList.remove("active_category_btn");
    })
    all_products_category_mega_menu_container.forEach((each_product_category_mega_menu_container)=>{
      each_product_category_mega_menu_container.classList.remove("showhide_megamenu_container");
    })
    current_category_mega_menu_box.classList.add("showhide_megamenu_container");
    each_category_btn.classList.add("active_category_btn");
  })
  all_products_category_mega_menu_container.forEach((each_product_category_mega_menu_container)=>{
    each_product_category_mega_menu_container.addEventListener("mouseleave",(e)=>{
      each_product_category_mega_menu_container.classList.remove("showhide_megamenu_container");
      each_category_btn.classList.remove("active_category_btn");
    })
  })
})
