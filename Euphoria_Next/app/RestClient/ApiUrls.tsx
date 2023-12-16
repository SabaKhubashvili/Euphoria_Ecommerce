
export default class BaseUrl{
  static baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

  static login = this.baseUrl + '/api/auth/login'
  static register = this.baseUrl + '/api/auth/register'
  static confirmEmail = '/api/verifyEmail/sendCode'
  static getProducts = this.baseUrl + '/api/product/getAll'
  static getProductById = this.baseUrl + '/api/product/get'
  static getLimitedProducts = this.baseUrl + '/api/product/getLimited/'
  static addToFavorites = this.baseUrl + '/api/product/toggleFavorites'
  static getFavorites = this.baseUrl + '/api/product/getAllFavorites'
  static getRecommendedProducts = this.baseUrl + '/api/product/getRecommended'
  
  
  static addToCart = this.baseUrl + '/api/cart/add'
  static getCart = this.baseUrl + '/api/cart/getAll'
  static deleteCartRow = this.baseUrl + '/api/cart/remove/'
  static updateQuantity = this.baseUrl + '/api/cart/updateQuantity'
  static clearCart = this.baseUrl + '/api/cart/clear'
  
  static checkCoupon = this.baseUrl + '/api/coupon/check'
  
  
  //* Admin 
  
    static addProduct = this.baseUrl + '/api/product/addProduct'
    static updateProduct = this.baseUrl + '/api/product/update'
    static deleteProduct = this.baseUrl + '/api/product'
    
    static getOrders = this.baseUrl + '/api/order/getAll'
    static updateOrderStatus = this.baseUrl + '/api/order/updateStatus'
  
    static getCategories = this.baseUrl + '/api/categories/getAll/'
    static addCategory = this.baseUrl + '/api/categories/add'
    static deleteCategory = this.baseUrl + '/api/categories'

    static addCoupon = this.baseUrl + '/api/coupon/add'
    static getCoupons = this.baseUrl + '/api/coupon/getAll'
    static updateCoupon = this.baseUrl + '/api/coupon/update'
    static deleteCoupon = this.baseUrl + '/api/coupon/delete'

    static getCustomers = this.baseUrl + '/api/user/getAll'

    static addAdmin = this.baseUrl + '/api/user/admin/add'
    static removeAdmin = this.baseUrl + '/api/user/admin/remove'
}