const backendDomain = "http://localhost:3000";

const summaryApi = {
  signUp: {
    url: `${backendDomain}/api/auth/register`,
    method: "POST",
  },
  signIn: {
    url: `${backendDomain}/api/auth/login`,
    method: "POST",
  },
  current_user: {
    url: `${backendDomain}/api/user/details`,
    method: "GET",
  },
  logout_user: {
    url: `${backendDomain}/api/auth/logout`,
    method: "GET",
  },
  allUsers: {
    url: `${backendDomain}/api/user/all`,
    method: "GET",
  },
  deleteUser: {
    url: `${backendDomain}/api/user/delete`,
    method: "DELETE",
  },
  updateUser: {
    url: `${backendDomain}/api/user/update`,
    method: "PUT",
  },
  addCategory: {
    url: `${backendDomain}/api/category/add`,
    method: "POST",
  },
  allCategories: {
    url: `${backendDomain}/api/category/all`,
    method: "GET",
  },
  deleteCategory: {
    url: `${backendDomain}/api/category/delete`,
    method: "DELETE",
  },
  updateCategory: {
    url: `${backendDomain}/api/category/update`,
    method: "PUT",
  },
  addAddress: {
    url: `${backendDomain}/api/address/add`,
    method: "POST",
  },
  allAddresses: {
    url: `${backendDomain}/api/address/all`,
    method: "GET",
  },
  deleteAddress: {
    url: `${backendDomain}/api/address/delete`,
    method: "DELETE",
  },
  updateAddress: {
    url: `${backendDomain}/api/address/update`,
    method: "PUT",
  },
  addProduct: {
    url: `${backendDomain}/api/product/add`,
    method: "POST",
  },
  allProducts: {
    url: `${backendDomain}/api/product/all`,
    method: "GET",
  },
  deleteProduct: {
    url: `${backendDomain}/api/product/delete`,
    method: "DELETE",
  },
  updateProduct: {
    url: `${backendDomain}/api/product/update`,
    method: "PUT",
  },
  allOrders: {
    url: `${backendDomain}/api/order/all`,
    method: "GET",
  },
  deleteOrder: {
    url: `${backendDomain}/api/order/delete`,
    method: "DELETE",
  },
  allOrderItems: {
    url: `${backendDomain}/api/order-item/all`,
    method: "GET",
  },
  deleteOrderItem: {
    url: `${backendDomain}/api/order-item/delete`,
    method: "DELETE",
  },
  allPayments: {
    url: `${backendDomain}/api/payment/all`,
    method: "GET",
  },
  deletePayment: {
    url: `${backendDomain}/api/payment/delete`,
    method: "DELETE",
  },
  allReviews: {
    url: `${backendDomain}/api/review/all`,
    method: "GET",
  },
  deleteReview: {
    url: `${backendDomain}/api/review/delete`,
    method: "DELETE",
  },
};

export default summaryApi;
