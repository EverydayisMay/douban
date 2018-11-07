import jsonp from '@/assets/js/jsonp';
import {
  recommedParams,
  commonMoviesParams,
  commonBooksParams,
  options
} from './config';
import axios from 'axios';

export function getRecommendData () {
  const url = 'https://m.douban.com/rexxar/api/v2/recommend_feed';
  const data = Object.assign({}, recommedParams)
  return jsonp(url, data)
}

export function getHotMovies () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items';
  const data = Object.assign({}, commonMoviesParams)
  return jsonp(url, data)
}

export function getFreeMovies () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items';
  const data = Object.assign({}, commonMoviesParams)
  return jsonp(url, data)
}

export function getNewMovies () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items';
  const data = Object.assign({}, commonMoviesParams)
  return jsonp(url, data)
}

export function getMoviesTypes () {
  const url = '/static/movieTypes.json';
  return axios.get(url)
}

export function getGoodMoives () {
  const url = '/static/findGoodMovies.json';
  return axios.get(url)
}

export function getfictionBook () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items';
  const data = Object.assign({}, commonBooksParams)
  return jsonp(url, data)
}

export function getnoFictionBook () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items';
  const data = Object.assign({}, commonBooksParams)
  return jsonp(url, data)
}

export function getBookShop () {
  const url =
    'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items';
  const data = Object.assign({}, commonBooksParams)
  return jsonp(url, data)
}

export function getBookTypes () {
  const url = '/static/movieTypes.json';
  return axios.get(url)
}

export function getGoodBook () {
  const url = '/static/findGoodMovies.json';
  return axios.get(url)
}
