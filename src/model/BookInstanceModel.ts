import BookmarkModel from './BookmarkModel';
import ChapterModel from './ChapterModel';
import NoteModel from './NoteModel';
import RemarkModel from './RemarkModel';
import PageModel from './PageModel';
import BookIndexModel from './BookIndexModel';

interface BookInstanceModel {
  id: string
  name: string
  url: string
  author: string
  progress: string
  currentPos: number
  chapterInfo: ChapterModel[]
  notes: NoteModel[],
  bookmarks: BookmarkModel[]
  remarks: RemarkModel[]
  index: BookIndexModel[]
}

export default BookInstanceModel;
