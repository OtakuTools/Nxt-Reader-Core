import BookmarkModel from "../model/BookmarkModel";
import NoteModel from "../model/NoteModel";
import PageModel from "../model/PageModel";
import RemarkModel from "../model/RemarkModel";

interface BookInstanceInterface {
  getTextBetween: (startPos: number, endPos: number) => string
  addNote: (pos: number, text: string) => void
  addBookmark: (pos: number, text: string) => void
  addRemark: (pos: number, text: string) => void
  getCurrentPos: () => number
  getCurrentPage: () => PageModel
  getNote: (pos: number) => NoteModel
  getBookmark: (pos: number) => BookmarkModel
  getRemark: (pos: number) => RemarkModel
}

export default BookInstanceInterface;
