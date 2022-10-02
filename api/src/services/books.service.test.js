const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(2);
    });
  });
});
