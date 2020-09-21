// rev vars for orders here - */order-confirmation*

const revenue = {
  subtotal: dataLayer[2].ecommerce.purchase.actionField.revenue,
  shipping: dataLayer[2].ecommerce.purchase.actionField.shipping,
  tax: dataLayer[2].ecommerce.purchase.actionField.tax,
  total: dataLayer[5].orderConfirmation_total,
};
