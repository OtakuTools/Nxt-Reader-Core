import BookInstanceModel from './BookInstanceModel';

class BookModel {
  id: string
  isLocal: boolean
  belongToClass: string

  bookInstance: BookInstanceModel
}

export default BookModel;
