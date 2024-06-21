export default interface IResponse<T> {
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  docs: T[];
}
