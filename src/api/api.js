import { wxRequest } from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
const apiMall = 'http://localhost:5000'

const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");

const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');


const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');

const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

const getAdGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');

const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');

const getGoodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');

const addToZAN = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add');

const cancelZAN = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete');

const isGoodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');

const addToFav = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');

const cancelFav = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');

const getRootCategoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');

const getChildCategoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');

const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');

const getSearchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');

const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear');


export default {
  wxJsCode2Session,
  getUserInfo,
  getHomeDisvocerList,
  getAdList,
  getAdGoodsList,
  getGoodsList,
  getGoodsDetail,
  favoriteGoods,
  unfavoriteGoods,
  isGoodsFavorite,
  getRootCategoryList,
  getChildCategoryList,
  addToCart,
  addSearchKeyword,
  getSearchKeywordList,
  clearSearchKeyword
}
