import BookIndexModel from '../model/BookIndexModel';
import PageModel from '../model/PageModel';
import RemarkModel from '../model/RemarkModel';
import RenderStyleModel from '../model/RenderStyleModel';

interface ReaderInterface {
  // 下一页
  nextPage: () => PageModel

  // 上一页
  prevPage: () => PageModel

  // 跳转某一页
  gotoPage: (pageNumber: number) => PageModel

  // 获取总页数
  getPageCount: () => number

  // 获取当前页码
  getCurrentPageCount: () => number

  // 获取目录
  getBookIndex: () => BookIndexModel[]

  // 搜索功能
  searchBookContent: (query: string) => RemarkModel[]

  // 高亮功能
  highlightBookContent: (content: RemarkModel) => void

  // 添加备注
  addRemark: (startPos: number, endPos: number, content: string) => void

  // 添加书签
  addBookmark: (page: number) => void

  // 添加笔记
  addNote: (content: string) => void

  // 设置样式
  setReaderStyle: (styleObj: any) => void

  // 设置阅读器
  setReaderSetting: (settingObj: any) => void

  // 获取渲染配置项
  getRenderOptions: () => RenderStyleModel
}

export default ReaderInterface;
