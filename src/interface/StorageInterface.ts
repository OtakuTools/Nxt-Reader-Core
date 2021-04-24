import BookModel from '../model/BookModel';
import ReaderSettingModel from '../model/ReaderSettingModel';

interface StorageInterface {
  // 加载书本
  loadBook: (url: string, mode: 'local' | 'remote') => BookModel

  // 添加书本
  addBook: (url: string, mode: 'local' | 'remote') => string

  // 删除书本
  removeBook: (bookId: string) => boolean

  // 加载阅读器设置
  loadReaderSetting: () => ReaderSettingModel

  // 设置阅读器设置
  setReaderSetting: (option: any) => boolean
}

export default StorageInterface;
