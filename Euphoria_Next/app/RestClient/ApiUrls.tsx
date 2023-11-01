
export default class BaseUrl{
  static baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

  static login = this.baseUrl + '/api/auth/login'
  static register = this.baseUrl + '/api/auth/register'
  static confirmEmail = '/api/verifyEmail/sendCode'
  static addProduct = this.baseUrl + '/api/product/addProduct'
  static getProducts = this.baseUrl + '/api/product/getAll'
}